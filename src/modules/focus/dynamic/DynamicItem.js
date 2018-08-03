'use strict';

import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { commonStyles } from '../../../styles/CommonStyles';
import { Colors } from '../../../styles/Colors';
import propTypes from 'prop-types';
import { FontSize } from '../../../styles/FontSize';


class DynamicItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { data } = this.props.data
        return (
            <View style={styles.root}>
                <View style={styles.left}>
                    <Image
                        style={styles.img}
                        source={{ uri: data.user.avatar }} />
                </View>
                <View style={styles.right}>
                    <Text style={[commonStyles.title, styles.title]}>{data.user.nickname}</Text>
                    <View style={commonStyles.rowRoot}>
                        <Text style={[commonStyles.subTitle]}>评论：</Text>
                    </View>
                    <Text style={[commonStyles.content, styles.content]}>{data.reply.message}</Text>

                    {this._renderVideo()}

                    <View style={commonStyles.rowRoot}>
                        <Text style={styles.reply}>回复</Text>
                        <Text style={styles.time}>09:17</Text>
                        <Text style={styles.subscribeCnt}>12</Text>
                        <Image />
                    </View>

                    <View style={[commonStyles.divideHorizontal_2, { marginTop: 8, marginRight: 12 }]} />

                </View>

            </View >
        )
    }

    _renderVideo() {
        let { data } = this.props.data
        return (
            <View style={styles.videoRoot}>
                <Text>Video</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    left: {
        width: 60,
        alignItems: 'center',
        marginTop: 24,
    },
    img: {
        height: 37,
        width: 37,
        borderRadius: 33,
    },
    right: {
        flex: 1,
    },
    title: {
        marginTop: 24,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    content: {
        marginTop: 12,
        marginBottom: 10,
        marginRight: 14,
    },
    videoRoot: {
        marginRight: 16,
        marginBottom: 8,
        backgroundColor: Colors.itemBg_f6f6f6,
        paddingTop: 11,
        paddingLeft: 13,
        paddingBottom: 11,
        paddingRight: 13,
    },
    reply: {
        color: Colors.text_grey,
        fontSize: FontSize.item_title,
        fontWeight: 'bold',
    },
    time: {
        color: Colors.text_grey,
        fontSize: FontSize.item_title,
        marginLeft: 20,
        flex: 1,
    },
    subscribeCnt: {
        color: Colors.text_444444,
        fontSize: FontSize.item_title,
        marginRight: 20,
    }
})

DynamicItem.propTypes = {
    data: propTypes.any
}

export default DynamicItem;