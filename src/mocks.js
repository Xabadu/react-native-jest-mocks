module.exports = {
  initAll: function() {
    jest.mock('Linking', () => ({
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      openURL: jest.fn(() => Promise.resolve()),
      canOpenURL: jest.fn(() => Promise.resolve()),
      getInitialURL: jest.fn(() => Promise.resolve()),
    }));

    jest.mock('NetInfo', () => {
      return {
        isConnected: {
          fetch: () => {
            return new Promise((accept) => {
              accept(true);
            });
          }
        }
      };
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

    //* react-native-localize
    const getLocales = () => [
      { countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
      { countryCode: 'FR', languageTag: 'fr-FR', languageCode: 'fr', isRTL: false }
    ];

    const findBestAvailableLanguage = () => ({
      languageTag: 'en-US',
      isRTL: false
    });

    const getNumberFormatSettings = () => ({
      decimalSeparator: '.',
      groupingSeparator: ','
    });

    const getCalendar = () => 'gregorian';
    const getCountry = () => 'US';
    const getCurrencies = () => ['USD', 'EUR'];
    const getTemperatureUnit = () => 'celsius';
    const getTimeZone = () => 'Europe/Paris';
    const uses24HourClock = () => true;
    const usesMetricSystem = () => true;

    const addEventListener = jest.fn();
    const removeEventListener = jest.fn();

    jest.mock('findBestAvailableLanguage', findBestAvailableLanguage);
    jest.mock('getLocales', getLocales);
    jest.mock('getNumberFormatSettings', getNumberFormatSettings);
    jest.mock('getCalendar', getCalendar);
    jest.mock('getCountry', getCountry);
    jest.mock('getCurrencies', getCurrencies);
    jest.mock('getTemperatureUnit', getTemperatureUnit);
    jest.mock('getTimeZone', getTimeZone);
    jest.mock('uses24HourClock', uses24HourClock);
    jest.mock('usesMetricSystem', usesMetricSystem);
    jest.mock('addEventListener', addEventListener);
    jest.mock('removeEventListener', removeEventListener);

    console.error = jest.fn();
  }
};
