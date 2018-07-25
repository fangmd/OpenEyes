'use strict';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../../styles/Colors';
import { FontSize } from '../../styles/FontSize';
import Ionicons from 'react-native-vector-icons/Ionicons';



class ImageText extends React.Component {

    render() {
        return (
            // md-cloud-download
            <View style={styles.root}>
                <Ionicons name={this.props.imgUrl} size={28} color={Colors.text_grey_88888} />
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        )
    }
}

ImageText.propTypes = {
    imgUrl: PropTypes.any,
    text: PropTypes.string,
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 28,
        height: 28,
    },
    text: {
        marginLeft: 10,
        color: Colors.text_grey_88888,
        fontSize: FontSize.menu_item,
    }
})

export default ImageText;

