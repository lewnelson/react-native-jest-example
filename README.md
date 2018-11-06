# react-native-jest-example
Example with failing jest tests on base react native 0.57.4 project created with react-native init

# Setup
`npm install`

## Broken tests
To run broken tests `npm run test:broken`

## Working tests
To run working tests `npm run test:working`

## Description
These broken examples replicate existing code we have in a production react native app upgrading from RN `0.55.4` to `0.57.4`. Syntactically there are no issues and the code gets transpiled correctly by the metro bundler. However it is failing on jest using the react native jest preprocessor.
