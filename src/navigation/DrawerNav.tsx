import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import DrawerContent from '../components/DrawerContent';
import { RootStackParamList } from './types';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Home'
        }} />
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})