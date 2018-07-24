import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Colors } from '../../styles/Colors';
import { FontSize } from '../../styles/FontSize';
import Ionicons from 'react-native-vector-icons/Ionicons';


class NotiItem extends React.PureComponent {

    render() {
        return (
            <View style={styles.root}>

                <Image style={styles.img} source={{ uri: this.props.data.icon }} />

                <View style={styles.rightRoot}>
                    <Text style={styles.title}>{this.props.data.title}</Text>
                    <View style={styles.timeRoot}>
                        <Text style={styles.subTitle}>{this.props.data.date}</Text>
                        <Ionicons name='ios-arrow-forward' size={21} color={Colors.text_f8f8f8} />
                    </View>
                    <Text style={styles.content}>{this.props.data.content}</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    root: {
        backgroundColor: Colors.itemBg,
        flexDirection: 'row',
    },
    rightRoot: {
        flex: 1,
    },
    timeRoot: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    img: {
        height: 50,
        width: 50,
        marginTop: 18,
        marginLeft: 4,
    },
    title: {
        marginTop: 20,
        color: Colors.text_black,
        fontSize: FontSize.noti_item_title,
    },
    subTitle: {
        marginTop: 6,
        color: Colors.text_f8f8f8,
        fontSize: FontSize.noti_item_subTitle,

    },
    content: {
        marginTop: 10,
        color: Colors.text_black,
        fontSize: FontSize.noti_item_content,
        paddingRight: 10,
    },
    imgRight: {

    }
})

export default NotiItem;