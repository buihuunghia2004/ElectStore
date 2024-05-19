import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <Image style={styles.a} source={require('../../resources/icons/start.png')}/>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    a:{
        
    }
})