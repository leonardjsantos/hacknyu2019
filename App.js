import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import {AppRegistry, Image, Text, View} from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <Text style={{position: "absolute", top: "50%", left: "50%"}}>Hello</Text>
        <Image source={pic} style={{width: "100%", height: "100%"}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('stockproject', () => Bananas);


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
