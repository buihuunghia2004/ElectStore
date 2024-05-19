import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderHome from '../components/header/HeaderHome'
import GlobalStyle from '../styles/GlobalStyle'
import Line from '../components/line/Line'
import ItemProduct from '../components/item/ItemProduct'

//component
interface RateProps {
  rate: number
}

const Home: React.FC = () => {
  interface ProductCategoryProps {
    title: string;
    data: any;
  }
  const ProductCategory: React.FC<ProductCategoryProps> = ({ title, data }) => {
    return (
      <View style={{ }}>
        <View style={[GlobalStyle.viewRow,{alignItems:'center'}]}>
          <Text style={{ fontSize: 24, color: 'black', flex:1 }}>{title}</Text>
          <Text>{'View all >'}</Text>
        </View>
        <View style={{backgroundColor:'black',width:'100%',height:1}}>
        </View>
      </View>
    )
  }
  const itemProduct = ({item}) => {
    return(
      <ItemProduct data={{}} onPress={()=>{}}/>
    )
  }
  return (
    <ScrollView>
      <HeaderHome />
      <Text style={styles.txtTitle}>Danh mục nổi bật</Text>

      {/* new product */}
      <ProductCategory title='Best Sellers' data='ok' />

      {/* <FlatList style={{alignContent:'center'}}
        scrollEnabled={false}
        data={[1,2,3,4,5,6]}
        renderItem={itemProduct}
        numColumns={2}
      /> */}
      <ProductCategory title='New Products' data='ok' />
      <FlatList style={{alignContent:'center'}}
        data={[1,2,3,4,5,6]}
        renderItem={itemProduct}
        numColumns={2}
        scrollEnabled={false}
      />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  txtTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700'
  },
  imgDM: {
    width: 80,
    height: 80,
    margin: 10
  },
  txtViewAll:{
    color:'black'
  },
  containerItemProduct:{backgroundColor:'red',
    flex:1,
    width:148,
    height:186,
    padding:8,
    margin:10,
    alignContent:'center',
    alignItems:'center'
  },
  imgItemProduct:{
    width:132,
    height:104
  },

})