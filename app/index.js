/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Util from './packages/common/util/Util';
import Oem from './packages/oem/app/App';
import Facility from './packages/facility/app/App';
import 'react-native-gesture-handler';
import i18n from "./packages/common/translation/TranslationManager"
const getApp = () => {
  const i18 = i18n
  return Util.isOem() ? Oem : Facility;
};
AppRegistry.registerComponent(appName, () => getApp());
