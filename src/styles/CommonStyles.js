import { StyleSheet, Platform } from 'react-native';
import * as Constants from '../constants/C';
import { Colors } from './Colors';
import { FontSize } from './FontSize';


export const commonStyles = StyleSheet.create({
    screenRoot: {
        flex: 1,
    },
    mainTabImg: {
        width: 24,
        height: 24,
    },
    flastList: {
        
    },
    statusBar: {
        height: Platform.OS === Constants.IOS ? Constants.STATUS_BAR_HEIGHT : 0,
    },
    divideHorizontal:{
        height: 1,
        backgroundColor: Colors.divide,
    },
    divideHorizontal_2:{
        height: 1,
        backgroundColor: Colors.divide_ededed,
    },
    divideHorizontal_3:{
        height: 0.5,
        backgroundColor: Colors.divide_ededed,
    },
    title:{
        color: 'black',
        fontSize: FontSize.item_title_15,
    },
    content:{
        color: Colors.text_444444,
        fontSize: FontSize.item_title,
    },
    subTitle:{
        color: Colors.text_grey,
        fontSize: FontSize.item_subtitle,
    },
    rowRoot:{
        flexDirection: 'row',
    },
    divideHorizontal_white:{
        height: 0.5,
        backgroundColor: Colors.white,
    },
    black_14:{
        color: 'black',
        fontSize: FontSize.item_title_14,
    },
    black_13:{
        color: 'black',
        fontSize: FontSize.item_title_13,
    },
    gray_12:{
        color: Colors.text_grey,
        fontSize: FontSize.item_title_12,
    }
});

