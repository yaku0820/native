import React,{useState} from 'react'
import { Text, View,Button,TextInput,Image} from 'react-native';
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import TextArea from './components/TextArea';

const Login = ({navigation}) => {
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const [text,setText]=useState('')
  return (
    <View >
        <Text >{phone}-----{password}</Text>
        <Button title='butsah' onPress={()=>{
            navigation.pop()
        }}/>
        <MyButton title='home' onPress={()=>{
            navigation.pop()
        }}/>
        <MyInput placeholder='UserName' onChangeText={setPhone}/>
        <MyInput secureTextEntry={true} placeholder='Password' onChangeText={setPassword}/>
        <Text>{text}</Text>
        <TextArea onChangeText={setText}/>       
        <Image source={require('../assets/unnamed.png')}/>
        {/* <Text style={{textAlign:'center',fontSize:30}}>ene zurag bol minii real zurag shuu</Text> */}
        <Button title='register' onPress={()=>{
            navigation.navigate('register')
        }}/>
    </View>
  )
}

export default Login