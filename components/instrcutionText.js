import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors'

const InstrcutionText = ({children}) => {
  return (
    <Text style={styles.inputText}>{children}</Text>
  )
}

export default InstrcutionText

const styles = StyleSheet.create({
  inputText:{
    color:Colors.accent500,
    fontSize:25,
    textAlign:"center"
  }
})