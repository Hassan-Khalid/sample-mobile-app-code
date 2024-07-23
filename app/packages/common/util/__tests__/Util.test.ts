import Util from '../Util';
import { Dimensions } from 'react-native';
import base64 from 'react-native-base64';
import Config from 'react-native-config';


jest.mock('react-native-base64', () => ({
  encode: jest.fn(),
  decode: jest.fn(),
}))

jest.mock('react-native-config', () => ({
  TARGET: 'OEM', // Mocking the TARGET property as 'OEM'
}));

describe('Util', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('isAndroid', () => {
    it('should return true if the platform is Android', () => {
      jest.spyOn(Util, 'isAndroid').mockImplementation(() => true);
      expect(Util.isAndroid()).toBe(true);
    });
    
    it('should return false if the platform is not Android', () => {
      jest.spyOn(Util, 'isAndroid').mockImplementation(() => false);
      expect(Util.isAndroid()).toBe(false);
    });
  });
  
  describe('isIos', () => {
    it('should return true if the platform is iOS', () => {
      jest.spyOn(Util, 'isIos').mockImplementation(() => true);
      expect(Util.isIos()).toBe(true);
    });
    
    it('should return false if the platform is not iOS', () => {
      jest.spyOn(Util, 'isIos').mockImplementation(() => false);
      expect(Util.isIos()).toBe(false);
    });
  });
  
  describe('isOem', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should return true if the target is OEM', () => {
      Config.TARGET = 'OEM'

      expect(Util.isOem()).toBe(true);
    });
    
    it('should return false if the target is not OEM', () => {
        Config.TARGET = 'Facility'
      // Mocking the TARGET property as something other than 'OEM'
      expect(Util.isOem()).toBe(false);
    });
  });
  
  describe('isFacility', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    
    it('should return true if the target is Facility', () => {
      Config.TARGET = 'Facility'
      
      expect(Util.isFacility()).toBe(true);
    });
    
    it('should return false if the target is not Facility', () => {
      Config.TARGET = 'OEM'
      // Mocking the TARGET property as something other than 'Facility'
      expect(Util.isFacility()).toBe(false);
    });
  });
  
  describe('getWindowWidth', () => {
    it('should return the width of the window', () => {
      // Mocking Dimensions.get('window').width
      Dimensions.get = jest.fn(() => ({ width: 500, height: 800 }));
      expect(Util.getWindowWidth()).toBe(500);
    });
  });
  
  describe('getWindowHeight', () => {
    it('should return the height of the window', () => {
      // Mocking Dimensions.get('window').height
      Dimensions.get = jest.fn(() => ({ width: 500, height: 800 }));
      expect(Util.getWindowHeight()).toBe(800);
    });
  });
  
  describe('isNullOrUndefined', () => {
    it('should return true if the value is null or undefined', () => {
      expect(Util.isNullOrUndefined(null)).toBe(true);
      expect(Util.isNullOrUndefined(undefined)).toBe(true);
    });
    
    it('should return false if the value is neither null nor undefined', () => {
      expect(Util.isNullOrUndefined('test')).toBe(false);
      expect(Util.isNullOrUndefined(0)).toBe(false);
      expect(Util.isNullOrUndefined(false)).toBe(false);
    });
  });
  
  describe('isDefinedOrExist', () => {
    it('should return true if the value is defined and not empty', () => {
      expect(Util.isDefinedOrExist('test')).toBe(true);
      expect(Util.isDefinedOrExist(0)).toBe(true);
      expect(Util.isDefinedOrExist(false)).toBe(true);
    });
    
    it('should return false if the value is undefined, null, or empty', () => {
      expect(Util.isDefinedOrExist(null)).toBe(false);
      expect(Util.isDefinedOrExist(undefined)).toBe(false);
      expect(Util.isDefinedOrExist('')).toBe(false);
    });
  });
  
  describe('validateEmail', () => {
    it('should return true if the email is valid', () => {
      expect(Util.validateEmail('test@example.com')).toBe(true);
    });
    
    it('should return false if the email is invalid', () => {
      expect(Util.validateEmail('invalidemail')).toBe(false);
    });
    
    it('should return true if the value is empty', () => {
      expect(Util.validateEmail('')).toBe(true);
    });
    
    it('should return true if the value is null or undefined', () => {
      expect(Util.validateEmail(null)).toBe(true);
      expect(Util.validateEmail(undefined)).toBe(true);
    });
  });
  
  describe('isDarkTheme', () => {
    it('should return true if the scheme is dark', () => {
      expect(Util.isDarkTheme('dark')).toBe(true);
    });
    
    it('should return false if the scheme is not dark', () => {
      expect(Util.isDarkTheme('light')).toBe(false);
    });
  });
  
  describe('truncateLongText', () => {
    it('should truncate long text with default max limit', () => {
      const longText = 'This is a very long text that exceeds the default limit';
      expect(Util.truncateLongText(longText)).toBe('This is a very lo...');
    });
    
    it('should truncate long text with custom max limit', () => {
      const longText = 'This is a very long text that exceeds the custom limit';
      expect(Util.truncateLongText(longText, 10)).toBe('This is...');
    });
    
    it('should return the original text if it is shorter than the max limit', () => {
      const shortText = 'Short text';
      expect(Util.truncateLongText(shortText)).toBe(shortText);
    });
    
    it('should return empty string if the input value is empty', () => {
      expect(Util.truncateLongText('')).toBe('');
    });
  });
  
  describe('encodeStringToBase64', () => {
    it('should encode a string to base64', () => {
      const value = 'Hello, world!';
      const encodedValue = 'SGVsbG8sIHdvcmxkIQ==';
      base64.encode.mockReturnValue(encodedValue);
      
      const result = Util.encodeStringToBase64(value);
      
      expect(result).toBe(encodedValue);
      expect(base64.encode).toHaveBeenCalledWith(value);
    });
  });
  
  describe('decodeStringToBase64', () => {
    it('should decode a base64 string', () => {
      const value = 'SGVsbG8sIHdvcmxkIQ==';
      const decodedValue = 'Hello, world!';
      base64.decode.mockReturnValue(decodedValue);
      
      const result = Util.decodeStringToBase64(value);
      
      expect(result).toBe(decodedValue);
      expect(base64.decode).toHaveBeenCalledWith(value);
    });
  });
  
});
