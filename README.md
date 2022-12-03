
<h1 align="center">
  Chicago Art App
</h1>

<h4 align="center">An React Native app written in Typescript to browse among Chicago artworks.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#dependencies">Dependencies</a> •
</p>

## Key Features

* IOS and Android support
* Backend integration
* Infinite scroll
* Data persistence

## How To Use

```bash
# Clone this repository
$ git clone git@github.com:kele-leanes/chicagoArtApp.git

# Install dependencies
$ yarn

# Install pods
$ cd ios && pod-install

# Run the app
$ yarn ios or yarn android
```

## Summary

In order to avoid errors I started writing the app in TypeScript. I used to splice the code as much as is possible to get cleaner code and more maintainable. Is the reason why I use the following folder structure
```
component
    components.tsx
    index.ts
    types.ts
    hooks.ts
    styles.ts
```
In the case of dependencies I tried the fewer as possible.
* async-storage (Used for data persistence)
* react-navigation (Used to create a root stack for the navigation, useful if app stars growing)
* react-native-vector-icons (Used for svg icons)
* react-native-reanimated (Used for animations)

Also I've implemented absolute paths in order to avoid long imports e.g: `../../../../Component/...` 


## Dependencies

This software uses the following open source packages:

- [react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)
- [react-navigation](https://reactnavigation.org/)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated)
