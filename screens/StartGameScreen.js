import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import Colors from '../constants/colors';

const StartGameScreen = ({pickedUserNumber}) => {
  const [enteredNumber,setEnteredNumber] = useState('');
  const handleEnteredNumber =(enterText)=>{
    setEnteredNumber(enterText);
  }
  const resetEnterNumber = ()=>{
    setEnteredNumber('')
  }
  const confirmEnterNumber = ()=>{
    const chosenNumber = +enteredNumber
    if(isNaN(chosenNumber) ||  chosenNumber<= 0 || chosenNumber > 99){
      Alert.alert("Invalid number","number should be between 0 and 99",[{text:'Okay',style:'destructive',onPress:resetEnterNumber}])
      return;
    }
    pickedUserNumber(chosenNumber)
  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}  maxLength={2} keyboardType='number-pad' value={enteredNumber} onChangeText={handleEnteredNumber}/>
      <View style={styles.buttons}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onClick={resetEnterNumber}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onClick={confirmEnterNumber}>Confirm</PrimaryButton>
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
    backgroundColor:Colors.primary800,
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
    borderBottomColor:Colors.accent500,
    borderBottomWidth:2,
    color:Colors.accent500,
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