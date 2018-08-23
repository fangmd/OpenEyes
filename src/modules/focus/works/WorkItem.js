'use strict';

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../../../styles/Colors';
import { FontSize } from '../../../styles/FontSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { commonStyles } from '../../../styles/CommonStyles';


class WorkItem extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const data = this.props.data

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

                {/* video */}

                <View style={commonStyles.rowRoot}>
                    <Ionicons style={styles.subscribeImg} name='ios-thumbs-up-outline' size={18} color={Colors.text_grey} />
                    <Text></Text>
                    <Ionicons style={styles.subscribeImg} name='ios-thumbs-up-outline' size={18} color={Colors.text_grey} />
                    <Text></Text>
                    <Text></Text>
                    <Ionicons style={styles.subscribeImg} name='ios-thumbs-up-outline' size={18} color={Colors.text_grey} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'white',
        paddingTop: 4,
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
    tagRoot:{
        marginLeft: 12,
    },
    tag: {
        backgroundColor: '#ecf3fb',
        color: '#4678d7',
        padding: 3,
        marginRight: 4,
        borderRadius: 3,
    }

});

export default WorkItem;