# rump sandbox

[Here's the thing on firebase](https://rump-sandbox.web.app/)

More to come!


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# file structure breakdown
## .github
Contains workflows for github to deploy our application. In the flow, you can see:
```
'on':
  push:
    branches:
      - main
```
which states that when a merge request is completed to main, a workflow is triggered which pushes to https://rump-sandbox.web.app/

## node_modules
associated npm modules

## public
standardized folder structure created when create-react-app starts up

## src
### _common
contains common elements used such as the Header element
### _utils
utilities such as loading spinner icon
### auth

### database
### firebase
### pages
### App.css
### App.js
### App.test.js
### index.css
### index.js
### logo.svg
### reportWebVitals.js
### setupTests.js


