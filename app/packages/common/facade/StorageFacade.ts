import  { MMKV } from 'react-native-mmkv';
import { AnyType } from 'common/declarations/types';
export enum StorageKeys {
  LANGUAGE = 'LANGUAGE',
  SESSION_TOKEN = 'SESSION_TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  OFFLINE_WORK_ORDERS = 'OFFLINE_WORK_ORDERS',
  OFFLINE_MY_WORK_ORDERS = 'OFFLINE_MY_WORK_ORDERS',
  REDUX_STATE = 'REDUX_STATE'
}

class StorageFacade {
  
  static storage = new MMKV();
  
  static setKey(key:string, value:AnyType) {
    StorageFacade.storage.set(key, JSON.stringify(value))
  }
  static getStringKey (key:string) {
    return StorageFacade.storage.getString(key)
  }
  static getNumberKey (key:string) {
    return StorageFacade.storage.getNumber(key)
  }
  static getBooleanKey(key:string) {
    return StorageFacade.storage.getBoolean(key)
  }
  static deleteKey (key:string) {
    return StorageFacade.storage.delete(key)
  }
  static clearStorage() {
    return StorageFacade.storage.clearAll();
  }
}
export default StorageFacade;