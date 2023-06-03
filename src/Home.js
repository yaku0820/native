import React from 'react'
import { Text, View,Button,Image} from 'react-native';


const Home = ({navigation}) => {
    // console.log(props);
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text>Home page</Text>
        <Button title='uragshlah' onPress={()=>{
            navigation.navigate('login')
        }}/>
        <Button title='flexbox' onPress={()=>{
            navigation.navigate('flexbox')
        }}/>
        <Button title='flatlist' onPress={()=>{
            navigation.navigate('flatlist')
        }}/>
        <Image style={{width:'50%',height:'50%'}} source={require('../assets/ff.jpg')}/>
    </View>
  )
}

export default Home