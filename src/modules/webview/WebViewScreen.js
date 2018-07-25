'use strict';
import React from 'react';
import { WebView, Alert } from 'react-native';
import PropTypes from 'prop-types';


class WebViewScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const webUrl = navigation.getParam('webUrl', '');
        let webUrlResult = decodeURIComponent(webUrl)
        return (
            <WebView
                source={{ uri: webUrlResult }}
                style={{ marginTop: 20 }}
            />
        )
    }
}

WebViewScreen.propTypes = {
    webUrl: PropTypes.string,
}

export default WebViewScreen;