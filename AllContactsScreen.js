import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import ImageSlider from 'react-native-image-slider';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { Icon } from 'react-native-elements';

export default class AllContactsScreen extends React.Component {
    render() {
      return (
        <View>
          <Text>List of all contacts</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
            title="Chat with Lucy"
          />
        </View>
        );
    }
  }
  

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        width: '100%',
        height: 200
    }
  });