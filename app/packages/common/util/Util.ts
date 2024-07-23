import Config from 'react-native-config';
import { ColorSchemeName, Dimensions, Platform } from 'react-native';
import CommonConstants from '../constants/CommonConstants';
import {AnyType} from "../declarations/types"
import base64 from 'react-native-base64';
class Util {
  public static isAndroid = () => {
    return Platform.OS === CommonConstants.androidPlatform;
  };

  public static isIos = () => {
    return Platform.OS === CommonConstants.iOsPlatform;
  };

  public static isOem = () => {
    return Config.TARGET === 'OEM';
  };

  public static isFacility = () => {
    return Config.TARGET === 'Facility';
  };
  
  public static getApiEndPoint = () =>{
    return Config.API_END_POINT
  }
  
  public static getWindowWidth() {
    return Dimensions.get('window').width;
  }

  public static getWindowHeight() {
    return Dimensions.get('window').height;
  }

  public static isNullOrUndefined (value: AnyType) {
    return value === undefined || value === null;
  }
  public static isDefinedOrExist(value: string | undefined | number) {
    return !Util.isNullOrUndefined(value) && value !== '';
  }
  
  public static encodeStringToBase64 (value: string) {
    return base64.encode(value)
  }
  
  public static decodeStringToBase64 (value: string) {
    return base64.decode(value)
  }
  
  public static validateEmail (value:string){
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return  !value || emailRegex.test(value)
  }
  
  public static isDarkTheme(scheme: ColorSchemeName) {
    return scheme === 'dark';
  }
  
  public static truncateLongText(value:string = '', maxLimit:number= 20){
    return ( value && value.length > maxLimit) ?
      (((value).substring(0,maxLimit-3)) + '...') :
      value
  }
}

export default Util;
