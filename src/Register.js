import React from 'react'
import { Text, View,Button,TextInput,Image} from 'react-native';

const Register = ({navigation}) => {
  return (
    <View >
        <Text>register page</Text>
        <Button title='login' onPress={()=>{
            navigation.navigate('login')
        }}/>
        
        <TextInput style={{borderWidth:1,fontSize:30,borderRadius:20,paddingLeft:20,}} placeholder='Gmail' onChangeText={(text)=>{console.log(text);}}/>
        <TextInput style={{borderWidth:1,fontSize:30,borderRadius:20,paddingLeft:20,}} placeholder='UserName' onChangeText={(text)=>{console.log(text);}}/>
        <TextInput style={{borderWidth:1,fontSize:30,borderRadius:20,paddingLeft:20,}} placeholder='Password' onChangeText={(text)=>{console.log(text);}}/>
        <TextInput style={{borderWidth:1,fontSize:30,borderRadius:20,paddingLeft:20,}} placeholder='again Password' onChangeText={(text)=>{console.log(text);}}/>
        <Image style={{width:'79%',height:'50%',marginLeft:100,}} source={require('../assets/logo.png')}/>
        <Text style={{textAlign:'center',fontSize:30}}>ene zurag bol minii real zurag shuu</Text>
        <Text>register page</Text>
        <Button title='register' onPress={()=>{
            navigation.navigate('login')
        }}/>
    </View>
  )
}

export default Register