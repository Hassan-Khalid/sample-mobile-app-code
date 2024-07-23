export const FONT_PROPERTIES = {
  SIZE_8: 8,
  SIZE_10: 10,
  SIZE_12: 12,
  SIZE_14: 14,
  SIZE_16: 16,
  SIZE_18: 18,
  SIZE_20: 20,
  SIZE_22: 22,
  SIZE_28: 28,
  SIZE_34: 34,
  SIZE_60: 60,
  ICON_MEDIUM: 24
};

const APP_FONT = () => {
  return {
    
    
    EXTRA_BOLD: 'Manrope-ExtraBold',
    SEMI_BOLD: 'Manrope-SemiBold',
    BOLD: 'Manrope-Bold',
    MEDIUM: 'Manrope-Medium',
    REGULAR: 'Manrope-Regular',
    LIGHT: 'Manrope-Light',
    EXTRA_LIGHT: 'Manrope-ExtraLight'
  };
};

const APP_FONT_SIZE = () => {
  return {
    HEADER: 20,
    MEDIUM_HEADER: 18,
    SUB_HEADER: 16,
    BODY: 14,
    SUB_BODY: 13,
    CAPTION: 12
  };
};

export { APP_FONT, APP_FONT_SIZE };
