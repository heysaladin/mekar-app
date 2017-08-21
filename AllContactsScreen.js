import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
  Image,
  StyleSheet,
  Platform,
  BackHandler,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import ImageSlider from 'react-native-image-slider';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import { Icon } from 'react-native-elements';

export default class AllContactsScreen extends React.Component {
    render() {
      return (
        <View style={{width:'100%',height:300,display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <Text style={{textAlign: 'center', margin: 15}}>List of all data of Flowers</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Flower' })}
            title="Data of Flowers"
            color="#447f2c"
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