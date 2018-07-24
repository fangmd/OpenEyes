'use strict';
import React from 'react';
import { View, Text, Alert, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DELAY_TIME = 2000;

class SplashScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Main')
        }, 2000)
    }

    render() {
        let imgUrl = 'http://img.wdjimg.com/image/video/418d281e65bf010c38c7b07bdd7b6a94_0_0.png';
        let iconName = 'ios-options';
        let tintColor = '000';
        return (
            <View>
                <Text>Splash</Text>
                <Image
                    source={require('../../assets/imgs/ic_tab_strip_icon_feed.png')}
                />

                <Image
                    style={{ width: 66, height: 58 }}
                    source={{ uri: imgUrl }} />

                <Ionicons name='ios-arrow-forward' size={23} color={tintColor} />

            </View>
        )
    }
}

export default SplashScreen;