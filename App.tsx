import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderHome from './src/components/header/HeaderHome'
import HeaderSearch from './src/components/header/Header'
import Main from './src/Main'
import { NavigationContainer } from '@react-navigation/native'
import LoginAndRegister from './src/features/authen/LoginAndRegister'
import ProductsScreen from './src/screens/ProductsScreen'
import FilterScreen from './src/screens/FilterScreen'
import Home from './src/navigation/Home'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import Cart from './src/features/cart/Cart'
import Products from './src/features/products/Products'

const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
        <View style={styles.container}>
          <Products/>
        </View>
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
