import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const STATUS_BAR_HEIGHT = 20;

class HeaderView extends React.Component {

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.statusBar} >
                    <StatusBar />
                </View>

                <View style={styles.titleRoot}>
                    <View style={styles.leftContainer}>
                        {this._renderLeftBtn()}
                    </View>

                    <Text style={styles.title}>{this.props.title}</Text>

                    <View style={styles.rightContainer}>
                        {this._renderRightBtn()}
                    </View>
                </View>
            </View>
        )
    }

    _renderLeftBtn() {
        return null;
    }

    _renderRightBtn() {
        let iconName = 'md-search';
        return (
            <Ionicons style={styles.btn} name={iconName} size={25} />
        )
    }
}

export default HeaderView;

const styles = StyleSheet.create({
    root: {

    },
    titleRoot: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {

    },
    btn: {
        height: 40,
        width: 40,
        lineHeight: 40,
        textAlign: 'center'
    }, statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
    },
})