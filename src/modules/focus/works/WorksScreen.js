'use strict';

import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { commonStyles } from '../../../styles/CommonStyles';
import { connect } from 'react-redux';
import { refresh } from './WorkScreenAction';


class WorkScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={commonStyles.screenRoot}>


            </View>
        )
    }

    componentDidMount() {
        this.props.dispatch(refresh())
    }
}

function bindAction(store) {
    return {
        data: store.WorkReducer.data,
        error: store.WorkReducer.error,
        refreshing: store.WorkReducer.refreshing,
        index: store.WorkReducer.index,
        loadingMore: store.WorkReducer.loadingMore,
    }
}

export default connect(bindAction)(WorkScreen);