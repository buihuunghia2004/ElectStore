import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerNav from './DrawerNav'
import FilterScreen from '../screens/FilterScreen'
const Stack = createNativeStackNavigator()
const AppNav = () => {
  return (
    <Stack.Navigator initialRouteName='drawerNav'
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name='drawerNav' component={DrawerNav}/>
      <Stack.Screen name='FilterScreen' component={FilterScreen}/>
    </Stack.Navigator>
  )
}

export default AppNav

const styles = StyleSheet.create({})