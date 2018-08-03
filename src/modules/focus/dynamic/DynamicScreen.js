'use strict';

import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { commonStyles } from '../../../styles/CommonStyles';
import DynamicItem from './DynamicItem';
import { connect } from 'react-redux';
import { refresh, loadMore } from './DynamicAction';


class DynamicScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { refreshing, data } = this.props;

        return (
            <View style={commonStyles.screenRoot}>

                <FlatList
                    style={commonStyles.flastList}

                    data={data}
                    refreshing={refreshing}
                    onRefresh={this._handleRefresh}
                    onEndReached={this._loadMore}
                    onEndReachedThreshold={0.1}
                    renderItem={this._renderItem}
                    ListEmptyComponent={this._renderEmpty}
                    keyExtractor={(item, index) => String(index)}
                />


            </View>
        )
    }

    componentDidMount() {
        this.props.dispatch(refresh());
    }

    _renderItem = (({ item }) => {
        return (
            <DynamicItem
                data={item}
                _onItemClick={this._onItemClick} />
        );
    })


    _renderEmpty = () => {
        return (
            <Text style={{ flex: 1 }}> Empty </Text>
        );
    }

    _handleRefresh = () => {
        this.props.dispatch(refresh());
    }

    _loadMore = () => {

    }

    _onItemClick = (item) => {

    }


}

function bindAction(store) {
    return {
        data: store.DynamicReducer.data,
        error: store.DynamicReducer.error,
        refreshing: store.DynamicReducer.refreshing,
    }
}

export default connect(bindAction)(DynamicScreen);