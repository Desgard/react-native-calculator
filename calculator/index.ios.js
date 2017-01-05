import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Navigator,
  Platform,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

var globalData = 0;
var calMethod = '';
var operator = '', operand = '';

var Cell = React.createClass({
  render () {
    var keyPad = 0;
    console.log(keyPad);
    return (
      <TouchableHighlight 
        onPress = {this.props.onPress} 
        underlayColor = "transparent"
        activeOpacity = {0.8}> 
        <View style={this.props.typeStyle}>
          <Text style={[styles.textInside, this.props.textStyle]}>{this.props.textData}</Text>
        </View>
      </TouchableHighlight>
    );
  }
});

export default class calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: '0',
    };
  }

  handlePress(obj) {
    console.log(obj);
    if (calMethod === '') { 
      operator += obj.toString();
    } else {
      operand += obj.toString();
    }
    this.setState({
      hey: calMethod == '' ? operator : operand,
    })
  } 

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculator</Text>
        <View style={styles.screen}>
          <Text style={styles.show}>{this.state.showText}</Text>
        </View>
        <View style={styles.board}>
          <View style={styles.row}>
            <Cell 
              textData="1" 
              typeStyle={styles.cell}
              onPress={this.handlePress.bind(this, 1)}
            />
            <Cell textData="2" typeStyle={styles.cell}/>
            <Cell textData="3" typeStyle={styles.cell}/>
            <Cell textData="+" typeStyle={styles.signCell} textStyle={styles.textSigInside}/>
          </View>
          <View style={styles.row}>
            <Cell textData="4" typeStyle={styles.cell}/>
            <Cell textData="5" typeStyle={styles.cell}/>
            <Cell textData="6" typeStyle={styles.cell}/>
            <Cell textData="-" typeStyle={styles.signCell} textStyle={styles.textSigInside}/>
          </View>
          <View style={styles.row}>
            <Cell textData="7" typeStyle={styles.cell}/>
            <Cell textData="8" typeStyle={styles.cell}/>
            <Cell textData="9" typeStyle={styles.cell}/>
            <Cell textData="×" typeStyle={styles.signCell} textStyle={styles.textSigInside}/>
          </View>
          <View style={styles.row}>
            <Cell textData="AC" typeStyle={styles.signCell} textStyle={styles.textSigInside}/>
            <Cell textData="0" typeStyle={styles.cell}/>
            <Cell textData="=" typeStyle={styles.signCell} textStyle={styles.textSigInside}/>
            <Cell textData="÷" typeStyle={styles.signCell} textStyle={styles.textSigInside}/>
          </View>
        </View>
      </View>
    );
  }
 }

var styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  board: {
    padding: 1,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  title: {
    fontFamily: 'Chalkduster',
    fontSize: 39,
    color: 'white',
    marginBottom: 20,
  },
  screen: {
    alignItems: 'flex-end',
  },
  show: {
    fontFamily: 'Arial',
    fontSize: 25,
    color: 'white',
    margin: 10,
  },
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  cell: {
    height: 80,
    width: 80,
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signCell: {
    height: 80,
    width: 80,
    backgroundColor: "#ef7b18",
    borderRadius: 5,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInside: {
    fontFamily: 'Arial',
    fontSize: 30,
  },
  textSigInside: {
    color: 'white',
  },
})

AppRegistry.registerComponent('calculator', () => calculator);