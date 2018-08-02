'use strict';

import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { commonStyles } from '../../../styles/CommonStyles';


class DynamicItem extends React.Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.left}>
                    <Image />
                </View>
                <View style={styles.right}>
                    <Text>hahaha</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    left: {
        width: 90,
        alignItems: 'center',
        marginTop: 24,
    },
    img: {
        height: 56,
        width: 56,
    },
    right: {
        flex: 1,
    }

})

export default DynamicItem;