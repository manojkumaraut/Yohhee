# React Native Base Project ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

This is the basic startup project for React Native

## Project Details

### Installed Version
* React - 16.5.0
* React Native - 0.57.0
* Jest 23.6.0

## Usage

#### Git Clone

```
https://github.com/sriniinfo/reactNative-startup.git
```

## To Run

#### Git Clone

```
git clone https://github.com/sriniinfo/reactNative-startup.git
cd reactNative-startup
npm install
react-native run-android | react-native run-ios

```

## How to change the Project Name

#### Go to project folder search for app.json and change the name from "ReactNativeStatup" to your project name

```
{
  "name": "ReactNativeStatup",
  "displayName": "React Native Statup"
}
```

#### Then remove the Android and IoS folder from the project and enter the following commands.
```
react-native eject
react-native link
react-native run-android
```

## Steps to add custome font
* Copy and paste the Fonts in ./app/fonts/
* Add the below code to Package.json file
```
"rnpm":{
    "assets":[
      "./app/assets/fonts"
    ]
  }
```
* Run the command "react-native link".
* Then add the font family to the Text,Button,etc..

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
