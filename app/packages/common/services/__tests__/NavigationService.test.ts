import NavigationService from '../NavigationService';

jest.mock('../NavigationService')


describe('Navigation Utilities', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });


  test('canNavigateBack', () => {
    NavigationService.canNavigateBack = jest.fn().mockReturnValue(true);
    expect(NavigationService.canNavigateBack()).toBe(true);
  });

  it('getCurrentScreen', () => {
    NavigationService.getCurrentScreen = () => 'Previous screen';

    expect(NavigationService.getCurrentScreen()).toBe('Previous screen');
  });


  // test suite for bottomTabScreen function
  describe('bottomTabScreen', () => {
    it('should return true when current screen is WORK_ORDER_LISTING', () => {
      NavigationService.bottomTabScreen = jest.fn().mockReturnValue(true);
      expect(NavigationService.bottomTabScreen()).toBe(true);
    });

    it('should return false for other screens', () => {
      NavigationService.bottomTabScreen = jest.fn().mockReturnValue(false);

      expect(NavigationService.bottomTabScreen()).toBe(false);
    });
  });
});


