import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyle from '../../styles/GlobalStyle'

const SearchHome = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{flex:1}}>What can we help you to find ?</Text>
      <Image style={GlobalStyle.icon24} source={require('../../resources/icons/search_header.png')}/>
    </TouchableOpacity>
  )
}

export default SearchHome

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:40,
    borderRadius:5,
    backgroundColor:'#EDEDED',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:16,
    marginHorizontal:12
  }
})