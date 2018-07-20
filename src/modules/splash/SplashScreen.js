'use strict';
import React from 'react';
import { View, Text, Alert, Image } from 'react-native';

const DELAY_TIME = 2000;

class SplashScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Main')
        }, 2000)
    }

    render() {
        return (
            <View>
                <Text>Splash</Text>
                <Image
                    source={require('../../assets/imgs/ic_tab_strip_icon_feed.png')}
                />
            </View>
        )
    }
}

export default SplashScreen;