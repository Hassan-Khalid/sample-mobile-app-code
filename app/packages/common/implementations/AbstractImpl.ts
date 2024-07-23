import { AnyType } from '../declarations/types';

export default abstract class AbstractImpl {
  
  static create<T>(type: { new (): T }): T {
    // eslint-disable-next-line new-cap
    return new type();
  }

  static fromJSON(data: AnyType, type: AnyType) {
    if (!data || type === undefined) {
      return data;
    }

    const safeData = typeof data === 'object' ? data : {};
    const result = Object.assign(AbstractImpl.create(type), safeData);
    if (result.init !== undefined) {
      result.init(safeData);
    }
    return result;
  }

  static fromJsonString<T>(data: string | undefined, type: AnyType) {
    const JsonObj = data ? (JSON.parse(data) as T) : {};
    return AbstractImpl.fromJSON(JsonObj, type);
  }

  public validateStructure<T>(ClassType: { new (): T }) {
    let isValid = false;
    const properties = Object.getOwnPropertyNames(new ClassType());

    if (!properties.length) {
      return true;
    }

    for (const prop of properties) {
      if ((typeof this[prop] === 'object' && Object.entries(this[prop]).length > 0) || (typeof this[prop] !== 'object' && this[prop])) {
        isValid = true;
        break;
      }
    }

    return isValid;
  }

  protected copyTypedArray(data: object | undefined, property: string, type: AnyType) {
    if (!data) {
      return;
    }

    if (Object.prototype.hasOwnProperty.call(data, property)) {
      this[property] = [];

      for (const item of data[property]) {
        this[property].push(type.fromJSON(item, type));
      }
    }
  }
}
