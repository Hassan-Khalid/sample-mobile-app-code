import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SideDrawer from '../SideDrawer'; // Assuming this is the path to your component
import { AuthenticationService } from '../../../services';

jest.mock('../../../services', () => ({
  AuthenticationService: {
    handleLogout: jest.fn(),
  },
}));

describe('SideDrawer', () => {
  it('render component', () => {
    const wrapper = render(<SideDrawer />);
    expect(wrapper.toJSON).toMatchSnapshot();
  });
  
  it('calls handleLogout when the logout button is pressed', () => {
    const { getByText } = render(<SideDrawer />);
    const logoutButton = getByText('logout');
    
    fireEvent.press(logoutButton);
    
    expect(AuthenticationService.handleLogout).toHaveBeenCalled();
  });
});
