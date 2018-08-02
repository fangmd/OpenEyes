import React from 'react';
import { View, Text } from 'react-native';
import HeaderView from '../widgets/HeaderView';
import { commonStyles } from '../../styles/CommonStyles';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import DynamicScreen from './dynamic/DynamicScreen';
import WorkScreen from './works/WorksScreen';
import { Colors } from '../../styles/Colors';

class FocusScreen extends React.Component {
    
    render() {
        let title = 'Subscription';
        return (
            <View style={commonStyles.screenRoot}>
                <HeaderView title={title} />
                {this._renderScrollTab()}
            </View>
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

                <WorkScreen tabLabel='作品' navigation={this.props.navigation} />
                <DynamicScreen tabLabel='动态' navigation={this.props.navigation} />

            </ScrollableTabView>
        )
    }
}

export default FocusScreen;