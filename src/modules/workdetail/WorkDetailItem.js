"use strict";

import React from 'react';
import { View, Text, Image, TouchableNativeFeedback, Platform, StyleSheet } from 'react-native';
import { formatTimeToMin } from '../../utils/TimeUtils';
import { Colors } from '../../styles/Colors';
import { FontSize } from '../../styles/FontSize';

class WorkDetailItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.data.item
        let firTime = formatTimeToMin(data.data.duration);
        return (
            <TouchableNativeFeedback
                onPress={this._onVideoClick}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>

                <View style={styles.videoRoot}>
                    <View>
                        <Image style={styles.videoImg} source={{ uri: data.data.cover.feed }} />
                        <Text style={styles.videoDuration}>{firTime}</Text>
                    </View>

                    <View style={styles.videoRight}>
                        <Text style={styles.videoTitle}>{data.data.title}</Text>
                        <Text style={styles.category}>#{data.data.category}</Text>
                    </View>

                </View>

            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    videoRoot: {
        flexDirection: 'row',
        marginRight: 16,
        marginBottom: 8,
        paddingTop: 11,
        paddingLeft: 13,
        paddingBottom: 11,
        paddingRight: 13,
        borderRadius: 8,
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
        color: 'white',
        fontWeight: 'bold',
        fontSize: FontSize.item_title,
    },
    category: {
        color: 'white',
        fontSize: FontSize.item_title_13,
        marginTop: 4,
    },
})

export default WorkDetailItem;