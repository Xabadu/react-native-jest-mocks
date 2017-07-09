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

    /* Geolocation, required by the navigation global */
    jest.mock('Geolocation', () => ({
      clearWatch: jest.fn(),
      getCurrentPosition: jest.genMockFn().mockReturnValue({
        city: 'San Francisco',
        state: 'CA',
        lat: 37.785834,
        lng: -122.406417
      }),
      stopObserving: jest.fn(),
      watchPosition: jest.fn()
    }));

    jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));

    /* Firebase */
    jest.mock('firebase', () => ({
      initializeApp: jest.fn(),
      addEventListener: jest.fn(),
      attachEvent: jest.fn(),
      auth: jest.genMockFn().mockReturnValue({
        onAuthStateChanged: jest.fn(),
        signOut: jest.genMockFn().mockReturnValue({})
      }),
      database: jest.genMockFn().mockReturnValue({ 
        ref: jest.genMockFn().mockReturnValue({ 
          once: jest.genMockFn().mockReturnValue({}),
          orderByKey: jest.genMockFn().mockReturnValue({
            once: jest.genMockFn().mockReturnValue({})
          })
        })
      })
    }));

    console.error = jest.genMockFn();
  }
};
