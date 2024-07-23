import { Status } from 'common/declarations/types';
import COLOR_PALETTE from "./color-palette.json"

class UIUtil {
  public static getStatus(array: Status[] = [], status_id: string) {
    return array.find((ele) => ele._id == status_id)
  }
  public static mapColorsFromPalette = (
    keyName = "primary",
    valueName = "light",
  ) => {
    return Object.keys(COLOR_PALETTE).reduce((accumulator, current) => {
      accumulator[COLOR_PALETTE[current][keyName]] =
        COLOR_PALETTE[current][valueName];
      return accumulator;
    }, {});
  };
  
 public static PRIMARY_SECONDARY_COLOR_MAP = UIUtil.mapColorsFromPalette();
 public static generateStatusBackgroundColor = (color) => {
    return UIUtil.PRIMARY_SECONDARY_COLOR_MAP[color?.toLowerCase() || ""];
  };
}
export default UIUtil;