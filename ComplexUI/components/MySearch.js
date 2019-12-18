import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';
import { Appbar , Card, Title,Button, Paragraph} from 'react-native-paper';
import Icon from 'react-native-ionicons'
import MyHeader from './MyHeader'
import MyCard from './MyCard';

export default class MySearch extends React.Component {
    static navigationOptions = {
        drawerLabel: 'search',
    }
    render() {
        return (
            <View>
                <ScrollView >
                {/* <MyHeader name='search' />
                <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-around'}}>
                    <Button style={{backgroundColor:'#17aa80'}}>
                        <Text style={{color:'white'}}>abc</Text>
                    </Button>
                    <Button style={{backgroundColor:'#white',borderColor:"#17aa80",borderWidth:3}}>
                        <Text style={{color:'#17aa80'}}>xyz</Text>
                    </Button>
                </View> */}
                <MyCard name="Arpita"/>
                <MyCard name="Shenaz"/>
                <MyCard name="Himanshi"/>
                <MyCard name="Aashish"/>
                <MyCard name="Arpit"/>
                <MyCard name="Namrata"/>
                <MyCard name="Aadarsh"/>
                <MyCard name="Namita"/>
                <MyCard name="Kat"/>
                </ScrollView>
            </View>
            
        );
       
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    }
})