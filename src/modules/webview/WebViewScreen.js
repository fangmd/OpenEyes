'use strict';
import React from 'react';
import { WebView, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import HeaderView from '../widgets/HeaderView';


class WebViewScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const webUrl = navigation.getParam('webUrl', '');
        const title = decodeURIComponent(navigation.getParam('title', ''))
        let webUrlResult = decodeURIComponent(webUrl)

        console.log('WebViewScreen load :' + webUrl + '  title:' + title)
        return (
            <View style={styles.root}>
                <HeaderView showLeft={true} title={title} />
                <WebView
                    source={{ uri: webUrlResult }}
                    style={styles.webView}
                />
            </View>
        )
    }
}

WebViewScreen.propTypes = {
    webUrl: PropTypes.string,
    title: PropTypes.string,
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
    },
    webView: {
        flex: 1,
    }
})

export default WebViewScreen;

