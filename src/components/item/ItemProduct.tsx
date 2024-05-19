import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import GlobalStyle from '../../styles/GlobalStyle'

interface ItemProductProps{
  data: {},
  onPress: () => void
}

const ItemProduct:React.FC<ItemProductProps> = ({data, onPress}) => {
  
  const Rate =() =>{
    return(
      <View style={GlobalStyle.viewRow}>
        <Image style={GlobalStyle.icon16} source={require('../../resources/icons/start.png')}/>
        <Text>{'5'}</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri:'https://cdn.tgdd.vn/Products/Images/44/322612/macbook-air-13-inch-m3-2024-050324-020626-600x600.jpg'}}/>
      <Text>{'Macbook Pro 2023'}</Text>
      <Text style={styles.txtOldPrice}>{'13000000đ'}</Text>
      <View style={GlobalStyle.viewRow}>
        <Text style={styles.price}>12000000đ</Text>
        <Rate/>
      </View>
    </View>
  )
}

export default ItemProduct

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:8,
    margin:8,
    backgroundColor:'white'
  },
  img:{
    width:130,
    height:104,
    alignSelf:'center'
  },
  price:{
    flex:1
  },
  txtOldPrice:{
    textDecorationLine:'line-through'
  }
})