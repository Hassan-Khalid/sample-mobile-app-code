import UIUtil from '../UIUtil';
import COLOR_PALETTE from '../color-palette.json';
import { Status } from 'common/declarations/types';

describe('UIUtil', () => {
  describe('getStatus', () => {
    const statusArray: Status[] = [
      { _id: '1', name: 'Active' },
      { _id: '2', name: 'Inactive' },
    ];
    
    it('should return the status with the given ID', () => {
      expect(UIUtil.getStatus(statusArray, '1')).toEqual({ _id: '1', name: 'Active' });
    });
    
    it('should return undefined if no status with the given ID is found', () => {
      expect(UIUtil.getStatus(statusArray, '3')).toBeUndefined();
    });
  });
  
  describe('mapColorsFromPalette', () => {
    it('should map colors from the color palette using the specified key and value names', () => {
      const mappedColors = UIUtil.mapColorsFromPalette('primary', 'light');
      const expectedColors = {};
      for (const key of Object.keys(COLOR_PALETTE)) {
        expectedColors[COLOR_PALETTE[key].primary] = COLOR_PALETTE[key].light;
      }
      expect(mappedColors).toEqual(expectedColors);
    });
  });
  
  describe('generateStatusBackgroundColor', () => {
    it('should return the background color corresponding to the given color', () => {
      const color = 'PrimaryColor';
      const expectedBackgroundColor = UIUtil.PRIMARY_SECONDARY_COLOR_MAP[color.toLowerCase()];
      expect(UIUtil.generateStatusBackgroundColor(color)).toBe(expectedBackgroundColor);
    });
    
    it('should return undefined if the given color is not found in the color map', () => {
      const color = 'NonExistentColor';
      expect(UIUtil.generateStatusBackgroundColor(color)).toBeUndefined();
    });
    
    it('should return undefined if no color is provided', () => {
      expect(UIUtil.generateStatusBackgroundColor()).toBeUndefined();
    });
  });
});
