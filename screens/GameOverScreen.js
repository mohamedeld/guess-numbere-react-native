import { Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import Colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton"

const GameOverScreen = ({roundsNumber,userNumber,onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title title="Game Over"/>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")}/>
      </View>
      <View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text></Text>
        <PrimaryButton onClick={onStartNewGame}>Start new game</PrimaryButton>
      </View>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    padding:20,
    justifyContent:'center',
    alignItems:'center'
  },  
  imageContainer:{
    width:300,
    height:300,
    borderRadius:150,
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