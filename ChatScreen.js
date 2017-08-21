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

export default class ChatScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) =>
    {
      const {state, setParams} = navigation;
      const isInfo = state.params.mode === 'info';
      const {user} = state.params;
      return {
        title: isInfo ? `${user}'s Flower Info` : `Data of ${state.params.user}`,
        headerRight: (
          <View style={{height: '100%',padding: 10,display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <Button
            color="#1AA094"
            title={isInfo ? 'Done' : `${user}'s info`}
            onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
          />
          </View>
        ),
      };
    }
  
    render() {
      // The screen's current route is passed in to `props.navigation.state`:
      const { params } = this.props.navigation.state;
      return (
        <View style={{width:'100%',height:300,display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          <Text style={{textAlign: 'center'}}>Data of {params.user}</Text>
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