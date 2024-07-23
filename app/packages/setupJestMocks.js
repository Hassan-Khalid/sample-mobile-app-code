import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import {useQuery} from '@apollo/client';

const mockQueryResult = {
  data: {},
};

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: jest.fn().mockReturnValue(mockQueryResult),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }), // Mocked t function returns the key itself
}));
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = require('react-native').ScrollView;
  return { KeyboardAwareScrollView };
});
jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

const mockImplementation = () => {};

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest.fn().mockReturnValue(mockImplementation())
}));

jest.mock('./common/services/NavigationService', () => ({
  getCurrentScreen: jest.fn(() => 'Landing'),
  navigate: jest.fn(),
  navigateTop: jest.fn(),
  isMatching: jest.fn().mockReturnValue(false),
  setTopLevelNavigator: jest.fn()
}));

