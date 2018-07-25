'use strict';
import React from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';


class WebViewScreen extends React.Component {
    render() {
        return (
            <WebView
                source={{ uri: this.props.webUrl }}
                style={{ marginTop: 20 }}
            />
        )
    }
}

WebViewScreen.propTypes = {
    webUrl: PropTypes.string,
}

export default WebViewScreen;