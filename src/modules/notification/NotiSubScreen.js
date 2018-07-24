import React from 'react';
import { View, FlatList } from 'react-native';
import { refresh} from './NotiAction';
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
                    renderItem={({item}) => <NotiItem data={item} /> }
                    
                />

                
                

            </View>
        )
    }

    componentDidMount(){
        this._onRefreshing();
    }

    _onRefreshing = () => {
        console.log('_onRefreshing')
        this.props.dispatch(refresh(this.props.url));
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