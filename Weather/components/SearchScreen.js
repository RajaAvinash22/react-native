import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, AsyncStorage, } from 'react-native';
import { TextInput, Card, List, Button } from 'react-native-paper';
import MyHeader from './MyHeader';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class SearchScreen extends React.Component {

  state = {
    text: '',
    cities: []
  };
  buttonClick(){
    console.log('clicked')   
    this.props.navigation.navigate('current city',{city:this.state.text})
    // await AsyncStorage.setItem("mericity",this.state.text)
  }
  listclick(name){
    this.setState({
      text:name
    })
    if(!name){
      this.fetchCities(name)
    }
    
    
  }
  fetchCities(text) {
    // console.log(text)
    this.setState({ text })
    fetch(`http://autocomplete.wunderground.com/aq?query=${text}`)
      .then(data => data.json())
      .then(city => {
        this.setState({
          cities: city.RESULTS.slice(0, 13)
        })
      })
    console.log(this.state.cities)
  }
  reset(){
    this.setState({
      text:''
    })
    
  }

  render() {
    renderCity = <Card>
      <List.Item
        title="No Cities"
      /></Card>

    if (this.state.cities.length > 0) {
      renderCity = this.state.cities.map(city => {
        return (
          <Card style={{ margin: 5 }} key={city.l} onPress={()=>this.listclick(city.name)}>
            <List.Item
              title={city.name}
            />
          </Card>
        );
      })
    }
    return (
      <View style={StyleSheet.container}>
        <MyHeader title='select city' />
        <TextInput
          label='Enter City Name'
          value={this.state.text}
          onChangeText={text => this.fetchCities(text)}
        />
        <View style={{flexDirection: 'row'}}>
        <Button  mode="contained" style={{margin:20}} onPress={() => this.buttonClick()}>
          See Weather Info
  </Button>
  <Button  mode="contained" style={{margin:20}} onPress={() => this.reset()}>
          Clear
  </Button>
  </View>
        <ScrollView>
          {renderCity}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },

});
