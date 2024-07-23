import AbstractImpl from '../AbstractImpl';

class TestClass {
  public prop1: string = '';
  public prop2: number = 0;
}


describe('AbstractImpl', () => {
  describe('create', () => {
    it('creates an instance of the provided class', () => {
      // Act
      const instance = AbstractImpl.create(TestClass);
      
      // Assert
      expect(instance instanceof TestClass).toBe(true);
    });
  });
  
  describe('fromJSON', () => {
   
    
    it('creates an instance from JSON data', () => {
      // Arrange
      const jsonData = { prop1: 'value1', prop2: 123 };
      
      // Act
      const instance = AbstractImpl.fromJSON(jsonData, TestClass);
      
      // Assert
      expect(instance.prop1).toBe(jsonData.prop1);
      expect(instance.prop2).toBe(jsonData.prop2);
    });
    
    it('returns null if data or type is undefined', () => {
      // Act
      const instance = AbstractImpl.fromJSON(undefined, TestClass);
      
      // Assert
      expect(instance).toBe(undefined);
    });
  });
  
  describe('fromJsonString', () => {
    beforeEach(()=>{
      jest.clearAllMocks()
    })
    
    it('creates an instance from JSON string data', () => {
      // Arrange
      const jsonString = '{"prop1":"value1","prop2":123}';
      
      // Act
      const instance = AbstractImpl.fromJsonString(jsonString, TestClass);
      
      // Assert
      expect(instance instanceof TestClass).toBe(true);
      expect(instance.prop1).toBe('value1');
      expect(instance.prop2).toBe(123);
    });
    
    it('returns null if data is undefined', () => {
      // Act
      const instance = AbstractImpl.fromJsonString(undefined, TestClass);
      
      // Assert
      expect(instance.prop1).toBe('');
    });
  });
  
});
