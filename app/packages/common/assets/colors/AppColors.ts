import { Appearance, DynamicColorIOS } from 'react-native';
import { ApplicationColors } from 'common/declarations/types';
import Util from '../../util/Util';

const colorsLight = {
  GRAY1: '#8798ad',
  GRAY1_DARK: '#77889d',
  GRAY1_LIGHT: '#9EAFC5',
  GRAY1_IMG_TEXT: '#828282',
  GRAY2: '#C7D0DA',
  GRAY2_DARK: '#b4bfca',
  GRAY2_LIGHT: '#d5dde5',
  GRAY3: '#E8EAED',
  GRAY3_BACKGROUND: '#F3F4F6',
  GRAY3_DARK: '#d7dde3',
  GRAY3_LIGHT: '#e9edf1',
  BACKGROUND: '#172B4D',
  WHITE: '#FFFFFF',
  WHITE_PERSIST: '#FFFFFF',
  WARNING: '#f4a200',
  WARNING_DARK: '#bc7300',
  WARNING_LIGHT: '#ffd348',
  DANGER: '#d74848',
  DANGER_DARK: '#AD0011',
  DANGER_LIGHT: '#f28397',
  INFO: '#05a4e7',
  INFO_DARK: '#036d99',
  INFO_LIGHT: '#99e1ff',
  BLUE: '#0000EE',
  BLACK: '#000',
  BLACK_PERSIST: '#000',
  SHADOW: '#3B237B',
  APPROVED: '#008000',
  DENIED: '#F2765F',
  PENDING: '#3896D2',
  IMG_TEXT: '#004989',
  STATUS_1:'#CAF7FD',
  STATUS_1_TEXT:'#00A5BC',
  BLUE_LIGHT:'#E6E8FE'
};

const colorsDark = {
  GRAY1: '#748094',
  GRAY1_DARK: '#77889d',
  GRAY1_LIGHT: '#9EAFC5',
  GRAY1_IMG_TEXT: '#828282',
  GRAY2: '#394048',
  GRAY2_DARK: '#b4bfca',
  GRAY2_LIGHT: '#d5dde5',
  GRAY3: '#2a2d32',
  GRAY3_BACKGROUND: '#313439',
  GRAY3_DARK: '#313439',
  GRAY3_LIGHT: '#25292c',
  BACKGROUND: '#172B4D',
  WHITE: '#1b1b1b',
  WHITE_PERSIST: '#FFF',
  WARNING: '#f4a200',
  WARNING_DARK: '#bc7300',
  WARNING_LIGHT: '#ffd348',
  DANGER: '#d74848',
  DANGER_DARK: '#AD0011',
  DANGER_LIGHT: '#f28397',
  INFO: '#05a4e7',
  INFO_DARK: '#036d99',
  INFO_LIGHT: '#99e1ff',
  BLUE: '#64b4fa',
  BLACK: '#FFF',
  BLACK_PERSIST: '#000',
  SHADOW: '#3B237B',
  APPROVED: '#008000',
  DENIED: '#F2765F',
  PENDING: '#3896D2',
  IMG_TEXT: '#FFFFFF',
  STATUS_1:'#CAF7FD',
  STATUS_1_TEXT:'#00A5BC',
  BLUE_LIGHT:'#E6E8FE'
};

