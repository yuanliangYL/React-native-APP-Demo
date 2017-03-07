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
  View,
  TouchableOpacity,

} from 'react-native';


import * as ProgressView from 'react-native-progress';

export default class Progress extends Component {


  constructor(props){
    super(props);

    this.state={
      barprogress:0.1,


      pieprogress:0.1,
    }
  }


  addprogress(num){

    if(num == 1){
      this.setState({barprogress:this.state.barprogress+=0.1})
    }
   if(num == 2){
     this.setState({pieprogress:this.state.pieprogress+=0.1})
   }

  }

  render() {

    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={this.addprogress.bind(this,1)}>
          <Text style={styles.welcome}>
            我是滚动条!
          </Text>
        </TouchableOpacity>
        <ProgressView.Bar progress={this.state.barprogress}
                          width={300}         //长度
                          height = {5}
                          borderRadius = {4}


                          //下面5个是通用属性
                          animated = {true}   //默认
                          color = 'red'
                          unfilledColor = 'white'
                          borderWidth={0.5}
                          borderColor = 'blue'

        />



        <TouchableOpacity onPress={this.addprogress.bind(this,2)}>
          <Text style={styles.welcome}>
            我是pie型进度!
          </Text>
        </TouchableOpacity>
        <ProgressView.Pie progress={this.state.pieprogress}
                          size={55}

                          //下面5个是通用属性
                          animated = {true}   //默认
                          color = '#76fcff'
                          unfilledColor = 'white'
                          borderWidth={0.5}
                          borderColor = '#385971'

        />


        <TouchableOpacity >
          <Text style={styles.welcome}>
            我是单色快动画进度!
          </Text>
        </TouchableOpacity>
        <ProgressView.Circle size={55}
                             indeterminate={true}
                             thickness = {30}
                             showsText = {true}
                             direction = 'counter-clockwise' //旋转方向
                             progress={this.state.pieprogress}

        />



        <TouchableOpacity >
          <Text style={styles.welcome}>
            我是多色慢动画进度!
          </Text>
        </TouchableOpacity>
        <ProgressView.CircleSnail
            colors={['red', 'green', 'blue']}
            duration = {3000}
            thickness = {2}  //厚度
            size={55}
            hidesWhenStopped = {true}
        />





      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('Progress', () => Progress);
