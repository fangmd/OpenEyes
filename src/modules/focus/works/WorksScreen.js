'use strict';

import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { commonStyles } from '../../../styles/CommonStyles';
import { connect } from 'react-redux';
import { refresh, loadMore } from './WorkScreenAction';
import WorkItem from './WorkItem';


class WorkScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={commonStyles.screenRoot}>

                <FlatList
                    style={commonStyles.flastList}
                    data={this.props.data}
                    refreshing={this.props.refreshing}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => String(index)}
                    ListEmptyComponent={this._renderEmpty}

                    onRefresh={this._onRefresh}
                    onEndReached={this._onLoadMore}
                    onEndReachedThreshold={0.2}
                />


            </View>
        )
    }

    _renderItem = (item) => {
        return (
            <WorkItem
                data={item}
                _onItemClick={this._onItemClick}
            />
        )
    }

    _onItemClick = (item) => {
        this.props.navigation.navigate('WorkDetail', { id: item.item.data.content.data.id })
    }

    _renderEmpty = () => {
        return (
            <Text style={{ flex: 1 }}> Empty </Text>
        );
    }

    _onRefresh = () => {
        this.props.dispatch(refresh())
    }

    _onLoadMore = () => {
        this.props.dispatch(loadMore(this.props.index + 1))
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