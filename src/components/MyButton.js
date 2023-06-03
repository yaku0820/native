import react from "react";
import { Button,View,StyleSheet } from "react-native";

export default function (props){

    return(
        <View>
            <Button style={css.btn} {...props}/>
        </View>
    )
}


const css = StyleSheet.create({
    btn:{
        backgroundColor:'red'
    },
  });
  