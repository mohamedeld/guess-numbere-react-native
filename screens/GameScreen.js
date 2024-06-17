import { StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"

const GameScreen = ({userNumber}) => {
  return (
    <View style={styles.screen}>
      <Title title={"Opponent's Guess"}/>
      {/* Guess */}
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
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
  }
})