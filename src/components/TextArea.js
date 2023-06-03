import react from "react";
import { TextInput,View,StyleSheet } from "react-native";


export default function(props){
    return(
        <TextInput  {...props} style={{height:100,margin:20,padding:10,borderColor:'gray',borderWidth:2,}} multiline={true} borderBottomColor='green' borderBottomWidth={3} borderLeftColor='green' borderLeftWidth={3} borderRightColor='green' borderRightWidth={3} borderTopColor='green' borderTopWidth={3} editable={true} />
    )
}