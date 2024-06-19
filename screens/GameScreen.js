import { Alert, FlatList, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import Title from "../components/Title"
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstrcutionText from "../components/instrcutionText";
import GuessNumberItem from "../components/GuessNumberItem";

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
  const [guessRounds,setGuessRounds] = useState([initialNumber]);
  const {width,height} = useWindowDimensions();
  useEffect(()=>{
    minBoundary = 1;
    maxBoundary  = 100;
  },[])
  const guessRoundsLength = guessRounds?.length;

  useEffect(()=>{
    if(currentGuess === userNumber){
      gameIsOverHandler(guessRoundsLength)
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
    setCurrentGuess(newRandom);
    setGuessRounds(prev=> [...prev, newRandom]);
  }
  let content = (
    <>
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
    </>
  )
  if(width > 500){
    content = (
      <>
        <InstrcutionText>Higher or Lower</InstrcutionText>
        <View style={styles.buttonsContainerWide}>
        <View style={styles.buttons}>
            <PrimaryButton onClick={()=> nextGuessHandler("lower")}>-</PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttons}>
            <PrimaryButton onClick={()=> nextGuessHandler("higher")}>
            +
            </PrimaryButton>
          </View>
        </View>

      </>
    )
  }
  return (
    <View style={styles.screen}>
      <Title title={"Opponent's Guess"}/>
      {content}
      <View style={styles.listContainer}>
        <FlatList data={guessRounds} renderItem={(itemData)=>{
          return (
              <GuessNumberItem key={`${itemData?.item}:${itemData?.index}`} roundNumber={guessRoundsLength - itemData?.index} guess={itemData?.item}/>
          )
        }} keyExtractor={(item)=> item}/>
        
      </View>
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
  },
  listContainer:{
    flex:1,
    padding:16,
  },
  buttonsContainerWide:{
    flexDirection:'row',
    alignItems:'center'
  }
})