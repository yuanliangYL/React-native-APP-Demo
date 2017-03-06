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

import ScrollableTab,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
//DefaultTabBar,ScrollableTabBar,系统默认提供的两种tTabbar模式
//tabBarPosition显示位置，默认top;"overlayTop" or "overlayBottom"悬浮效果



export default class ScrollableTabView extends Component {


  render() {

    return (

        <View style={styles.container}>
          {/*导航条*/}
         <View style={{height:64,width:375,backgroundColor:'skyblue',justifyContent:'center',alignItems:'center'}}>
           <Text style={{fontSize:20, color:'white'}}>默认样式ScrollableTabView</Text>
         </View>

          {/*滚动页面*/}
          <ScrollableTab
              renderTabBar={() => <ScrollableTabBar />}
              tabBarPosition="overlayTop"

              onChangeTab={ (obj)=> { console.log('被选中的tab下标：'+obj.i)}}
              onScroll={ (position)=> { console.log('滚动到的位置：'+position)}}   //位置范围：0到tab数-1

              locked={true}    //锁定横向滑动
              initialPage={2}    //初始化页面

              tabBarUnderlineStyle={{height:1,backgroundColor:'red'}}
              tabBarBackgroundColor="#ffe9a4"
              tabBarActiveTextColor="red"
              tabBarInactiveTextColor="gray"
              tabBarTextStyle={{fontSize:18}}
              scrollWithoutAnimation={false}    //页面是否可以滚动切换
              prerenderingSiblingsNumber={1}    //预先渲染附件视图的个数，0为当前页面



          >
            <View tabLabel="React-Native"  style={styles.container}>
              <Text>内容：page1</Text>
            </View>

            <View tabLabel="Flow"  style={styles.container}>
              <Text>内容：page2</Text>
            </View>

            <View tabLabel="Jest"  style={styles.container}>
              <Text>内容：page3</Text>
            </View>

            <View tabLabel="滚动tabbar"  style={styles.container}>
              <Text>内容：page4</Text>
            </View>

            <View tabLabel="实战开发测试"  style={styles.container}>
              <Text>内容：page5</Text>
            </View>

          </ScrollableTab>
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

AppRegistry.registerComponent('ScrollableTabView', () => ScrollableTabView);
