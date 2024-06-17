import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}  maxLength={2} keyboardType='number-pad'/>
      <View style={styles.buttons}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer:{
    marginTop:100,
    padding:16,
    backgroundColor:"#4e0329",
    marginHorizontal:24,
    borderRadius:8,
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.25
  },
  numberInput:{
    height:50,
    width:50,
    marginHorizontal:'auto',
    fontSize:32,
    borderBottomColor:'#ddb52f',
    borderBottomWidth:2,
    color:'#ddb52f',
    marginVertical:8,
    fontWeight:'bold',
    textAlign:'center'
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:3
  },
  buttonContainer:{
    flex:1
  }
})