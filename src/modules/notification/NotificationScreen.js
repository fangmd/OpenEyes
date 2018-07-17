import React from 'react';
import { View, Text } from 'react-native';
import HeaderView from '../widgets/HeaderView';
import { commonStyles } from '../../styles/CommonStyles';

class NotificationScreen extends React.Component {

    // static title = '通知';

    render() {
        let title = 'Notification';

        return (
            <View style={commonStyles.screenRoot}>
                <HeaderView title={title} />
                <Text>Notification</Text>
            </ View>
        )
    }
}

export default NotificationScreen;

