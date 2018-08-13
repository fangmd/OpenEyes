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
            <View>
                <View style={commonStyles.rowRoot}>
                    <Image />
                    <View>
                        <Text>{data.data.header.issuerName}</Text>
                        <Text>{data.data.content.data.title}</Text>
                    </View>

                    <Ionicons style={styles.subscribeImg} name='ios-thumbs-up-outline' size={18} color={Colors.text_grey} />
                </View>

                <Text></Text>

                <View>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
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

});

export default WorkItem;