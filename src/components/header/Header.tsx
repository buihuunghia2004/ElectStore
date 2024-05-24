import { StyleSheet, Text, View, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import globalStyle from '../../styles/globalStyle'
import SearchHome from '../search/SearchHome'
interface HeaderProps{
  modifier?:StyleProp<ViewStyle>
}

const Header: React.FC<HeaderProps> = ({modifier}) => {
  return (
    <View style={[styles.ctn,modifier]}>
      <View style={styles.ctnTop}>
        <Image style={globalStyle.icon24} source={require('../../resources/icons/menu.png')} />
        <Text style={styles.txtApp}>Teach Heim</Text>
        <View style={globalStyle.viewRow}>
          <TouchableOpacity style={styles.marginRight16}>
            <Image style={globalStyle.icon24} source={require('../../resources/icons/bag.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={globalStyle.icon24} source={require('../../resources/icons/user.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ctnBottom}>
        <SearchHome />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  ctn: {
    flex:1,
    height: 92,
    justifyContent: 'space-between',
  },
  ctnTop: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingVertical: 8
  },
  ctnBottom: {
    height: 40,
    width: '100%',
  },
  txtApp: {
    fontSize: 16,
    color: '#0951BE',
    textAlign:'center',
    alignSelf:'center'
  },
  marginRight16: {
    marginRight: 16
  }
})