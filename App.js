import React, { Component } from 'react';
import { Alert, Button, AppRegistry, View, Image, FlatList, StyleSheet, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default class FlexDirectionBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onPressButton1D(){
    Alert.alert('1D')
  }

  _onPressButton1W(){
    Alert.alert('1W')
  }

  _onPressButton1M(){
    Alert.alert('1M')
  }

  _onPressButton3M(){
    Alert.alert('3M')
  }

  _onPressButton6M(){
    Alert.alert('6M')
  }

  _onPressButton1Y(){
    Alert.alert('1Y')
  }

  handleClickHome(){
    Alert.alert('Home')
  }

  handleClickProfile(){
    Alert.alert('Profile')
  }

  handleClickFeed(){
    Alert.alert('Feed')
  }
  fetchData(){
    console.log("HERE");
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



let buttons;
for(let i =0; i < 10; i++){
buttons += <TouchableOpacity onPress={e => this.handleClickHome(e)}>
  <View>
    <Text style={{marginTop: 0, fontSize: 40, color: 'blue'}}>
      Test
    </Text>
  </View>
</TouchableOpacity>
}
this.fetchData();


    return (


      <View style={styles.fullcontainer}>

        <View style={styles.container1}>
        <View style={{padding: 10, width: "85%", marginTop: 10}}>
          <TextInput
            style={{height: 40, backgroundColor:"grey", padding: 5, justifyContent: 'center'}}
            placeholder="ARGENT"
          />
        </View>
          <View style={{width: 45, height: 40, backgroundColor: 'white', marginTop: 20, marginRight: 4}} />
        </View>

        <View style={styles.container2}>
          <Image source={pic} style={{width: "70%", height: "80%", marginLeft: '15%', marginTop: '2%'}}/>

          <View style={styles.timeline}>
            <View style={styles.timeline_button}>
              <TouchableOpacity style={{height:"100%", width:"100%", justifyContent:'center', flexDirection: 'row'}} onPress={e => this._onPressButton1D(e)}>
                <Text style={styles.timeline_text}>
                1D</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.timeline_button}>
              <TouchableOpacity style={{height:"100%", width:"100%", justifyContent:'center', flexDirection: 'row'}} onPress={e => this._onPressButton1W(e)}>
              <Text style={styles.timeline_text}>
                1W</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.timeline_button}>
              <TouchableOpacity style={{height:"100%", width:"100%", justifyContent:'center', flexDirection: 'row'}} onPress={e => this._onPressButton1M(e)}>
              <Text style={styles.timeline_text}>
                1M</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.timeline_button}>
              <TouchableOpacity style={{height:"100%", width:"100%", justifyContent:'center', flexDirection: 'row'}} onPress={e => this._onPressButton3M(e)}>
              <Text style={styles.timeline_text}>
                3M</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.timeline_button}>
              <TouchableOpacity style={{height:"100%", width:"100%", justifyContent:'center', flexDirection: 'row'}} onPress={e => this._onPressButton6M(e)}>
              <Text style={styles.timeline_text}>
                6M</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.timeline_button}>
              <TouchableOpacity style={{height:"100%", width:"100%", justifyContent:'center', flexDirection: 'row'}} onPress={e => this._onPressButton1Y(e)}>
              <Text style={styles.timeline_text}>
                1Y</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <View style={styles.container3}>
          <ScrollView>
            <View style={styles.stocksrow_style}>
              <TouchableOpacity style={styles.stocksLeftBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stocksRightBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newsRow}>
              <TouchableOpacity style={styles.newsBar} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.newsImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.stocksrow_style}>
              <TouchableOpacity style={styles.stocksLeftBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stocksRightBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newsRow}>
              <TouchableOpacity style={styles.newsBar} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.newsImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.stocksrow_style}>
              <TouchableOpacity style={styles.stocksLeftBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stocksRightBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newsRow}>
              <TouchableOpacity style={styles.newsBar} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.newsImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.stocksrow_style}>
              <TouchableOpacity style={styles.stocksLeftBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stocksRightBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newsRow}>
              <TouchableOpacity style={styles.newsBar} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.newsImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.stocksrow_style}>
              <TouchableOpacity style={styles.stocksLeftBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stocksRightBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newsRow}>
              <TouchableOpacity style={styles.newsBar} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.newsImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.stocksrow_style}>
              <TouchableOpacity style={styles.stocksLeftBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stocksRightBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newsRow}>
              <TouchableOpacity style={styles.newsBar} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.newsImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.stocksrow_style}>
              <TouchableOpacity style={styles.stocksLeftBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stocksRightBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newsRow}>
              <TouchableOpacity style={styles.newsBar} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.newsImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.stocksrow_style}>
              <TouchableOpacity style={styles.stocksLeftBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stocksRightBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newsRow}>
              <TouchableOpacity style={styles.newsBar} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.newsImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.stocksrow_style}>
              <TouchableOpacity style={styles.stocksLeftBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stocksRightBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newsRow}>
              <TouchableOpacity style={styles.newsBar} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.newsImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.stocksrow_style}>
              <TouchableOpacity style={styles.stocksLeftBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.stocksRightBox} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.stocksImage}/>
              </TouchableOpacity>
            </View>

            <View style={styles.newsRow}>
              <TouchableOpacity style={styles.newsBar} onPress={e => this.handleClickFeed(e)}>
                  <Image source={pic4} style={styles.newsImage}/>
              </TouchableOpacity>
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
            <TouchableOpacity style={{height:"100%", width:"100%"}} onPress={e => this.handleClickFeed(e)}>
                <Image source={pic4} style={{width: "50%", height:"100%", marginLeft: "25%", marginTop: "0.5%"}}/>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
};

