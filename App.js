import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from "expo-font"
export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [gameIsOver,setGameIsOver] = useState(false);

  useFonts({
    
  })

  const pickedUserNumber = (pickedNumber)=>{
      setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen pickedUserNumber={pickedUserNumber}/>
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} gameIsOverHandler={gameIsOverHandler}/>
  }
  if(gameIsOver){
    screen = <GameOverScreen/>
  }
  function gameIsOverHandler(){
    setGameIsOver(true)
  }
  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
    <SafeAreaView style={styles.rootScreen}>
      {screen}
    </SafeAreaView>
      </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
