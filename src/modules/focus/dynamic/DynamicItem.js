'use strict';

import React from 'react';
import { View, StyleSheet, Image, Text, TouchableNativeFeedback, Platform } from 'react-native';
import { commonStyles } from '../../../styles/CommonStyles';
import { Colors } from '../../../styles/Colors';
import propTypes from 'prop-types';
import { FontSize } from '../../../styles/FontSize';
import { formatTimeToMin } from '../../../utils/TimeUtils';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                        <Text style={styles.subscribeCnt}>{data.reply.likeCount}</Text>
                        <Ionicons style={styles.subscribeImg} name='ios-thumbs-up-outline' size={18} color={Colors.text_grey} />
                    </View>

                    <View style={[commonStyles.divideHorizontal_2, { marginTop: 8, marginRight: 12 }]} />

                </View>

            </View >
        )
    }

    _onVideoClick = () => {
        this.props._onItemVideoClick(this.props.data)
    }

    _renderVideo() {
        let { data } = this.props.data
        let firTime = formatTimeToMin(data.simpleVideo.duration);
        return (
            <TouchableNativeFeedback
                onPress={this._onVideoClick}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>

                <View style={styles.videoRoot}>
                    <View>
                        <Image style={styles.videoImg} source={{ uri: data.simpleVideo.cover.feed }} />
                        <Text style={styles.videoDuration}>{firTime}</Text>
                    </View>

                    <View style={styles.videoRight}>
                        <Text style={styles.videoTitle}>{data.simpleVideo.title}</Text>
                        <Text style={styles.category}>#{data.simpleVideo.category}</Text>
                    </View>

                </View>

            </TouchableNativeFeedback>
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
        marginTop: 18,
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
        marginTop: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    content: {
        marginTop: 12,
        marginBottom: 10,
        marginRight: 14,
    },
    videoRoot: {
        flexDirection: 'row',
        marginRight: 16,
        marginBottom: 8,
        backgroundColor: Colors.itemBg_f6f6f6,
        paddingTop: 11,
        paddingLeft: 13,
        paddingBottom: 11,
        paddingRight: 13,
        borderRadius: 8,
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
        marginRight: 5,
    },
    videoImg: {
        width: 130,
        height: 72,
    },
    videoDuration: {
        position: 'absolute',
        textAlign: 'center',
        backgroundColor: Colors.trans_bg,
        color: 'white',
        width: 38,
        height: 19,
        borderRadius: 2,
        fontSize: FontSize.item_subtitle,
        bottom: 2,
        right: 2,
    },
    videoRight: {
        flex: 1,
        paddingLeft: 13,
        paddingRight: 11,
        justifyContent: 'center',
    },
    videoTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: FontSize.item_title,
    },
    category: {
        fontSize: FontSize.item_title_13,
        color: Colors.text_grey,
        marginTop: 4,
    },
    subscribeImg: {
        marginRight: 18,
    }
})

DynamicItem.propTypes = {
    data: propTypes.any,
    _onItemVideoClick: propTypes.func,
    _onItemReplyClick: propTypes.func,
}

export default DynamicItem;