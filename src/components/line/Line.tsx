import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Line = () => {
  return (
    <View style={styles.line}>
    </View>
  )
}

export default Line

const styles = StyleSheet.create({
  line:{
    backgroundColor:'black',
    flex:1,
    height:1
  }
})