import { Button, FlatList, Image, StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import GlobalStyle from '../styles/globalStyle'
import HeaderHome from '../components/header/HeaderHome'
import HeaderSearch from '../components/header/Header'

const ProductsScreen = () => {
  const devices = [
    {
      name:'Mobile',
      require:require('../resources/icons/mobile.png')
    },
    {
      name:'Laptop',
      require:require('../resources/icons/monitor.png')
    },
    {
      name:'Tablet',
      require:require('../resources/icons/Tablet.png')
    },
    {
      name:'Auio',
      require:require('../resources/icons/headphones.png')
    }
  ]

  const itemFilter = () => {
    return (
      <View style={styles.containerItemFilter}>
        <Text>Filter1</Text>
        <Image style={GlobalStyle.icon16} source={require('../resources/icons/close-square.png')}/>
      </View>
    )
  }

  const PageControll = () => {
    const a = [1,2,3,4]
    return(
      <View style={GlobalStyle.viewRow}>
        {
          a.map((item) => {
            return (
              <Text style={{padding:8,marginHorizontal:8}}>{item}</Text>
            )
          })
        }
        <Text>{'... ->'}</Text>
      </View>
    )
  }
  return (
    <ScrollView style={GlobalStyle.container}>
      <HeaderSearch />

      <ScrollView style={GlobalStyle.viewRow} horizontal={true}> 
        {
          devices.map((item)=>{
            return(
              <View style={{marginHorizontal:30,marginVertical:10,padding:8,alignItems:'center'}}>
                <Image style={styles.imgDevice} source={item.require}/>
                <Text>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView>

      <View>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={itemFilter}
          horizontal={true}
        />
      </View>

      <View style={GlobalStyle.viewRow}>
          <Button title='Filter'/>
          <Button title='Sort'/>
      </View>

      <PageControll/>
    </ScrollView>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  containerItemFilter:{
    padding:8,
    marginHorizontal:16,
    borderRadius:8,
    borderWidth:1,
    borderColor:'black',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  imgDevice:{
    width:35,
    height:35
  }
})