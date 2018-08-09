"use strict";
import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import { commonStyles } from '../../styles/CommonStyles';
import Video from 'react-native-video';
import { FontSize } from '../../styles/FontSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../styles/Colors';
import { getData, getRelate } from './WorkDetailAction';
import { connect } from 'react-redux';
import WorkDetailItem from './WorkDetailItem';

class WorkDetailScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', '');

        return (
            <View style={[commonStyles.screenRoot, styles.root]}>
                <Video
                    source={{ uri: this.props.data.playUrl }}
                    style={styles.video}
                />

                <FlatList

                    renderItem={this._renderItem}
                    data = {this.props.relateData}
                    extraData={this.props}
                    keyExtractor={(item, index) => String(index)}
                    ListHeaderComponent={this._renderHeader}

                />
            </View>
        )
    }

    componentDidMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', '');
        this.props.dispatch(getData(id));
        this.props.dispatch(getRelate(id));
    }

    _renderItem = (item) => {
        return(
            <WorkDetailItem data={item}/>
        )
    }

    _renderHeader = () => {
        const data = this.props.data
        if (typeof(data.title) === 'undefined'){
            return null;
        }

        return (
            <View style={[commonStyles.screenRoot, styles.videoRoot]}>
                <Text style={styles.videoTitle}>{data.title}</Text>
                <Text style={[styles.videoSubTitle, { marginTop: 6 }]}>#{data.category} / {data.author.name}</Text>
                <Text style={[styles.videoSubTitle, { marginTop: 12 }]}>{data.description}</Text>
                <View style={[commonStyles.rowRoot, { justifyContent: 'center', marginTop: 12, marginBottom: 12 }]}>
                    <Ionicons style={styles.subscribeImg} name='md-heart-outline' size={23} color={Colors.white} />
                    <Text style={styles.likeCnt}>{data.consumption.collectionCount}</Text>
                    <Ionicons style={styles.subscribeImg} name='md-cloud-upload' size={23} color={Colors.white} />
                    <Text style={styles.likeCnt}>{data.consumption.shareCount}</Text>
                    <Ionicons style={styles.subscribeImg} name='md-text' size={23} color={Colors.white} />
                    <Text style={styles.likeCnt}>{data.consumption.replyCount}</Text>
                    <Ionicons style={styles.subscribeImg} name='md-cloud-download' size={23} color={Colors.white} />
                    <Text style={styles.likeCnt}>缓存</Text>
                </View>

                <View style={commonStyles.divideHorizontal_3} />
                {this._renderRelateTopic()}
                <View style={commonStyles.divideHorizontal_3} />
                {this._renderAuthor()}
                <View style={commonStyles.divideHorizontal_3} />

                <Text style={styles.relateTitle}>相关推荐</Text>
            </View >
        )
    }

    _renderRelateTopic = () => {
        const data = this.props.data
        return (
            <View style={[commonStyles.rowRoot, { justifyContent: 'center', marginTop: 14, marginBottom: 14 }]}>

                <View style={styles.relateTopic}>
                    <Image
                        source={{ uri: data.tags[0].headerImage }}
                        style={styles.relateTopicImg} />
                    <Text style={styles.relateTopicText}>#{data.tags[0].name}#</Text>
                </View>

                <View style={styles.relateTopic}>
                    <Image
                        source={{ uri: data.tags[1].headerImage }}
                        style={styles.relateTopicImg} />
                    <Text style={styles.relateTopicText}>#{data.tags[1].name}#</Text>
                </View>

                <View style={styles.relateTopic}>
                    <Image
                        source={{ uri: data.tags[2].headerImage }}
                        style={styles.relateTopicImg} />
                    <Text style={styles.relateTopicText}>#{data.tags[2].name}#</Text>
                </View>

            </View>
        )
    }

    _renderAuthor = () => {
        const data = this.props.data
        return (
            <View style={[commonStyles.rowRoot, { marginTop: 12, marginBottom: 12, alignItems: 'center' }]}>
                <Image
                    source={{ uri: data.author.icon }}
                    style={styles.authorIcon} />

                <View style={{ flex: 1, marginLeft: 12, }}>
                    <Text style={styles.videoTitle}>{data.author.name}</Text>
                    <Text style={styles.videoSubTitle}>{data.author.description}</Text>
                </View>

                <Text style={styles.subscribe}>+ 关注</Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#3e393d',
    },
    video: {
        height: 240,
    },
    videoRoot: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 13,
    },
    videoTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: FontSize.item_title_15,
    },
    videoSubTitle: {
        color: '#ffffff',
        fontSize: FontSize.item_title_13,
    },
    likeCnt: {
        color: Colors.white,
        fontSize: FontSize.item_title_13,
        lineHeight: 22,
        marginLeft: 6,
        marginRight: 27,
    },
    relateTopic: {
        width: 106,
        height: 47,
        marginLeft: 8,
    },
    relateTopicText: {
        width: 106,
        height: 47,
        color: Colors.white,
        fontSize: FontSize.item_title_13,
        lineHeight: 47,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: Colors.trans_img_bg,
    },
    relateTopicImg: {
        width: 106,
        height: 47,
        position: 'absolute',
        borderRadius: 4,
    },
    authorIcon: {
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    subscribe: {
        color: Colors.white,
        fontSize: FontSize.item_title_13,
        width: 46,
        textAlign: 'center',
        lineHeight: 21,
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 2,
        marginRight: 4,
    },
    relateTitle: {
        color: Colors.white,
        fontSize: 16,
        marginTop: 22,
        marginBottom: 22,
    }
})

function bindAction(store) {
    return {
        data: store.WorkDetailReducer.data,
        error: store.WorkDetailReducer.error,
        refreshing: store.WorkDetailReducer.refreshing,
        relateData: store.WorkDetailReducer.relateData,
    }
}

export default connect(bindAction)(WorkDetailScreen);