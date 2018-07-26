import React from 'react';
import { TouchableNativeFeedback,Platform,View, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class BackView extends React.Component {
  render() {
    const tintColor = '#000'
    return (
      <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={styles.backRoot}>
                  <Ionicons name='ios-arrow-back' size={23} color={tintColor} />
                </View>
      </TouchableNativeFeedback>
    )
  }

  _onPressButton=()=>{
    this.props.navigation.goBack();
  }
}

const styles = StyleSheet.create({
  backRoot:{
    height: 40,
    width: 40,
    justifyContent: 'center'
  }
})


export default withNavigation(BackView);