import { StyleProp, StyleSheet } from 'react-native';
import { AnyType } from '../declarations/types';
import Util from '../util/Util';

class ComponentBuilder {
  public static createTestAttributes(id?: string) {
    return { accessibilityLabel: id, testID: id };
  }

  public static createConditionalTestAttributes(id?: string) {
    if (Util.isIos()) {
      return { testID: id };
    }

    return { accessibilityLabel: id };
  }

  public static createDynamicStyles<T>(styles?: AnyType) {
    if (!styles) {
      return {};
    }
    return StyleSheet.create({ styles }).styles as StyleProp<T>;
  }

  public static disableAccessibility() {
    return { accessible: false };
  }
}

export default ComponentBuilder;
