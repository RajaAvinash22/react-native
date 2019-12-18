import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Alert, View, Text, StatusBar, Image, AsyncStorage } from 'react-native';
import { TextInput, Card, List, Button, Title } from 'react-native-paper';
import MyHeader from './MyHeader';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient'
export default class HomeScreen extends React.Component {



    state = {
        info: {
            name: "loading !!",
            temp: "loading",
            humidity: "loading",
            desc: "loading",
            icon: "loading"
        }
    }

    getWeather() {
        // Mycity = await AsyncStorage.getItem("mericity");
        // if(!Mycity){
        //     Mycity = this.props.navigation.getParam('city','jaipur')
        // }
        Mycity = this.props.navigation.getParam('city','jaipur')
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Mycity}&units=metric&APPID=57c3cab49279622b42810a3de5596238`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    info: {
                        name: data.name,
                        temp: data.main.temp,
                        humidity: data.main.humidity,
                        desc: data.weather[0].description,
                        icon: data.weather[0].icon
                    }
                })

            }).catch(error => {
                Alert.alert("Error " + error.message + "please connect to internet", [{ text: "ok" }])

            })


    }

    componentDidMount() {
        this.getWeather()
    }
    render() {
        if (this.props.navigation.getParam('city')) {
            this.getWeather()
        }
        return (
            <View style={StyleSheet.container}>
                <MyHeader title='current weather' />
                <Card style={{ margin: 20,marginTop:100 ,width:370,height:1050}}>
                    <LinearGradient
                        colors={['#021B79', '#0575E6']}>
                        <View style={{ padding: 20, alignItems: "center" }}>
                            <Title style={styles.text}>{this.state.info.name}</Title>
                            <Image style={{ width: 120, height: 120 }}
                                source={{ uri: 'http://openweathermap.org/img/w/' + this.state.info.icon + ".png" }} />
                            <Title style={styles.text}>TEMPERATURE : {this.state.info.temp}</Title>
                            <Title style={styles.text}>DESCRIPTION : {this.state.info.desc.toUpperCase()}</Title>

                            <Title style={styles.text}>HUMIDITY : {this.state.info.humidity}</Title>

                        </View>
                    </LinearGradient>

                </Card>

               
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
        
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 10,
        color: 'white',
    }

});
