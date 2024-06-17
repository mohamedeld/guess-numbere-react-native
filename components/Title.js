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
    fontSize:24,
    fontWeight:'bold',
    color:Colors.accent500,
    textAlign:'center',
    borderWidth:2,
    borderColor:Colors.accent500,
    padding:12
  }
})