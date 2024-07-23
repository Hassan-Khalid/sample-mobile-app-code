import { Platform } from 'react-native';
import ComponentBuilder from '../ComponentBuilder';
import { AnyType } from '../../declarations/types';

// vi.mock('react-native', () => {
//   const RN = vi.importActual('react-native').then((rn)=>
//     rn.NativeModules = {
//       StyleSheet: {
//         create: vi.fn(styles => ({ styles })),
//       },
//     }
//   )
//
//   return RN;
// });

describe('Component Builder', () => {
  it('should be able to access members of class', () => {
    // post conditions
    expect(ComponentBuilder.createConditionalTestAttributes()).toBeDefined();
    expect(ComponentBuilder.createTestAttributes()).toBeDefined();
    expect(ComponentBuilder.createDynamicStyles<AnyType>({})).toBeDefined();
    expect(ComponentBuilder.disableAccessibility()).toBeDefined();
  });

  it('should return accessibility IDs as iOS', () => {
    // setup
    Platform.OS = 'ios';
    const id = 'test-attribute';
    // exercise
    const testAttribute = ComponentBuilder.createTestAttributes(id);
    // post conditions
    expect(testAttribute).toEqual({ accessibilityLabel: id, testID: id });
  });

  it('should return accessibility IDs as Android', () => {
    // setup
    Platform.OS = 'android';
    const id = 'test-attribute';
    // exercise
    const testAttribute = ComponentBuilder.createTestAttributes(id);
    // post conditions
    expect(testAttribute).toEqual({ accessibilityLabel: id, testID: id });
  });

  it('should return testID', () => {
    // setup
    Platform.OS = 'ios';
    const id = 'test-attribute';
    // exercise
    const testAttribute = ComponentBuilder.createConditionalTestAttributes(id);
    // post conditions
    expect(testAttribute).toEqual({ testID: id });
  });
  

  it('should return accessibilityLabel', () => {
    // setup
    Platform.OS = 'android';
    const id = 'test-attribute';
    // exercise
    const testAttribute = ComponentBuilder.createConditionalTestAttributes(id);
    // post conditions
    expect(testAttribute).toEqual({ accessibilityLabel: id });
  });
  
  it('returns empty object if styles parameter is not provided', () => {
    const dynamicStyles = ComponentBuilder.createDynamicStyles();
    
    expect(dynamicStyles).toEqual({});
  });
});
