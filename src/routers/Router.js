import HomeScreen from '../modules/home/HomeScreen';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';
import SplashScreen from '../modules/splash/SplashScreen';
// import MainScreen from '../modules/main/MainScreen';
import MineScreen from '../modules/mine/MineScreen';
import FocusScreen from '../modules/focus/FocusScreen';
import NotificationScreen from '../modules/notification/NotificationScreen';

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Mine') {
                    iconName = `ios-expand${focused ? '' : '-outline'}`;
                } else if (routeName === 'Notification') {
                    iconName = `ios-ionic${focused ? '' : '-outline'}`;
                }else if(routeName === 'Focus'){
                    iconName = `ios-checkbox${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
        }
    }

)

export const Router = StackNavigator({
    Splash: SplashScreen,
    Main: mainTab,
})