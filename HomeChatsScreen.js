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

export default class HomeChatsScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
  
  
  constructor(props) {
          super(props);
   
          this.state = {
              position: 1,
              interval: null
          };
      }
   
      componentWillMount() {
          this.setState({interval: setInterval(() => {
              this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
          }, 6000)});
      }
   
      componentWillUnmount() {
          clearInterval(this.state.interval);
      }
  
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
          { Platform.OS !== 'ios' ?
          <ImageSlider images={[
            require('./img/mekar.png'),
            require('./img/mekar.png'),
            require('./img/mekar.png')
          ]} position={this.state.position}
              onPositionChanged={position => this.setState({position})}/>
          :
          <IndicatorViewPager removeClippedSubviews={false}
              style={styles.container}
              indicator={this._renderDotIndicator()}
          >
              <View style={{backgroundColor:'#643213',width:'100%',height:200,}}>
                <View style={{backgroundColor:'#544654',width:'100%',height:200,display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    <Image
                        style={{width:'100%',height:200,resizeMode: 'cover',zIndex: 0,position: 'absolute', left: 0, right: 0,}}
                        source={require('./img/mekar.png')}
                    />
                </View>
              </View>
              <View style={{backgroundColor:'#643213',width:'100%',height:200,}}>
                <View style={{backgroundColor:'#643213',width:'100%',height:200,display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    <Image
                        style={{width:'100%',height:200,resizeMode: 'cover',zIndex: 0,position: 'absolute', left: 0, right: 0,}}
                        source={require('./img/mekar.png')}
                    />
                </View>
              </View>
              <View style={{backgroundColor:'#643213',width:'100%',height:200,}}>
                <View style={{backgroundColor:'#1AA094',width:'100%',height:200,display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                    <Image
                        style={{width:'100%',height:200,resizeMode: 'cover',zIndex: 0,position: 'absolute', left: 0, right: 0,}}
                        source={require('./img/mekar.png')}
                    />
                </View>
              </View>
          </IndicatorViewPager>
        }
        </View>
        );
    }
  
      _renderDotIndicator() {
          return <PagerDotIndicator pageCount={3} />;
      }
  
      _renderTitleIndicator() {
          return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
      }
  
  }

  const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        width: '100%',
        height: 200,
    }
  });