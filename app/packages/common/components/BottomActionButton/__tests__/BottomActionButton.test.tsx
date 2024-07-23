import React from 'react';
import { render } from '@testing-library/react-native';
import BottomActionButton from '../BottomActionButton';
import { ThemedButtonProps } from 'common/declarations/types';

describe('BottomActionButton', () => {
  it('renders correctly', () => {
    // exercise
    const buttonArray:ThemedButtonProps   = {title:'Login',onPress:()=>{},size:'large',type:'solid'};
    
    const wrapper = render(<BottomActionButton buttonArray={[buttonArray]} />);
    
    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  it('should render empty', () => {
    // exercise
    const loading = false;
    const wrapper = render(<BottomActionButton buttonArray={[]} />);
    
    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
