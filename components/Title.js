import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors'

const Title = ({title}) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

export default Title
const styles = StyleSheet.create({
  title:{
    fontFamily:'open-sans',
    fontSize:24,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    borderWidth:2,
    borderColor:Colors.accent500,
    padding:12
  }
})