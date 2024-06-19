import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import Title from "../components/Title"
import Colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton"

const GameOverScreen = ({roundsNumber,userNumber,onStartNewGame}) => {
  const {width,height} = useWindowDimensions();
  let imageSize = 300;
  if(width < 380){
    imageSize=150;
  }
  if(height < 400){
    imageSize=80;
  }
  const imageStyle = {
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize / 2
  }
  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
      <Title title="Game Over"/>
      <View style={[styles.imageContainer,imageStyle]}>
        <Image style={styles.image} source={require("../assets/images/success.png")}/>
      </View>
      <View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text></Text>
        <PrimaryButton onClick={onStartNewGame}>Start new game</PrimaryButton>
      </View>
    </View>
    </ScrollView>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  rootContainer:{
    flex:1,
    padding:20,
    justifyContent:'center',
    alignItems:'center'
  },  
  imageContainer:{
    // width:300,
    // height:300,
    // borderRadius:150,
    overflow:'hidden',
    marginHorizontal:"auto",
    marginVertical:36
  },
  image:{
    width:'100%',
    height:"100%",
    borderRadius:150,
    borderWidth:3,
    borderColor:Colors.primary800
  },
  summaryText:{
    fontFamily:'open-sans',
    fontSize:22,
    textAlign:'center',
    marginBottom:24
  },
  highlightText:{
    fontFamily:'open-sans-bold',
    color:Colors.primary500
  }
})