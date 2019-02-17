import React, { Component } from 'react';
import { Alert, Button, AppRegistry, View, Image, FlatList, StyleSheet, Text } from 'react-native';

export default class FlexDirectionBasics extends Component {
  _onPressButtonHome(){
    Alert.alert('Home')
  }
  _onPressButtonProfile(){
    Alert.alert('Profile')
  }
  _onPressButtonSearch(){
    Alert.alert('Search')
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let pic2 = {
      uri: 'https://image.flaticon.com/icons/png/512/69/69524.png'
    };
    let pic3 = {
      uri: 'https://cdn1.iconfinder.com/data/icons/avatar-1-2/512/User2-512.png'
    };
    let pic4 = {
      uri: 'https://static.thenounproject.com/png/101791-200.png'
    };


    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.fullcontainer}>

        <View style={styles.container1}>
          <View style={{width: 45, height: 40, backgroundColor: '#1a8ef3', marginTop: 4, marginRight: 4}} />
        </View>

        <View style={styles.container2}>
          <Image source={pic} style={{width: "80%", height: "80%", marginLeft: '10%', marginTop: '7.5%'}}/>
        </View>

        <View style={styles.container3}>
          <View style={styles.listcontainer}>
            <FlatList
              data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
                {key: 'Devin2'},
                {key: 'Jackson2'},
                {key: 'James2'},
                {key: 'Joel2'},
                {key: 'John2'},
                {key: 'Jillian2'},
                {key: 'Jimmy2'},
                {key: 'Julie2'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
        </View>

        <View style={styles.container4}>
          <View style={styles.container4buttons}>
            <Button onPress={this._onPressButtonHome} title="Home" color="white">
              <Image source={pic2} style={{width: "40%", height: "50%", marginLeft: '30%'}}/>
            </Button>
          </View>
          <View style={styles.container4buttons}>
            <Button onPress={this._onPressButtonProfile} title="Profile" color="white">
              <Image source={pic3} style={{width: "40%", height: "50%", marginLeft: '30%'}}/>
            </Button>
          </View>
          <View style={styles.container4buttons}>
            <Button onPress={this._onPressButtonSearch} title="Search" color="white">
              <Image source={pic4} style={{width: "40%", height: "50%", marginLeft: '30%'}}/>
            </Button>
          </View>

        </View>
      </View>
    );
  }
};

const styles =  StyleSheet.create({
  listcontainer: {
   flex: 1,
   paddingTop: 10,
   paddingBottom: 10,
   paddingRight: 2,
   paddingLeft: 2

  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    margin: 2,
    backgroundColor: '#1a8ef3',
    color: 'white'
  },
  fullcontainer:{
    flex: 1, flexDirection: 'column', backgroundColor:'black', height: '100%', width: '100%'
  },

  container1: {
    width: '100%', height: '8%', flexDirection: 'row', backgroundColor: 'black', justifyContent:'flex-end'
  },
  container2: {
    width: '100%', height: '40%', backgroundColor: 'black'
  },
  container3: {
    width: '95%', height: '42%', backgroundColor: 'black', marginRight: '2.5%', marginLeft:'2.5%', marginTop: -5
  },
  container4: {
    width: '100%', height: '10%', backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5
  },

  container4buttons:{
    width: '30%', height: '80%', backgroundColor: '#1a8ef3', marginTop: 5, justifyContent:'center'
  }

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
