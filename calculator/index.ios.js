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
var numNow = "";
var numStack = [];
var sigStack = [];

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

  // 处理点击事件
  handlePress(obj) {
    if (typeof(obj) == 'number') {
      numNow += obj.toString();
      this.setState({
        showText: numNow,
      });
    } else {
      numStack.push(parseInt(parseInt(this.state.showText)));
      sigStack.push(obj.toString());
      numNow = '';
      if (obj.toString() === '=') {
        var sig0 = sigStack.pop();
        var sig1 = sigStack.pop();
        var num1 = numStack.pop();
        var num2 = numStack.pop(); 
        var res = 0;
        if (sig1 === '+') {
          res = num1 + num2; 
        } else if (sig1 === '-') {
          res = num2 - num1;
        } else if (sig1 === '*') {
          res = num1 * num2;
        } else if (sig1 === '/') {
          res = num2 / num1;
        }
        this.setState({
          showText: res.toString(),
        });
      }
      if (obj.toString() === 'C') {
        numStack = [];
        sigStack = [];
        this.setState({
          showText: '0',
        });
      }
    }
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
            <Cell 
              textData="2" 
              typeStyle={styles.cell}
              onPress={this.handlePress.bind(this, 2)}  
            />
            <Cell 
              textData="3" 
              typeStyle={styles.cell}
              onPress={this.handlePress.bind(this, 3)}
            />
            <Cell 
              textData="+" 
              typeStyle={styles.signCell} 
              textStyle={styles.textSigInside}
              onPress={this.handlePress.bind(this, '+')}
            />
          </View>
          <View style={styles.row}>
            <Cell 
              textData="4" 
              typeStyle={styles.cell}
              onPress={this.handlePress.bind(this, 4)}
            />
            <Cell 
              textData="5" 
              typeStyle={styles.cell}
              onPress={this.handlePress.bind(this, 5)}
            />
            <Cell 
              textData="6" 
              typeStyle={styles.cell}
              onPress={this.handlePress.bind(this, 6)}
            />
            <Cell 
              textData="-" 
              typeStyle={styles.signCell} 
              textStyle={styles.textSigInside}
              onPress={this.handlePress.bind(this, '-')}
            />
          </View>
          <View style={styles.row}>
            <Cell 
              textData="7" 
              typeStyle={styles.cell}
              onPress={this.handlePress.bind(this, 7)}
            />
            <Cell 
              textData="8" 
              typeStyle={styles.cell}
              onPress={this.handlePress.bind(this, 8)}
            />
            <Cell 
              textData="9" 
              typeStyle={styles.cell}
              onPress={this.handlePress.bind(this, 9)}
            />
            <Cell 
              textData="×" 
              typeStyle={styles.signCell} 
              textStyle={styles.textSigInside}
              onPress={this.handlePress.bind(this, '*')}
            />
          </View>
          <View style={styles.row}>
            <Cell 
              textData="AC" 
              typeStyle={styles.signCell} 
              textStyle={styles.textSigInside}
              onPress={this.handlePress.bind(this, 'C')}
            />
            <Cell 
              textData="0" 
              typeStyle={styles.cell}
              onPress={this.handlePress.bind(this, 0)}
            />
            <Cell 
              textData="=" 
              typeStyle={styles.signCell} 
              textStyle={styles.textSigInside}
              onPress={this.handlePress.bind(this, '=')}
            />
            <Cell 
              textData="÷" 
              typeStyle={styles.signCell} 
              textStyle={styles.textSigInside}
              onPress={this.handlePress.bind(this, '+')}
            />
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