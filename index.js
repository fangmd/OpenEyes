/** @format */

import { AppRegistry, Modal } from 'react-native';
import { name as appName } from './app.json';
import { Router } from './src/routers/Router';
import { Provider } from 'react-redux';
import configureStore from './src/store/ConfigureStore';
const store = configureStore();



import React from 'react';
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}


AppRegistry.registerComponent(appName, () => App);
