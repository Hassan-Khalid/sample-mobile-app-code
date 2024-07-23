import { TextStyle, Viewstyle } from 'react-native';
import * as string_decoder from 'string_decoder';
export type DeviceOrientation = 'portrait' | 'landscape' | null;

// eslint-disable-next-line
type AnyType = any;

export interface CommonAppConstants {
  androidPlatform: string;
  iOsPlatform: string;
  DeviceOrientation: {
    portrait: DeviceOrientation;
    landscape: DeviceOrientation;
  };
  splashTimeout: number,
  tabs:{}
}
export type ApplicationColors = {
  GRAY1: string;
  GRAY1_DARK: string;
  GRAY1_LIGHT: string;
  GRAY1_IMG_TEXT: string;
  GRAY2: string;
  GRAY2_DARK: string;
  GRAY2_LIGHT: string;
  GRAY3: string;
  GRAY3_BACKGROUND: string;
  GRAY3_DARK: string;
  GRAY3_LIGHT: string;
  BACKGROUND: string;
  WHITE: string;
  WHITE_PERSIST: string;
  WARNING: string;
  WARNING_DARK: string;
  WARNING_LIGHT: string;
  DANGER: string;
  DANGER_DARK: string;
  DANGER_LIGHT: string;
  INFO: string;
  INFO_DARK: string;
  INFO_LIGHT: string;
  BLUE: string;
  BLACK: string;
  BLACK_PERSIST: string;
  SHADOW: string;
  APPROVED: string;
  DENIED: string;
  PENDING: string;
  IMG_TEXT: string;
  STATUS_1:string;
  STATUS_1_TEXT:string;
  BLUE_LIGHT:string
};

export interface InputProperties {
  input: EditableInput;
  CustomInput?: React.ForwardRefExoticComponent<
    {customFieldControl: CustomFieldControl| undefined } & React.RefAttributes<unknown>
  >;
  containerHandleBlur?: (value?: string) => void;
  containerHandleOnPress?: Function | undefined;
  containerHandleChange?: Function | undefined;
}
export interface ThemedButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: Viewstyle;
  titleStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
  size?: 'large' | 'medium' | 'small';
  type?: 'solid' | 'clear' | 'outline';
}
export type buttonType = {
  title?:string;
  titleStyle?:TextStyle;
  onPress:()=>void;
  buttonStyle?: Viewstyle;
  icon?: AnyType
}

export interface ScreenHeader {
  componentId: string;
  leftButtons?:buttonType ;
  title?: string | undefined;
  rightButtons?: buttonType;
  getSearchText?:(text:string)=>void
}

export interface ToastProps {
  message: string;
  type: 'normal' | 'success' | 'warning' | 'danger' | 'custom',
  placement?: 'top' | 'bottom',
  duration?: number,
  animationType?: 'slide-in' | 'zoom-in'
}

interface ILandingService {
  // getAppConfig<T>(apiPrefix: string): Promise<ServiceResponse<T>>;
  
  getUser(): AnyType;
  
  // getAppConfigApi(): string;
  
  // getApplicationId(): number;
}

interface IWorkOrderListService {
  getMyWorkOrderList():AnyType
  getWorkOrderList():AnyType;
}

interface IWorkOrderDetailService {
  getWorkOrderByID(id:string):AnyType
}

export type Status = {
  __typename: string;
  _id: string;
  color: string;
  label: string;
};