import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyle from '../../styles/GlobalStyle'
import SearchHome from '../search/SearchHome'

const HeaderSearch: React.FC = () => {
  const CartAndAccount = () => {
    return(
      <View style={[GlobalStyle.viewRow,{margin:20}]}>
        <TouchableOpacity style={styles.marginRight16}>
          <Image style={GlobalStyle.icon24} source={require('../../resources/icons/bag.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={GlobalStyle.icon24} source={require('../../resources/icons/user.png')}/>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={[GlobalStyle.viewRow,styles.headerTop]}>
        <Image source={require('../../resources/icons/menu.png')}/>
        <Text style={styles.txtApp}>Teach Heim</Text>
        <CartAndAccount/>
      </View>
      <View style={[GlobalStyle.viewRow,styles.headerBot]}>
        <SearchHome/>
      </View>
    </View>
  )
}

export default HeaderSearch

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
  },
  marginRight16:{
    marginRight:16
  }
})