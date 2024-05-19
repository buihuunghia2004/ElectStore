import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Test1 from './screens/Test1';
import Test2 from './screens/Test2';
import Home from './navigation/Home';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    // <View>
    //   <Text>Main</Text>
    // </View>
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent/>}
      screenOptions={{
        headerShown:false
      }}
      >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feed" component={Test2} />
      <Drawer.Screen name="Article" component={Test1} />
    </Drawer.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})