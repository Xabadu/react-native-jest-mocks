# React Native Jest Mocks

Collection of Jest mocks for React Native that I use for different projects.

## Usage

First, install the package.

`yarn add react-native-jest-mocks`

or

`npm install --save react-native-jest-mocks`

Then, import it in your jest-setup file.

`import mocks from 'react-native-jest-mocks'`

And init the mocks:

`mocks.initAll();`

You can also check the [Example App](https://github.com/Xabadu/react-native-jest-mocks/tree/master/Example)

Mocks currently included:

* Geolocation
* Linking
* ScrollView
* console.error: This is currently included to avoid some warnings from react-navigation.
