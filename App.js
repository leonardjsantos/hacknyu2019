import React, { Component } from 'react';
import { Alert, Button, AppRegistry, View, Image, FlatList, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

export default class FlexDirectionBasics extends Component {

  _onPressButtonTest(){
    Alert.alert('Test')
  }

  handleClickHome(){
    Alert.alert('Home')
  }

  handleClickProfile(){
    Alert.alert('Profile')
  }

  handleClickList(){
    Alert.alert('List')
  }


  render() {
    let pic = {
      uri: 'https://www.macrotrends.net/assets/images/thumbnails/mt/2593-1483981336.png'
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
          <View style={{width: 45, height: 40, backgroundColor: 'white', marginTop: 20, marginRight: 4}} />
        </View>

        <View style={styles.container2}>
          <Image source={pic} style={{width: "80%", height: "80%", marginLeft: '10%', marginTop: '7.5%'}}/>
        </View>

        <View style={styles.container3}>
          <ScrollView>

            <View style={styles.market_row}>
              <View style={styles.marketbutton}>
                <Button onPress={this._onPressButtonTest} title="Test" color="blue"/>
              </View>
              <View style={styles.marketbutton}>
                <Button onPress={this._onPressButtonTest} title="Test" color="blue"/>
              </View>
            </View>

            <View style={styles.market_row}>
              <View style={styles.marketbutton}>
                <Button onPress={this._onPressButtonTest} title="Test" color="blue"/>
              </View>
              <View style={styles.marketbutton}>
                <Button onPress={this._onPressButtonTest} title="Test" color="blue"/>
              </View>
            </View>

            <View style={styles.market_row}>
              <View style={styles.marketbutton}>
                <Button onPress={this._onPressButtonTest} title="Test" color="blue"/>
              </View>
              <View style={styles.marketbutton}>
                <Button onPress={this._onPressButtonTest} title="Test" color="blue"/>
              </View>
            </View>



          </ScrollView>

        </View>

        <View style={styles.container4}>
          <View style={styles.container4buttons}>
            <TouchableOpacity style={{height:"100%", width:"100%"}} onPress={e => this.handleClickHome(e)}>
                <Image source={pic2} style={{width: "50%", height:"100%", marginLeft: "25%", marginTop: "0.5%"}}/>
            </TouchableOpacity>
          </View>

          <View style={styles.container4buttons}>
            <TouchableOpacity style={{height:"100%", width:"100%"}} onPress={e => this.handleClickProfile(e)}>
                <Image source={pic3} style={{width: "50%", height:"100%", marginLeft: "25%", marginTop: "0.5%"}}/>
            </TouchableOpacity>
          </View>

          <View style={styles.container4buttons}>
            <TouchableOpacity style={{height:"100%", width:"100%"}} onPress={e => this.handleClickList(e)}>
                <Image source={pic4} style={{width: "50%", height:"100%", marginLeft: "25%", marginTop: "0.5%"}}/>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
};

const styles =  StyleSheet.create({


  marketbutton:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
    backgroundColor: 'white',
    padding: 10,
    width: "40%",
    color: 'blue'
  },

  market_row:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "60%",
    // backgroundColor: 'red'
  },

  marketbutton_text:{
    fontSize: 17,
    color: 'white',
    marginTop: 8,
    justifyContent: 'center'
  },
  fullcontainer:{
    flex: 1, flexDirection: 'column', backgroundColor:'#DCDCDC', height: '100%', width: '100%'
  },

  container1: {
    width: '100%', height: '10%', flexDirection: 'row', backgroundColor: '#DCDCDC', justifyContent:'flex-end'
  },
  container2: {
    width: '100%', height: '38%', backgroundColor: '#DCDCDC'
  },
  container3: {
    width: '95%', height: '42%', backgroundColor: '#DCDCDC', marginRight: '2.5%', marginLeft:'2.5%', marginTop: -5
  },
  container4: {
    width: '100%', height: '10%', backgroundColor: '#DCDCDC', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5
  },

  container4buttons:{
    width: '30%', height: '80%', backgroundColor: 'white', marginTop: 5, justifyContent:'center'
  }

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
