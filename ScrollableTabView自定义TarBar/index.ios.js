/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
//DefaultTabBar,ScrollableTabBar,系统默认提供的两种tTabbar模式
//tabBarPosition显示位置，默认top;"overlayTop" or "overlayBottom"悬浮效果

import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import YLTabBar from './YLTabBar';

export default class CustomsScrollableTabView extends Component {


  constructor(props) {
    super(props);

    this.state = {
      tabNames: ['主页', '分类', '秒杀', '购物车', '我的'],
      tabIconNames: ['md-home', 'md-grid', 'md-time', 'md-cart', 'md-contact'],

    };
  }


  render() {

    let tabNames = this.state.tabNames;
    let tabIconNames = this.state.tabIconNames;

    return (

        <View style={styles.container}>
          {/*导航条*/}
         <View style={{height:64,width:375,backgroundColor:'skyblue',justifyContent:'center',alignItems:'center'}}>
           <Text style={{fontSize:20, color:'white'}}>自定义样式ScrollableTabView</Text>
         </View>

          <ScrollableTabView
              // renderTabBar={() => <ScrollableTabBar/>}
              renderTabBar={() => <YLTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}

              tabBarPosition='bottom'
              onChangeTab={
                (obj) => {
                  console.log('被选中的tab下标：' + obj.i);
                }
              }
              onScroll={
                (position) => {
                  console.log('滑动时的位置：' + position);
                }
              }
              locked={true}
              initialPage={0}
              prerenderingSiblingsNumber={1}
          >


            {/*tabLabel自定义不直接使用，但是不可或缺*/}

            {/*page1*/}
            <View tabLabel="React-Native"  style={styles.container}>
              <Text >内容：ReactNative</Text>
              <IconFont.Button name="facebook" backgroundColor="#3b5998" size={20} >
                Login with Facebook
              </IconFont.Button>
              <Icon name="md-alarm" size={50}></Icon>
              <IconFont.Button name="twitter" backgroundColor="#3b5998" size={20} >
                Follow me on Twitter
              </IconFont.Button>
            </View>


            {/*page2*/}
            <View tabLabel="Flow"  style={styles.container}>
              <Text>内容：page2</Text>
            </View>


            {/*page3*/}
            <View tabLabel="Jest"  style={styles.container}>
              <Text>内容：page3</Text>
            </View>


            {/*page4*/}
            <View tabLabel="滚动tabbar"  style={styles.container}>
              <Text>内容：page4</Text>
            </View>


            {/*page5*/}
            <View tabLabel="实战开发测试"  style={styles.container}>
              <Text>内容：page5</Text>
            </View>
          </ScrollableTabView>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

});


AppRegistry.registerComponent('ScrollableTabView', () => CustomsScrollableTabView);
