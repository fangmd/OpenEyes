import React from 'react';
import { View, FlatList } from 'react-native';
import { refresh, loadMore } from './NotiAction';

class NotiSubScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "",
            title: "",
        }
    }



    render() {
        let { refreshing, data } = this.props;

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
        this.props.dispatch(refresh());
    }

}

export default NotiSubScreen;