/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Router } from './src/routers/Router';
import { Provider } from 'react-redux';
import configureStore from './src/store/ConfigureStore';
const store = configureStore();



import React from 'react';
import { View, StatusBar } from 'react-native'
import { Toast } from './src/utils/EasyToast';


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Toast />
                    <Router />
                </View>
            </Provider>
        )
    }
}


AppRegistry.registerComponent(appName, () => App);
