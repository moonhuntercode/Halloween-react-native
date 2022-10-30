import { StatusBar } from 'expo-status-bar';
import {Image, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import person from './assets/person-witch-1.png'
import backgroundLila from './assets/background-lila-1.png'
const screenWidth=Dimensions.get('window').width;
const screenHeight=Dimensions.get('window').height;
import {useFonts} from 'expo-font';


export default function App() {
const [loaded]=useFonts({
  BabiHalloween:require('./assets/fonts/BabyHalloween.ttf')
});
if(!loaded){
  return null;
}
  return (  
    <View style={styles.container}>
 <Text style={styles.text1}
 >HALLOWEEN</Text>
 <ImageBackground source={person} style={styles.image}></ImageBackground>
<Image
source={backgroundLila}
resizeMode="cover"
style={styles.image2}
></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000',
  },
  text1:{
    color:'#fff',
    fontFamily:'BabiHalloween',
    fontSize:50,
    top:190,
    
  },
  image:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    width:screenWidth,
    height:screenHeight,
    zIndex:2,
    bottom:49,
    
  },
  image2:{
    flex:1,
    position:"absolute",
    width: '100%',
    height: '100%',
    justifyContent:'center',
  }
});
