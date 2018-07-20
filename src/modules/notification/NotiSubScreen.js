import React from 'react';
import { View, FlatList } from 'react-native';
import { refresh, loadMore } from './NotiAction';

class NotiSubScreen extends React.Component {

    constructor(props) {
        super(props);
        this.props = {
            data: [
            ],
            error: false,
            refreshing: false,
            url: "",
        }
        this.state = {
            title: "",
        }
    }



    render() {
        let { refreshing, data, url } = this.props;
        console.log("url:" + url)

        refreshing = false;

        return (

            <View>

                <FlatList

                    data={data}
                    refreshing={refreshing}
                    onRefresh={this._onRefreshing}



                />

            </View>
        )
    }

    _onRefreshing = () => {
        console.log('_onRefreshing')
        this.props.dispatch(refresh());
    }

}

export default NotiSubScreen;