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

import ChatScreen from './ChatScreen';
import RecentChatsScreen from './RecentChatsScreen';
import AllContactsScreen from './AllContactsScreen';
import HomeChatsScreen from './HomeChatsScreen';

class SplashScreenNavigator extends React.Component {
// Nav options can be defined as a function of the screen's props:
static navigationOptions = {
  // title: 'Welcome',
  // header: {
  //   visible: false
  // }
  header: null
};
  render() {
    const { navigate } = this.props.navigation;

    setTimeout(() => {
      navigate('Open');
    }, 4000);

    return (
      <View>
        <Text>Hello, Chat App!</Text>
      </View>
    );
  }

}

class OpenScreenNavigator extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = {
    // title: 'Welcome',
    // header: {
    //   visible: false
    // }
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        {/* <Text>Hello, Chat App!</Text> */}

        <IndicatorViewPager removeClippedSubviews={false}
              style={styles.container}
              indicator={this._renderDotIndicator()}
          >
              <View style={{backgroundColor:'#544654',width:'100px',height:'90%'}}>
                  <Text>page one</Text>
                  <Image
                    style={styles.stretch}
                    source={require('./madagascar_penguins.png')}
                  />
              </View>
              <View style={{backgroundColor:'#643213',width:'100px',height:'90%'}}>
                  <Text>page two</Text>
                  <Image
                    style={styles.stretch}
                    source={require('./madagascar_penguins.png')}
                  />
              </View>
              <View style={{backgroundColor:'#1AA094',width:'100px',height:'90%'}}>
                  <Text>page three</Text>
                  <Image
                    style={styles.stretch}
                    source={require('./madagascar_penguins.png')}
                  />
                  {/* <Button title='Button' onPress={this.alert} /> */}
              </View>
          </IndicatorViewPager>

        <Button
          onPress={() => navigate('Home')}
          /* onPress={() => navigate('Chat', { user: 'Lucy' })} */
          title="Chat with Lucy"
        />
      </View>
    );
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
}

}


const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeChatsScreen },
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

const SimpleApp = StackNavigator({
  Splash: { screen: SplashScreenNavigator },
  Open: { screen: OpenScreenNavigator },
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

// , headerMode: 'none'

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
  headerRight: (

  <MenuContext style={{ flex: 1 }}>

  { Platform.OS !== 'ios' ?
    <Button
          onPress={() => alert('Chat')}
          title="Chat with Lucy"
        />
      :
    <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1}>
          <Text>One</Text>
        </MenuOption>
        <MenuOption value={2}>
          <Text>Two</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  }
</MenuContext>

  ),
};

const styles = StyleSheet.create({
  container: {
      overflow: 'hidden',
      width: '100%',
      height: '90%'
  }
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
