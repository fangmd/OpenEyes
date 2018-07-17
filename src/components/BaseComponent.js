import React from 'react';
import {
    BackHandler,
    BackAndroid,
    Platform,
} from 'react-native';

class BaseComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this._onAndroidBack)
        } else {

        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this._onAndroidBack)
        } else {

        }

    }

    //监听物理返回键
    _onBackAndroid = () => {
        this.props.navigation.goBack(); //返回上一个页面
        return true;
    };



}