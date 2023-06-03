import React from "react";
import {View,Text,Image,StyleSheet} from "react-native";
const Flexbox = ()=>{
    return(
        <View style={{flex: 1,  backgroundColor: "gray"}}>
            <View style={{flex: 1,flexDirection: "row", backgroundColor: "yellow"}}>
                <View style={{flex: 1,height: "100%",backgroundColor: "aqua"}}></View> 
                <View style={{flex: 1,height: "100%",backgroundColor: "pink"}}></View>
                <View style={{flex: 3,height: "100%", backgroundColor: "blue"}}>
                    <View style={{backgroundColor:'red',width:'100%',height:'33.3%'}}></View>
                        <View style={{backgroundColor:'pink',width:'100%',height:'33.3%'}}></View>
                        <View style={{backgroundColor:'white',width:'100%',height:'33.3%'}}></View>
                </View>         
            </View>
            <View style={{flex:1,height:'100%',backgroundColor:'green'}}></View>
            <View style={{flex:2,backgroundColor:'black'}}></View>
            <View style={{flex:3,backgroundColor:'red'}}></View>
        </View>
    )
}
export default Flexbox


  