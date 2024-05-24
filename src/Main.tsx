import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './features/home/Home';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent/>}
      screenOptions={{
        headerShown:false
      }}
      >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})