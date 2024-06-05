import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.ctn}>
      <Image style={{width:50,height:50}} source={require('../resources/images/logo.png')}/>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => {}}
      />
    </DrawerContentScrollView>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
  ctn:{
    paddingHorizontal:24,
    paddingVertical:16
  }
})