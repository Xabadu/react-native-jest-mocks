module.exports = {
  initAll: function() {
    jest.mock('Linking', () => ({
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      openURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
      canOpenURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
      getInitialURL: jest.genMockFn().mockReturnValue(Promise.resolve()),
    }));

    jest.mock('NetInfo', () => {
      return {
        isConnected: {
          fetch: () => {
            return new Promise((accept, resolve) => {
              accept(true);
            })
          }
        }
      }
    });

    global.navigator = {
      geolocation: {
        clearWatch: jest.fn(),
        getCurrentPosition: jest.fn(),
        stopObserving: jest.fn(),
        watchPosition: jest.fn()
      }
    };

    jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));
    jest.mock('YellowBox', () => jest.genMockFromModule('YellowBox'));

    console.error = jest.genMockFn();
  }
};
