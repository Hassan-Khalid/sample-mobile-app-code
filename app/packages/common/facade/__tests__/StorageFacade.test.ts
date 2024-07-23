import StorageFacade, { StorageKeys } from '../StorageFacade';
import { MMKV } from 'react-native-mmkv';

jest.mock('react-native-mmkv');

describe('StorageFacade', () => {
  beforeEach(() => {
    // Clear all mock calls before each test
    // jest.clearAllMocks();
  });
  
  it('sets a key-value pair in the storage', () => {
    StorageFacade.setKey(StorageKeys.LANGUAGE, 'en');
    
    expect(MMKV.prototype.set).toHaveBeenCalledWith(StorageKeys.LANGUAGE, JSON.stringify('en'));
  });
  
  it('retrieves a string value from the storage', () => {
    StorageFacade.getStringKey(StorageKeys.LANGUAGE);
    
    expect(MMKV.prototype.getString).toHaveBeenCalledWith(StorageKeys.LANGUAGE);
  });
  
  it('retrieves a number value from the storage', () => {
    StorageFacade.getNumberKey(StorageKeys.LANGUAGE);
    
    expect(MMKV.prototype.getNumber).toHaveBeenCalledWith(StorageKeys.LANGUAGE);
  });
  
  it('retrieves a boolean value from the storage', () => {
    StorageFacade.getBooleanKey(StorageKeys.LANGUAGE);
    
    expect(MMKV.prototype.getBoolean).toHaveBeenCalledWith(StorageKeys.LANGUAGE);
  });
  
  it('deletes a key from the storage', () => {
    StorageFacade.deleteKey(StorageKeys.LANGUAGE);
    
    expect(MMKV.prototype.delete).toHaveBeenCalledWith(StorageKeys.LANGUAGE);
  });
  
  it('clears all keys from the storage', () => {
    StorageFacade.clearStorage();
    
    expect(MMKV.prototype.clearAll).toHaveBeenCalled();
  });
});
