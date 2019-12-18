/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Tinder from './components/Tinder'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const mydata = [
  {
    id: 1,
    text: 'card 1',
    uri: 'https://source.unsplash.com/RDcEWH5hSDE/600x500',
  },
  { id: 2, text: 'card 2', uri: 'https://source.unsplash.com/pJqfhKUpCh8' },
  {
    id: 3,
    text: 'card 3',
    uri: 'https://source.unsplash.com/H601tyBZy8U/600x500',
  },
  { id: 4, text: 'card 4', uri: 'https://source.unsplash.com/CE9YG0_Mzlw' },
  { id: 5, text: 'card 5', uri: 'https://source.unsplash.com/-_C4UZRpoQc' },
  { id: 6, text: 'card 6', uri: 'https://source.unsplash.com/RfoISVdKM4U' },
];

class App extends React.Component {

  renderCard(item) {
    return (
      <View style={{ margin: 10 }} key={item.id}>
        <Card >
          <Card.Title title={item.text} />
          <Image source={{ uri: item.uri }} style={{ height: 350 }} />
          <Card.Actions>
            <Button>Like</Button>
            <Button>Unlike</Button>
          </Card.Actions>
        </Card>

      </View>
    )
  }
  renderNoMoreCards(){
    return(
      <View style={{ margin: 10 }} >
        <Card >
          <Card.Title title="No Match for U.." />
        </Card>

      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Tinder
          data={mydata}
          renderCards={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
};



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  cardStyle:{
    position:'absolute'
  }
});

export default App;
