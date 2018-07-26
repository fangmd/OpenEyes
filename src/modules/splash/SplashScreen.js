'use strict';
import React from 'react';
import { View, Text, Alert, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Imgs from '../../styles/Imgs';

const DELAY_TIME = 2000;

class SplashScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('Main')
        }, 1000)
    }

    render() {
        let imgUrl = 'http://img.wdjimg.com/image/video/418d281e65bf010c38c7b07bdd7b6a94_0_0.png';
        let iconName = 'ios-options';
        let tintColor = '000';
        return (
            <View style={styles.root}>
                <Image
                    style={styles.root}
                    source={Imgs.author_account_bg}
                />
            </View>
        )
    }
}


// <Image
// style={{ width: 66, height: 58 }}
// source={{ uri: imgUrl }} />

// <Ionicons name='ios-arrow-forward' size={23} color={tintColor} />

const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
})

export default SplashScreen;