const styles =  StyleSheet.create({

  market_button:{
    width: "50%",
    height:"100%",
    marginLeft: "25%",
    marginTop: "0.5%"
  },

  market_button_touchable:{
    height:"100%",
    width:"45%",
    margin: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  marketbutton_textbox:{
    flexDirection: 'column',
    justifyContent: 'center'
  },


  market_row:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "75%",
    // backgroundColor: 'red'
  },

  fullcontainer:{
    flex: 1, flexDirection: 'column', backgroundColor:'#DCDCDC', height: '100%', width: '100%'
  },

  container1: {
    width: '100%', height: '10%', flexDirection: 'row', backgroundColor: '#DCDCDC', justifyContent:'flex-end'
  },
  container2: {
    width: '100%', height: '25%', backgroundColor: '#DCDCDC', flexDirection: 'column', paddingBottom: 5
  },
  container3:{
    width: "100%", height: "53%", backgroundColor: '#DCDCDC'
  },
  container4: {
    width: '100%', height: '12%', backgroundColor: '#DCDCDC', flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 10
  },

  container4buttons:{
    width: '30%', height: '80%', backgroundColor: 'white',justifyContent:'center'
  },

  timeline:{
    width: "100%", backgroundColor: '#DCDCDC', height: "15%", marginTop: '2%', flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
  },

  timeline_button:{
    width: 50, height: "100%", backgroundColor: 'white', justifyContent:'center', flexDirection: 'row', borderWidth: 2
  },

  timeline_text:{
    fontSize: 15, marginTop: 1
  },

  stocksrow_style:{
    margin: "5%",
    height: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  stocksLeftBox:{
    height:120, width:"48%", backgroundColor: 'white', marginRight: 10, borderWidth: 2
  },

  stocksRightBox:{
    height:120, width:"48%", backgroundColor: 'white', borderWidth: 2
  },

  stocksImage:{
    width: "52%", height:"100%", marginLeft: "25%", marginTop: "0.5%"
  },

  newsRow:{
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "7.5%",
    marginRight: "7.5%",
    height: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  newsBar:{
    height:120, width:"100%", backgroundColor: 'white', borderWidth: 2
  },

  newsImage:{
    width: "52%", height:"100%", marginLeft: "25%", marginTop: "0.5%"
  }

});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
