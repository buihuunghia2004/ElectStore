import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import GlobalStyle from '../../styles/GlobalStyle'
import SearchHome from '../search/SearchHome'

export const LoginComponent: React.FC = () => {
  return(
    <View style={GlobalStyle.viewRow}>
      <Image style={GlobalStyle.icon24} source={require('../../resources/icons/login.png')}/>
      <Text style={styles.txtLogin}>Login</Text>
    </View>
  )
}

const HeaderHome: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[GlobalStyle.viewRow,styles.headerTop]}>
        <Image source={require('../../resources/icons/menu.png')}/>
        <Text style={styles.txtApp}>Teach Heim</Text>
        <LoginComponent/>
      </View>
      <View style={[GlobalStyle.viewRow,styles.headerBot]}>
        <Image style={GlobalStyle.icon24} source={require('../../resources/icons/bag.png')}/>
        <SearchHome/>
      </View>
    </View>
  )
}

export default HeaderHome

const styles = StyleSheet.create({
  container:{
  },
  headerTop:{
    justifyContent:'space-between',
    alignItems:'center'
  },
  headerBot:{
    alignItems:'center',
    justifyContent:'space-between'
  },
  txtApp:{
    fontSize:24,
    color:'#0951BE'
  },
  txtLogin:{
    fontSize:14,
    color:'#0C68F4',
    marginLeft:8
  }
})