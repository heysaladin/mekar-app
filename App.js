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
      <View style={{
        width: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      }}>
      <Image
          source={require('./img/loader.gif')}
          style={{
            width: 100,
            height: 100,
          }}
        />
        {/* #4C4D4F */}
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
      <View style={{backgroundColor:'#447f2c',width: '100%'}}>
        {/* <Text>Hello, Chat App!</Text> */}

        <IndicatorViewPager removeClippedSubviews={false}
              style={styles.container}
              indicator={this._renderDotIndicator()}
          >
          <View style={{backgroundColor: '#447f2c',width: '100%',height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <Image source={require( './img/bg.png')} style={{resizeMode: 'cover',zIndex: 0,position: 'absolute', left: 0, right: 0,}} />
              <View style={{ backgroundColor: 'transparent',width: '100%', height: 170, justifyContent: 'center', alignItems: 'center', left: 0, right: 0,}}>
                  <Image source={require( './img/hexa.png')} style={{flex: 1, resizeMode: 'cover',zIndex: 0,position: 'absolute', width: 150, height: 160,}} />
                  <Image style={styles.stretch} source={require( './img/icon-1.png')} />
              </View>
              <Text style={{backgroundColor: 'transparent', textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: 'bold', padding: 25, }}>Quick</Text>
          </View>
          <View style={{backgroundColor: '#447f2c',width: '100%',height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <Image source={require( './img/bg.png')} style={{resizeMode: 'cover',zIndex: 0,position: 'absolute', left: 0, right: 0,}} />
              <View style={{ backgroundColor: 'transparent',width: '100%', height: 170, justifyContent: 'center', alignItems: 'center', left: 0, right: 0,}}>
                  <Image source={require( './img/hexa.png')} style={{flex: 1, resizeMode: 'cover',zIndex: 0,position: 'absolute', width: 150, height: 160,}} />
                  <Image style={styles.stretch} source={require( './img/icon-2.png')} />
              </View>
              <Text style={{backgroundColor: 'transparent', textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: 'bold', padding: 25, }}>Modular</Text>
          </View>
          <View style={{backgroundColor: '#447f2c',width: '100%',height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <Image source={require( './img/bg.png')} style={{resizeMode: 'cover',zIndex: 0,position: 'absolute', left: 0, right: 0,}} />
              <View style={{ backgroundColor: 'transparent',width: '100%', height: 170, justifyContent: 'center', alignItems: 'center', left: 0, right: 0,}}>
                  <Image source={require( './img/hexa.png')} style={{flex: 1, resizeMode: 'cover',zIndex: 0,position: 'absolute', width: 150, height: 160,}} />
                  <Image style={styles.stretch} source={require( './img/icon-3.png')} />
              </View>
              <Text style={{backgroundColor: 'transparent', textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: 'bold', padding: 25, }}>Scalable</Text>
          </View>
          {/* <View style={{backgroundColor: '#447f2c',width: '100px',height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <Image source={require( './img/bg.png')} style={{resizeMode: 'cover',zIndex: 0,position: 'absolute'}} />
              <View style={{ width: 150, height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                  <Image source={require( './img/hexa.png')} style={{flex: 1, resizeMode: 'cover',zIndex: 0,position: 'absolute', width: 150, height: 160,}} />
                  <Image style={styles.stretch} source={require( './img/icon-2.png')} />
              </View>
              <Text style={{textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: 'bold', padding: 25, }}>Modular</Text>
          </View>
          <View style={{backgroundColor: '#447f2c',width: '100px',height: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
              <Image source={require( './img/bg.png')} style={{flex: 1, resizeMode: 'cover',zIndex: 0,position: 'absolute'}} />
              <View style={{ width: 150, height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                  <Image source={require( './img/hexa.png')} style={{flex: 1, resizeMode: 'cover',zIndex: 0,position: 'absolute', width: 150, height: 160,}} />
                  <Image style={styles.stretch} source={require( './img/icon-3.png')} />
              </View>
              <Text style={{textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: 'bold', padding: 25, }}>Scalable</Text>
          </View> */}
          </IndicatorViewPager>

        <View
        style={{
          height: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
        { Platform.OS !== 'ios' ?
        <Button
          style={{
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:20,
            paddingBottom:20,
            paddingLeft: 35,
            paddingRight: 35,
            backgroundColor:'#68a0cf',
            borderRadius:25,
            borderWidth: 1,
            borderColor: '#fff',
            boxShadow: 'none',
            letterSpacing: 2,
          }}
          onPress={() => navigate('Home')}
          /* onPress={() => navigate('Chat', { user: 'Lucy' })} */
          title="Skip"
          color="#447f2c"
        />
          :
        <Button
          style={{
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:20,
            paddingBottom:20,
            backgroundColor:'#68a0cf',
            borderRadius:25,
            borderWidth: 1,
            borderColor: '#fff',
            boxShadow: 'none',
            letterSpacing: 2,
          }}
          onPress={() => navigate('Home')}
          /* onPress={() => navigate('Chat', { user: 'Lucy' })} */
          title="Skip"
          color="#fff"
        />
        }
        </View>
      </View>
    );
  }

  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={3} />;
}

}


const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeChatsScreen },
  How: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
}, {tabBarOptions: {
  style: {
    backgroundColor: '#447f2c',
    // borderBottomWidth: 2,
    // borderBottomColor: '#1AA094'
  },
  labelStyle: {
    fontSize: 12,
    color: '#fff',
  }
}});

const SimpleApp = StackNavigator({
  Splash: { screen: SplashScreenNavigator },
  Open: { screen: OpenScreenNavigator },
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

// , headerMode: 'none'

MainScreenNavigator.navigationOptions = {
  title: 'MEKAR',
  headerRight: (

  <View style={{height: '100%',padding: 10,display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
    <MenuContext style={{ flex: 1 }}>

  { Platform.OS !== 'ios' ?
    
    <Button
          onPress={() => alert('Should be go to Dashboard')}
          title="Dashboard"
          color="#1AA094"
        />
        
      :
    <Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1}>
          <Text onPress={() => alert('Should be go to Dashboard')}>Dashboard</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>

  }
</MenuContext>


</View>

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
