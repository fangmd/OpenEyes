'use strict';

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../../../styles/Colors';
import { FontSize } from '../../../styles/FontSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../../../styles/CommonStyles';
import { formatTimeToMin } from '../../../utils/TimeUtils';
import Video from 'react-native-video';

class WorkItem extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const data = this.props.data
        let firTime = formatTimeToMin(data.item.data.content.data.duration);

        return (
            <View style={styles.root}>
                <View style={commonStyles.rowRoot}>
                    <Image
                        style={styles.img}
                        source={{ uri: data.item.data.header.icon }} />
                    <View style={styles.userName}>
                        <Text style={commonStyles.black_14}>{data.item.data.header.issuerName}</Text>
                        <Text style={commonStyles.black_13}>{data.item.data.content.data.title}</Text>
                    </View>

                    <Ionicons style={styles.subscribeImg} name='ios-thumbs-up-outline' size={18} color={Colors.text_grey} />
                </View>

                <Text style={[commonStyles.gray_12, styles.content]}>{data.item.data.content.data.description}</Text>

                <View style={[styles.tagRoot, commonStyles.rowRoot]}>

                    {data.item.data.content.data.tags.map((row, index) => (
                        <Text style={styles.tag}>{row.name}</Text>
                    ))}

                </View>

                {this._renderVideo(data.item.data.content.data.playUrl)}

                <View style={[commonStyles.rowRoot, { marginBottom: 7 }]}>
                    <Ionicons style={styles.likeImg} name='md-heart-outline' size={18} color={Colors.text_grey} />
                    <Text style={styles.likeCnt}>{data.item.data.content.data.consumption.collectionCount}</Text>
                    <Ionicons style={styles.replyCnt} name='md-text' size={18} color={Colors.text_grey} />
                    <Text style={styles.likeCnt}>{data.item.data.content.data.consumption.replyCount}</Text>
                    <Text style={styles.duration}>{firTime}</Text>
                    <Ionicons style={styles.shareImg} name='md-cloud-upload' size={18} color={Colors.text_grey} />
                </View>

                <View style={styles.divide} />
            </View>
        )
    }

    _renderVideo = (videoUri) => {
        return (
            <Video
                source={{ uri: videoUri }}
                style={styles.video}
                paused={true}
            />
        )
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        paddingTop: 15,
    },
    img: {
        height: 36,
        width: 36,
        borderRadius: 33,
        marginLeft: 14,
    },
    userName: {
        marginLeft: 11,
    },
    content: {
        marginLeft: 12,
        marginRight: 14,
        marginTop: 4,
        marginBottom: 7,
    },
    tagRoot: {
        marginLeft: 12,
    },
    tag: {
        backgroundColor: '#ecf3fb',
        color: '#4678d7',
        padding: 3,
        marginRight: 4,
        borderRadius: 3,
    },
    likeImg: {
        marginLeft: 16,
    },
    likeCnt: {
        marginLeft: 7,
    },
    duration: {
        flex: 1,
        textAlign: 'center'
    },
    shareImg: {
        marginRight: 16,
    },
    replyCnt: {
        marginLeft: 50,
    },
    video: {
        height: 186,
        margin: 12,
        borderRadius: 4,
    },
    divide: {
        height: 0.5,
        backgroundColor: Colors.divide,
        marginLeft: 12,
        marginRight: 12,
    }

});

export default WorkItem;