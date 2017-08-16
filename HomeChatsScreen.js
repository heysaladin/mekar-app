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
              'http://placeimg.com/640/480/any',
              'http://saladinid.com/about_files/saladinid-profile.jpg',
              'http://placeimg.com/640/480/animal'
          ]} position={this.state.position}
              onPositionChanged={position => this.setState({position})}/>
          :
          <IndicatorViewPager removeClippedSubviews={false}
              style={styles.container}
              indicator={this._renderDotIndicator()}
          >
              <View style={{backgroundColor:'#544654',width:'100px',height:'100%'}}>
                  <Text>page one</Text>
                  <Image
                    style={styles.stretch}
                    source={require('./madagascar_penguins.png')}
                  />
              </View>
              <View style={{backgroundColor:'#643213',width:'100px',height:'100%'}}>
                  <Text>page two</Text>
                  <Image
                    style={styles.stretch}
                    source={require('./madagascar_penguins.png')}
                  />
              </View>
              <View style={{backgroundColor:'#1AA094',width:'100px',height:'100%'}}>
                  <Text>page three</Text>
                  <Image
                    style={styles.stretch}
                    source={require('./madagascar_penguins.png')}
                  />
                  {/* <Button title='Button' onPress={this.alert} /> */}
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
        height: 200
    }
  });