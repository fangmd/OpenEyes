import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HeaderView extends React.Component {

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.leftContainer}>
                {this._renderLeftBtn()}
                </View>

                <Text style={styles.title}>{this.props.title}</Text>

                <View style={styles.rightContainer}>
                    {this._renderRightBtn()}
                </View>
            </View>
        )
    }

    _renderLeftBtn(){
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
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'blue',
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
    }
})