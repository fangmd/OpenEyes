import React from 'react';
import { View, FlatList } from 'react-native';
import { refresh2 } from './NotiAction';
import NotiItem from './NotiItem';
import { commonStyles } from '../../styles/CommonStyles';
import { connect } from 'react-redux';

class NotiSubScreen2 extends React.Component {

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
                    renderItem={({ item }) => <NotiItem data={item} />}
                    keyExtractor={(item, index) => String(index)}
                />

            </View>
        )
    }

    componentDidMount() {
        // this._onRefreshing();
    }

    _onRefreshing = () => {
        console.log('_onRefreshing')
        this.props.dispatch(refresh2(this.props.url));
    }
}

function bindAction(store) {
    return {
        data: store.NotiReducer2.data,
        error: store.NotiReducer2.error,
        refreshing: store.NotiReducer2.refreshing,
    }
}

export default connect(bindAction)(NotiSubScreen2);