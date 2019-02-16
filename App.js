import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: "100%", height: "10%", backgroundColor: 'red'}} />
        <View style={{width: "100%", height: "40%", backgroundColor: 'skyblue'}} />
        <View style={{width: "100%", height: "40%", backgroundColor: 'green'}} />
        <View style={{width: "100%", height: "10%", backgroundColor: 'orange'}} />

      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);

// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isShowingText: true };
//
//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }
//
//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }
//
//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }
//
// export default class BlinkApp extends Component {
//   render() {
//     return (
//       <View>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }
//
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => BlinkApp);


// import React, { Component } from 'react';
// // import { StyleSheet, Text, View } from 'react-native';
// import {AppRegistry, Image, Text, View} from 'react-native';
//
// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/32674544_2220400434637553_9129231511982178304_n.jpg?_nc_cat=108&_nc_oc=AQmzZOa4-a22w9C_1EwHP9dmwHG3UD4PcnrKbw8rmTb5gZgcuH1XzAH_L1Fyju7bjPk7NOEZYUzxNS1hHFlCFp5d&_nc_ht=scontent-lga3-1.xx&oh=fb594ce971959ca3c5502b86430415ee&oe=5CE4B10F'
//     };
//     return (
//       <View>
//         <Text style={{position: "absolute", top: "25%", left: "25%", zIndex: 2, color: "red", fontSize: 100}}>Hello</Text>
//         <Image source={pic} style={{width: "100%", height: "100%"}}/>
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('stockproject', () => Bananas);


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>WHY WERE YOU LATE.</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
