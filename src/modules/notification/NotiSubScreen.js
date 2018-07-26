import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import { refresh } from './NotiAction';
import NotiItem from './NotiItem';
import { commonStyles } from '../../styles/CommonStyles';
import { connect } from 'react-redux';



class NotiSubScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { refreshing, data, url } = this.props;
        console.log("url:" + url)

        refreshing = false;
        return (

            <View>

                <FlatList
                    style={commonStyles.flastList}
                    data={data}
                    refreshing={refreshing}
                    onRefresh={this._onRefreshing}
                    renderItem={({ item }) => <NotiItem data={item} onItemClick={this._onItemClick} />}
                    keyExtractor={(item, index) => String(index)}
                />

            </View>
        )
    }

    componentDidMount() {
        this._onRefreshing();
    }

    _onRefreshing = () => {
        console.log('_onRefreshing')
        this.props.dispatch(refresh(this.props.url));
    }

    _onItemClick = (url_string) => {
        let url_string_decode = decodeURIComponent(url_string)
        let arr = url_string.split('&url=')
        let title = arr[0].split('title=')[1]
        this.props.navigation.navigate('WebView', { webUrl: arr[1], title: title})
    }
}

function bindAction(store) {
    return {
        data: store.NotiReducer.data,
        error: store.NotiReducer.error,
        refreshing: store.NotiReducer.refreshing,
    }
}

export default connect(bindAction)(NotiSubScreen);