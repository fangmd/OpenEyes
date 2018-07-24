import React from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import HeaderView from '../widgets/HeaderView';
import { commonStyles } from '../../styles/CommonStyles';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Colors } from '../../styles/Colors';
import NotiSubScreen from './NotiSubScreen';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

let dataSrc = {
    tabList: [
        {
            id: 0,
            name: "官方",
            apiUrl: "http://baobab.kaiyanapp.com/api/v3/messages"
        },
        {
            id: 1,
            name: "互动",
            apiUrl: "http://baobab.kaiyanapp.com/api/v5/discovery/myMessage"
        }
    ],
    defaultIdx: 0
}

class NotificationScreen extends React.Component {

    state = {
        index: 0,
        routes: [
            { key: 'first', title: '官方' },
            { key: 'second', title: '互动' },
        ],
    };

    static navigationOptions = {
        header: null,
    }

    // static title = '通知';

    constructor(props){
        super(props);
    }

    render() {
        let title = 'Notification';

        return (
            <View style={commonStyles.screenRoot}>
                <HeaderView title={title} />

                {this._renderScrollTab()}
            </ View>
        )
    }

    _renderScrollTab() {
        return (
            <ScrollableTabView
                tabBarInactiveTextColor={Colors.text_grey} // 没有被选中的文字颜色
                tabBarActiveTextColor={Colors.text_black}      // 选中的文字颜色
                tabBarBackgroundColor={Colors.white}     // 选项卡背景颜色
                tabBarUnderlineStyle={{ backgroundColor: Colors.text_black, height: 2 }}   //下划线的样式
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar style={{ height: 40, borderWidth: 0, elevation: 2 }} tabStyle={{ height: 39 }}
                    underlineHeight={2} />}>

                <NotiSubScreen QUERY='ALL' tabLabel='官方' url='http://baobab.kaiyanapp.com/api/v3/messages'/>
                <NotiSubScreen QUERY='Android' tabLabel='互动' />

            </ScrollableTabView>
        )
    }

}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        // paddingTop: Constants.statusBarHeight,
    },
    tab: {
        width: 120,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    indicator: {
        backgroundColor: '#ffeb3b',
    },
    label: {
        color: '#fff',
        fontWeight: '400',
    },
});