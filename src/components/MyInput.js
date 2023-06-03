import react from "react";
import { TextInput,View,StyleSheet } from "react-native";


export default function(props){
    return(
        <View>
            <TextInput autoCorrect={false} placeholder={props.placeholder} style={css.input} {...props}/>
        </View> 
    )
} 


const css=StyleSheet.create({
    input:{
        borderWidth:1,
        fontSize:30,
        borderRadius:20,
        paddingLeft:20,
    }
})