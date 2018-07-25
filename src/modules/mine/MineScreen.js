'use strict';
import React from 'react';
import { View, Text, Image, TouchableNativeFeedback, Platform, StyleSheet, StatusBar } from 'react-native';
import ImageText from '../widgets/ImageText';
import * as Imgs from '../../styles/Imgs';
import { Colors } from '../../styles/Colors';
import { FontSize } from '../../styles/FontSize';
import { EasyToast } from '../../utils/EasyToast';
import { commonStyles } from '../../styles/CommonStyles';

class MineScreen extends React.Component {
    render() {
        return (
            <View style={styles.root}>
                <View style={commonStyles.statusBar} >
                    <StatusBar />
                </View>

                <View style={styles.menuRoot}>
                    <Image style={styles.menuMore} source={Imgs.menu_more} />
                </View>

                <View style={styles.avatarRoot}>
                    <Image style={styles.avatar} source={Imgs.default_avatar} />
                </View>

                <View style={{ height: 58 }}>
                    <Text style={styles.loginPromp}>点击登入即可发表评论及同步已喜欢视频</Text>
                </View>

                <View style={styles.userMenuRoot}>
                    <ImageText style={styles.userMenuItem} text='喜欢' imgUrl='md-heart-outline'/>
                    <View style={styles.divideVertical} />
                    <ImageText style={styles.userMenuItem} text='缓存' imgUrl='md-cloud-download' />
                </View>

                <View style={styles.divideHorizontal} />

                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <Text style={styles.item}>我的关注</Text>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <Text style={styles.item}>观看记录</Text>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <Text style={styles.item}>意见反馈</Text>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <Text style={styles.item}>我要投稿</Text>
                </TouchableNativeFeedback>


            </View>
        )
    }

    _onPressButton = () => {
        EasyToast.show('HI');
    }
}

const styles = StyleSheet.create({
    root: {

    },
    menuRoot: {
        alignItems: 'flex-end',
    },
    avatar: {
        width: 106,
        height: 106,
    },
    avatarRoot: {
        alignItems: 'center',
    },
    menuMore: {
        width: 42,
        height: 42,
    },
    loginPromp: {
        color: Colors.text_black,
        fontSize: FontSize.menu_item,
        textAlign: 'center',
        height: 58,
        lineHeight: 58,
    },
    userMenuRoot: {
        height: 85,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userMenuItem: {
        height: 85,

    },
    divideVertical: {
        height: 40,
        backgroundColor: Colors.divideHorizontal,
        width: 1,
    },
    divideHorizontal: {
        height: 1,
        backgroundColor: Colors.divideHorizontal,
    },
    item: {
        height: 98,
        lineHeight: 98,
        textAlign: 'center',
        color: Colors.text_black,
        fontSize: FontSize.menu_item,
    },
})


export default MineScreen;