import { Alert, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstrcutionText from "../components/instrcutionText";

function generateRandomNumber(min,max,exclude){
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if(rndNum === exclude){
    return generateRandomNumber(min,max,exclude);
  }else{
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary  = 100;
const GameScreen = ({userNumber,gameIsOverHandler}) => {
  const initialNumber = generateRandomNumber(1,100,userNumber);
  const [currentGuess,setCurrentGuess ] = useState(initialNumber);
  useEffect(()=>{
    if(currentGuess === userNumber){
      gameIsOverHandler()
    }
  },[currentGuess,userNumber])
  function nextGuessHandler(direction){ // direction=> lower , higher
    if((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)){
      Alert.alert("Don't lie","you know that this is wrong",[
        {text:"Sorry!",style:'cancel'}
      ])
      return;
    }
    if(direction === 'lower'){
      maxBoundary = currentGuess;
    }else{
      minBoundary = currentGuess + 1;
    }
    const newRandom=  generateRandomNumber(minBoundary,maxBoundary,currentGuess);
    setCurrentGuess(newRandom)
  }

  return (
    <View style={styles.screen}>
      <Title title={"Opponent's Guess"}/>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstrcutionText>Higher or Lower</InstrcutionText>
        {/* + - */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <PrimaryButton onClick={()=> nextGuessHandler("lower")}>-</PrimaryButton>
          </View>
          <View style={styles.buttons}>
            <PrimaryButton onClick={()=> nextGuessHandler("higher")}>
            +
            </PrimaryButton>
          </View>
        </View>
      </Card>

    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:24
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'#ddb52f',
    textAlign:'center',
    borderWidth:2,
    borderColor:'#ddb52f',
    padding:12
  },
  buttonsContainer:{
    flexDirection:'row',
    marginTop:10
  },  
  buttons:{
    flex:1
  }
})