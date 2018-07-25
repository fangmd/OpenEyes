import HomeScreen from '../modules/home/HomeScreen';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import SplashScreen from '../modules/splash/SplashScreen';
import MineScreen from '../modules/mine/MineScreen';
import FocusScreen from '../modules/focus/FocusScreen';
import NotificationScreen from '../modules/notification/NotificationScreen';

import React from 'react';
import * as UImage from '../styles/Imgs';
import { Image } from 'react-native';
import { commonStyles } from '../styles/CommonStyles';
import WebViewScreen from '../modules/webview/WebViewScreen';


const mainTab = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Focus: FocusScreen,
        Notification: NotificationScreen,
        Mine: MineScreen,
    }, {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = focused ? UImage.main_tab_0_selected : UImage.main_tab_0;
                } else if (routeName === 'Mine') {
                    iconName = focused ? UImage.main_tab_3_selected : UImage.main_tab_3;
                } else if (routeName === 'Notification') {
                    iconName = focused ? UImage.main_tab_2_selected : UImage.main_tab_2;
                } else if (routeName === 'Focus') {
                    iconName = focused ? UImage.main_tab_1_selected : UImage.main_tab_1;
                }
                return (<Image style={commonStyles.mainTabImg} source={iconName} />);
            }
        }),
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white',
        }
    }

)

export const Router = StackNavigator({
    Splash: SplashScreen,
    Main: {
        screen: mainTab,
    },
    WebView: WebViewScreen,  
},
    {
        navigationOptions: {
            // headerLeft: null,
            // headerRight: null,
            header: null,
        }
    })

    