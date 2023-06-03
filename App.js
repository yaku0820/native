import { StyleSheet, Text, View, ImageBackground,Image,Button,TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home';
import LoginScreen from './src/Login';
import RegisterScreen from './src/Register';
import FlexboxScreen from './src/Flexbox';
import FlastListScreen from './src/FlatListScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <ImageBackground source={require('./assets/gg.jpg')} style={styles.container}>
    //   <View style={styles.ov}>
    //     <View style={styles.con}>
    //       <View style={styles.conn}>
    //         <Image source={require('./assets/logo.png')} style={styles.img} />
    //       </View>
    //       <View style={styles.conn}>
    //           <Text style={styles.text}>Otaku</Text>
    //       </View>
    //       <View style={styles.conn}>
    //         <View style={styles.three}>
    //           <AntDesign name='facebook-square' style={styles.icon} />
    //         </View>
    //         <View style={styles.three}>
    //           <AntDesign name='youtube' style={styles.icon} />
    //         </View>
    //       </View>
    //     </View>
    //   </View>



    //   <View style={styles.logo}>
    //     <View style={styles.logoo}>
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //     </View>
    //     <View style={styles.logoo}>
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //       <AntDesign name='facebook-square' style={styles.iconl} />
    //     </View>


    

    //   </View>
    // </ImageBackground>



    
    // <View style={styles.container}>
    //   <Button title='click' onPress={()=>{console.log('clicked')}}></Button>
    //   <TouchableOpacity onPress={()=>{Alert.alert('clicked')}}>
    //     <Text style={styles.text}>hahaahahah</Text>

    //   </TouchableOpacity>

    // </View>


    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="flexbox" component={FlexboxScreen} />
        <Stack.Screen name="flatlist" component={FlastListScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    // width:'100%',
    // height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  red:{
    color:'red',
    fontSize: 50,
  },
  con:{
    width:'98%',
    height:80,
    // backgroundColor:'green',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:35,
  },
  conn:{
    width:150,
    height:80,
    // backgroundColor:'red',
    flexDirection:'row',
    gap:10,
    justifyContent:'center',
    alignItems:'center',
  },
  three:{
    width:'50%',
    height:'100%',
    // backgroundColor:'gray',
    justifyContent:'center',
    alignItems:'center',
  },
  icon:{
    fontSize:30,
    color:'white',
  },
  iconl:{
    fontSize:70,
    color:'white',
  },
  img:{
    // width:'100%',
    // height:'100%',
    width:'50%',
    height:'50%',
  },
  text:{
    fontSize:30,
    color:'black',
    // border:"1px solid black"
    borderWidth:2,
    backgroundColor:'aqua',
  },
  logo:{
    flex:1,
    // backgroundColor:'red',
    // flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  logoo:{
    flex:1,
    // backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  }
});