const getIosColors = () => {
  if (!Util.isIos()) {
    return colorsLight;
  }

  return {
    GRAY1: DynamicColorIOS({ dark: colorsDark.GRAY1, light: colorsLight.GRAY1 }),
    GRAY1_IMG_TEXT: DynamicColorIOS({
      dark: colorsDark.GRAY1_IMG_TEXT,
      light: colorsLight.GRAY1_IMG_TEXT,
    }),
    GRAY1_DARK: DynamicColorIOS({ dark: colorsDark.GRAY1_DARK, light: colorsLight.GRAY1_DARK }),
    GRAY1_LIGHT: DynamicColorIOS({
      dark: colorsDark.GRAY1_LIGHT,
      light: colorsLight.GRAY1_LIGHT,
    }),
    GRAY2: DynamicColorIOS({ dark: colorsDark.GRAY2, light: colorsLight.GRAY2 }),
    GRAY2_DARK: DynamicColorIOS({ dark: colorsDark.GRAY2_DARK, light: colorsLight.GRAY2_DARK }),
    GRAY2_LIGHT: DynamicColorIOS({
      dark: colorsDark.GRAY2_LIGHT,
      light: colorsLight.GRAY2_LIGHT,
    }),
    GRAY3: DynamicColorIOS({ dark: colorsDark.GRAY3, light: colorsLight.GRAY3 }),
    GRAY3_BACKGROUND: DynamicColorIOS({
      dark: colorsDark.GRAY3_BACKGROUND,
      light: colorsLight.GRAY3_BACKGROUND,
    }),
    GRAY3_DARK: DynamicColorIOS({ dark: colorsDark.GRAY3_DARK, light: colorsLight.GRAY3_DARK }),
    GRAY3_LIGHT: DynamicColorIOS({
      dark: colorsDark.GRAY3_LIGHT,
      light: colorsLight.GRAY3_LIGHT,
    }),
    BACKGROUND: DynamicColorIOS({ dark: colorsDark.BACKGROUND, light: colorsLight.BACKGROUND }),
    WHITE: DynamicColorIOS({ dark: colorsDark.WHITE, light: colorsLight.WHITE }),
    WHITE_PERSIST: DynamicColorIOS({
      dark: colorsDark.WHITE_PERSIST,
      light: colorsLight.WHITE_PERSIST,
    }),
    WARNING: DynamicColorIOS({ dark: colorsDark.WARNING, light: colorsLight.WARNING }),
    WARNING_DARK: DynamicColorIOS({
      dark: colorsDark.WARNING_DARK,
      light: colorsLight.WARNING_DARK,
    }),
    WARNING_LIGHT: DynamicColorIOS({
      dark: colorsDark.WARNING_LIGHT,
      light: colorsLight.WARNING_LIGHT,
    }),
    DANGER: DynamicColorIOS({ dark: colorsDark.DANGER, light: colorsLight.DANGER }),
    DANGER_DARK: DynamicColorIOS({
      dark: colorsDark.DANGER_DARK,
      light: colorsLight.DANGER_DARK,
    }),
    DANGER_LIGHT: DynamicColorIOS({
      dark: colorsDark.DANGER_LIGHT,
      light: colorsLight.DANGER_LIGHT,
    }),
    INFO: DynamicColorIOS({ dark: colorsDark.INFO, light: colorsLight.INFO }),
    INFO_DARK: DynamicColorIOS({ dark: colorsDark.INFO_DARK, light: colorsLight.INFO_DARK }),
    INFO_LIGHT: DynamicColorIOS({ dark: colorsDark.INFO_LIGHT, light: colorsLight.INFO_LIGHT }),
    BLUE: DynamicColorIOS({ dark: colorsDark.BLUE, light: colorsLight.BLUE }),
    BLACK: DynamicColorIOS({ dark: colorsDark.BLACK, light: colorsLight.BLACK }),
    BLACK_PERSIST: DynamicColorIOS({
      dark: colorsDark.BLACK_PERSIST,
      light: colorsLight.BLACK_PERSIST,
    }),
    SHADOW: DynamicColorIOS({ dark: colorsDark.SHADOW, light: colorsLight.SHADOW }),
    APPROVED: DynamicColorIOS({ dark: colorsDark.APPROVED, light: colorsLight.APPROVED }),
    DENIED: DynamicColorIOS({ dark: colorsDark.DENIED, light: colorsLight.DENIED }),
    PENDING: DynamicColorIOS({ dark: colorsDark.PENDING, light: colorsLight.PENDING }),
    IMG_TEXT: DynamicColorIOS({ dark: colorsDark.IMG_TEXT, light: colorsLight.IMG_TEXT }),
    STATUS_1: DynamicColorIOS({ dark: colorsDark.STATUS_1, light: colorsLight.STATUS_1 }),
    STATUS_1_TEXT: DynamicColorIOS({ dark: colorsDark.STATUS_1_TEXT, light: colorsLight.STATUS_1_TEXT }),
    BLUE_LIGHT: DynamicColorIOS({ dark: colorsDark.BLUE_LIGHT, light: colorsLight.BLUE_LIGHT }),
  };
};

const getPlatformColors = (): ApplicationColors => {
  if (Util.isIos()) {
    return getIosColors() as ApplicationColors;
  }
  return Appearance.getColorScheme() === 'dark' ? colorsDark : colorsLight;
};

export default getPlatformColors();
