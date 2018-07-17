import React from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import HeaderView from '../widgets/HeaderView';
import { commonStyles } from '../../styles/CommonStyles';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Colors } from '../../styles/Colors';

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

const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);


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

    render() {
        let title = 'Notification';

        let tabView = <TabView
            navigationState={this.state}
            renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute,
            })}
            renderTabBar={this._renderTabBar}

            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
        />

        return (
            <View style={commonStyles.screenRoot}>
                <HeaderView title={title} />
                {tabView}
            </ View>
        )
    }

    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const color = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(
                            inputIndex => (inputIndex === i ? Colors.text_black : Colors.text_grey)
                        ),
                    });
                    return (
                        <TouchableOpacity
                            style={styles.tabItem}
                            onPress={() => this.setState({ index: i })}>
                            <Animated.Text style={{ color }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
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