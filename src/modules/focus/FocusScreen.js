import React from 'react';
import { View, Text } from 'react-native';
import HeaderView from '../widgets/HeaderView';
import { commonStyles } from '../../styles/CommonStyles';


class FocusScreen extends React.Component {
    render() {
        let title = 'Subscription';
        return (
            <View style={commonStyles.screenRoot}>
                <HeaderView title={title} />
                <Text>
                    Focus
                </Text>
            </View>
        )
    }
}

export default FocusScreen;