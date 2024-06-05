import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
interface Props{
  backgroundColor:string,
}
const Line = (props:Props) => {
  const {backgroundColor} = props
  const style = {
    ...styles.line,
    backgroundColor:backgroundColor,
  }
  return (
    <View style={style}>
    </View>
  )
}

export default Line

const styles = StyleSheet.create({
  line:{
    height:1
  }
})