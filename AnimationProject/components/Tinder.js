import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PanResponder,
  Animated,Dimensions,UIManager, LayoutAnimation
} from 'react-native';
// const { UIManager } = NativeModules;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_LIMIT = SCREEN_WIDTH / 2;
class Tinder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
        const position = new Animated.ValueXY();
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onPanResponderMove:(e,gesture)=>{
                position.setValue({x:gesture.dx ,y:gesture.dy})
            },
            onPanResponderRelease:(e,gesture)=>{
                if(gesture.dx > SWIPE_LIMIT){
                    
                    this.swiped('right')
                }else if(gesture.dx < -SWIPE_LIMIT){
                   
                    this.swiped('left')
                }else{
                    this.resetPosition();
                }
                
            }
            
        })
        this.position=position
    }
    
componentDidUpdate(){
 UIManager.setLayoutAnimationEnabledExperimental 
 &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
  LayoutAnimation.spring();

}

swiped(direction){
    const dir = direction === 'right' ? SCREEN_WIDTH*2 : -SCREEN_WIDTH*2
    Animated.timing(this.position,{
        toValue:{x:dir,y:0}
    }).start(()=>{
        this.position.setValue({x:0,y:0})
        this.setState({index:this.state.index + 1})
    })
}
    resetPosition(){
        Animated.spring(this.position,{
            toValue:{x:0,y:0},
            stiffness:200
        }).start()
    }

mycardStyle(){

    const rotate = this.position.x.interpolate({
        inputRange:[-SCREEN_WIDTH *2 ,0 ,SCREEN_WIDTH *2],
        outputRange:['-120deg','0deg','120deg']
    })
    return {
        ...this.position.getLayout(),
        transform:[{rotate:rotate}]
    }
}   
rendercard(){
if(this.state.index >= this.props.data.length){
    return this.props.renderNoMoreCards()
}

    return this.props.data.map((item,i)=>{
        if(i < this.state.index){
            return null
        }
        if(i===this.state.index){
            return(
                <Animated.View key={i}
            style={[this.mycardStyle(),styles.cardStyle]}
            {...this.panResponder.panHandlers}
            >
                {this.props.renderCards(item)}
            </Animated.View>
            )
        }
        return (
            <Animated.View key={item.id} style={[styles.cardStyle,{top:10*(i-this.state.index)}]}>
            {this.props.renderCards(item)}
            </Animated.View>
        )
    }).reverse()
}

    render(){
        return(
            <Animated.View>
                {/* <ScrollView> */}
                {this.rendercard()}
                {/* </ScrollView> */}
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    cardStyle:{
        position:'absolute',
        zIndex:1,
        width:SCREEN_WIDTH,
        marginTop:60
      } 
})
export default Tinder;