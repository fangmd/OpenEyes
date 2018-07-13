import HomeScreen from '../modules/home/HomeScreen';
import { StackNavigator } from 'react-navigation';
import SplashScreen from '../modules/splash/SplashScreen';
import MainScreen from '../modules/main/MainScreen';

export const Router = StackNavigator({
    Splash: SplashScreen,
    Home: MainScreen,
})