import { FlatList, Image, ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../styles/globalStyle'
import Line from '../../components/line/Line'
import ItemProduct from '../../components/item/ItemProduct'
import Header from '../../components/header/Header'
import globalStyle from '../../styles/globalStyle'
import LinearGradient from 'react-native-linear-gradient'
import HeaderHome from '../../components/header/HeaderHome'
import { categoryApi } from '../../APIs/categoryAPI'
import {Category, Product,} from '../../types/ObjectType'
import { productApi } from '../../APIs/productAPI'
interface RateProps {
  rate: number
}
interface ProData {
  id: String,
  title: String
}
interface ProductCategoryProps {
  title: string;
  data: any;
}
const Home: React.FC = () => {
  //data
  const [categories,setCategories] = useState([])
  const [products,setProducts] = useState([])

  const fechCategories = async () => {    
    const result = await categoryApi.getCategory()
    setCategories(result.data)
  }
  const fetchProducts = async () => {
    const result = await productApi.getProducts()
    
    setProducts(result.data)
  }

  useEffect(() => {
    fechCategories()
    fetchProducts()
  }, []);

  const ViewAll = () => {
    return (
      <View>
        <View style={styles.ctnViewAll}>
          <Text style={styles.txtViewAll}>View all</Text>
          <Image style={globalStyle.icon24} source={require('../../resources/icons/arrow-circle-right.png')} />
        </View>
        <View style={styles.lineGray} />
      </View>

    )
  }
  const ProductCategory: React.FC<ProductCategoryProps> = ({ title, data }) => {
    return (
      <View style={{}}>
        <View style={[GlobalStyle.viewRow, { alignItems: 'center' }]}>
          <Text style={{ fontSize: 24, color: 'black', flex: 1 }}>{title}</Text>
          <Text>{'View all >'}</Text>
        </View>
        <View style={{ backgroundColor: 'black', width: '100%', height: 1 }}>
        </View>
      </View>
    )
  }
  const renderItemPro = ({ item, index }:{ item: Product, index: number }) => {
    return (
      <View style={index % 2 == 0 ? styles.ctnItemPro1 : styles.ctnItemPro2}>
        <Image resizeMode='contain' style={styles.imgProItem} source={{uri:item.image}} />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['white', '#101010', 'white']}
          style={{ width: '100%', height: 1, marginVertical: 8 }}>
        </LinearGradient>
        <Text numberOfLines={1} ellipsizeMode='tail'>{item.productName}</Text>
        <View style={{ height: 15, marginTop: 8 }}>
        </View>
      </View>
    )
  }

  return (
    <ScrollView>
      <Header modifier={styles.ctnHeader} />
      <FlatList style={styles.ctnCate}
        data={categories}
        renderItem={({item,index}:{item:Category,index:number}) => {          
          return (
            <View style={styles.ctnCateItem}>
              <Image style={styles.imgCateItem} source={{uri:item.image}} />
              <Text style={styles.txtCateItem}>{item.codeName}</Text>
            </View>
          )
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false} />

      <FlatList style={styles.flPro}
        data={products}
        renderItem={renderItemPro}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', flex: 1 }}
      />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  ctnHeader: {
    marginHorizontal: 24
  },
  ctnCate: {
    marginTop: 24
  },
  ctnCateItem: {
    width: 82,
    height: 100,
    padding: 8,
    marginHorizontal: 12,
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  ctnViewAll: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ctnItemPro1: {
    flex: 1,
    height: 186,
    padding: 8,
    backgroundColor: '#FFF',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
    marginRight: 8
  },
  ctnItemPro2: {
    flex: 1,
    height: 186,
    padding: 8,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
    marginLeft: 8
  },
  flPro: {
    marginHorizontal: 24,
    marginTop: 24
  },
  imgProItem: {
    width: '100%',
    height: 114
  },
  ctnProItemHeader: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24
  },
  imgCateItem: {
    width: 66,
    height: 65,
    
  },
  txtViewAll: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black'
  },
  txtProItemHeader: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black'
  },
  txtCateItem: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black'
  },
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
  containerItemProduct: {
    backgroundColor: 'red',
    flex: 1,
    width: 148,
    height: 186,
    padding: 8,
    margin: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
  lineGray: {
    backgroundColor: 'gray',
    height: 1,
    flex: 1
  }
})