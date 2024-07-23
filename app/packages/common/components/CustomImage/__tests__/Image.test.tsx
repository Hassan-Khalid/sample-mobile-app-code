import React from 'react';
import { render } from '@testing-library/react-native';
import Image from '../Image';
import { COMMON_LOGOS } from 'common/assets/Images'; // Import the component to be tested

describe('Image component', () => {
  it('renders without crashing', () => {
    // Arrange
    const testProps = {
      source: { uri: 'https://example.com/image.jpg' },
      resizeMode: 'cover',
      style: { width: 100, height: 100 },
    };
    
    // Act
    const { getByTestId } = render(<Image {...testProps} />);
    
    // Assert
    const imageComponent = getByTestId('fast-image'); // Assuming you have set a testID for FastImage
    expect(imageComponent).toBeTruthy(); // Assert that the FastImage component is rendered
  });
  
  it('passes props to FastImage component', () => {
    // Arrange
    const testProps = {
      source:COMMON_LOGOS.LOGIN_BG,
      resizeMode: 'cover',
      style: { width: 100, height: 100 },
    };
    
    // Act
    const  wrapper  = render(<Image {...testProps} />);
    

    // post-conditions
    
    expect(wrapper.toJSON).toMatchSnapshot()
    
  });
});
