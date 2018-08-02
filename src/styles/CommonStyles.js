import { StyleSheet, Platform } from 'react-native';
import * as Constants from '../constants/C';
import { Colors } from './Colors';


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
});

