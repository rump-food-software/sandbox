# RUMP sandbox

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
contains common elements used throughout the application.

#### Header
#### Home
#### Layout
Provides Firebase and Auth State with a UI Header and an Outlet, which is replaced by whatever Route has been selected by the user.

#### Router
Routes the traffic throughout the application. A `<BrowserRouter >` wraps the function. Nested inside of that is `<Routes>` and `<Route path="/" element={<Layout />}>` which provides our Firebase and Auth State from `src/_common/Layout`

#### UserBadge
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

# REACT modules
## MUI
https://mui.com/ provides easy to use UI components. In our Sandbox an example of usage is ```import { Button, TextField } from '@mui/material';``` in `src/pages/NewPage.jsx` which imports two components, a Button and a TextField we can then view in `https://rump-sandbox.web.app/pages/new`


How does the database
What is a snapshot?

