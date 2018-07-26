import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import BackView from './BackView';
import { commonStyles } from '../../styles/CommonStyles';
import PropTypes from 'prop-types';
import { Colors } from '../../styles/Colors';
import { FontSize } from '../../styles/FontSize';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HeaderView extends React.Component {

    render() {

        const { title, showLeft } = this.props;

        console.log('HeaderView: title:' + title + 'showLeft:' + showLeft)

        let statusBar = (
            <View style={commonStyles.statusBar} >
                <StatusBar />
            </View>
        )

        return (
            <View style={styles.root}>
                {statusBar}
                <View style={styles.titleRoot}>
                    <View style={styles.leftContainer}>
                        {this._renderLeftBtn()}
                    </View>

                    <Text style={styles.title}>{title}</Text>

                    <View style={styles.rightContainer}>
                        {this._renderRightBtn()}
                    </View>
                </View>
            </View>
        )
    }

    _renderLeftBtn() {
        const { showLeft } = this.props;
        if (showLeft) {
            return (
                <BackView />
            )
        }
        return null;
    }

    _renderRightBtn() {
        let iconName = 'md-search';
        return (
            <Ionicons style={styles.btn} name={iconName} size={25} />
        )
    }
}

HeaderView.propTypes = {
    showLeft: PropTypes.bool,
    title: PropTypes.string,
}

export default HeaderView;

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
    },
    titleRoot: {
        height: 52,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    leftContainer: {
        flex: 1,
        paddingLeft: 14,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        color: Colors.text_black,
        fontSize: FontSize.toolBarTitle,
    },
    btn: {
        height: 40,
        width: 40,
        lineHeight: 40,
        textAlign: 'center'
    },
})