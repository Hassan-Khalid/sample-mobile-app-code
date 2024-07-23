import React from 'react';
import { render } from '@testing-library/react-native';
import SplashScreenComponent from '../SplashScreenComponent';
import { COMMON_LOGOS } from 'common/assets/Images';

describe('SplashScreenComponent', () => {
  it('renders splash screen with images', () => {
    const { getByTestId } = render(<SplashScreenComponent />);
    
    // Check if the ImageBackground and Image components are rendered
    const imageBackground = getByTestId('image-background');
    const imageLogo = getByTestId('logo-makula');
    
    // Assert that the images are rendered
    expect(imageBackground).toBeTruthy();
    expect(imageLogo).toBeTruthy();
    
    // You can also check if the correct images are rendered if necessary
    expect(imageBackground.props.source).toEqual(COMMON_LOGOS.LOGIN_BG);
    expect(imageLogo.props.source).toEqual(COMMON_LOGOS.MAKULA_LOGO_LIGHT);
  });
});