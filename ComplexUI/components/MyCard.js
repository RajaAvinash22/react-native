import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image} from 'react-native';
import { Appbar ,Button, Card, Title, Paragraph} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyHeader from './MyHeader'

export default function MyCard(props) {
        return (
                <View style={{margin:5}}>
                    <Card style={{elevation:5}}>
                        <View style={{flexDirection:'row',padding:10}}>
                            <View style={{height:80,width:80,borderRadius:40,backgroundColor:'#F86262'}}>
                               <View style={{height:80,width:80}}>
                                <Image 
                                style={{height:80,width:80,borderRadius:40}}
                                 source ={{uri:'https://source.unsplash.com/RDcEWH5hSDE/600x500'}}
                                 />
                                 </View>
                            </View>
                            <View>
                                <Card.Content>
                                    <Title>{props.name}</Title>
                                    {/* <Paragraph style={{color:'green'}}>abcd</Paragraph> */}
                                    <Paragraph >bhillai</Paragraph>
                                </Card.Content>
                            </View>
                            {/* <View>
                            <Card.Content>
                                    <Paragraph>available date</Paragraph>
                                        <View style={{flexDirection:'row'}}>
                                            <Ionicons name="md-calender" size={20} color='green' />
                                            <Text style={{fontSize:15,fontWeight:"bold",marginLeft:10}}>28/12/2919</Text>
                                        </View>
                                </Card.Content>
                            </View> */}
                        </View>
                        {/* <View style={{flexDirection:'row',justifyContent:'space-around',padding:10}}>
                        <Button  mode="contained" style={{backgroundColor:"#F86262",borderRadius:40}}>
                            Press me
                        </Button> 
                        <Button  mode="contained"  style={{backgroundColor:"#F86262",borderRadius:40}}>
                            Press me
                        </Button>
                        </View> */}

                    </Card>
                </View>
            
        );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    }
})