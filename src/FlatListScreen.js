import React from "react";
import {View,Text,Image,StyleSheet,FlatList,TouchableOpacity,Alert} from "react-native";
const FlstListScreen = ()=>{
    const data=[
        {name:'uuganaa',color:'red'},
        {name:'bataa',color:'blue'},
        {name:'dorjoo',color:'green'},
        {name:'bymbaa',color:'pink'},
        {name:'gerlee',color:'gray'},
        {name:'odoo',color:'purple'},
        {name:'enhee',color:'brown'},
    ]
    const handleClick=(name)=>{
        Alert.alert(name)
    }
    return(
    <FlatList data={data} renderItem={Element=>(
        <TouchableOpacity onPress={()=>handleClick(Element.item.name)}>
        <View>
            <Text  style={{backgroundColor:Element.item.color,margin:10,padding:10}}>{Element.item.name}</Text>
        </View>
        </TouchableOpacity>
    )} />
    )
}
export default FlstListScreen