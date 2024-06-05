import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import FilterScreen from './src/screens/FilterScreen'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import Home from './src/screens/Home'
import AppButton from './src/components/AppButton'
import AppNav from './src/navigation/AppNav'


const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
        <AppNav/>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
