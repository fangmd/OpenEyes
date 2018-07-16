'use strict';
import React from 'react';
import { View, Text, Alert } from 'react-native';

const DELAY_TIME = 2000;

class SplashScreen extends React.Component {
    
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Main')
        }, 2000)
    }

    render(){
        return(
            <View>
                <Text>Splash</Text>
            </View>
        )
    }
}

export default SplashScreen;