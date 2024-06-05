import { FlatList, Image, ScrollView, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import globalStyle from '../styles/globalStyle'
import AppButton from '../components/AppButton'
import colors from '../styles/colors'
import Line from '../components/line/Line'
import { HomeScreenProps } from '../navigation/types'
import { categoryApi } from '../APIs/categoryAPI'

interface CateProps{
  name:string,
  image:string
}

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [currentCate, setCurrentCate] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [cates,setCates] = useState<CateProps[]>([])
  const breadCrumb = ['Product']
  const pages = [1, 2, 3, 4]
  const listFilter = ['Màu đen', 'Silver', '12 GB', 'Apple', 'Intel Core i9']
  const listProduct = [
    {
      name: 'MacBookPro M1',
      price: 2869000,
      currentPrice: 2689000,
      discountAmount: 10,
      rate: 4.9
    },
    {
      name: 'MacBookPro M1',
      price: 2869000,
      currentPrice: 2689000,
      discountAmount: 10,
      rate: 4.9
    },
    {
      name: 'MacBookPro M1',
      price: 2869000,
      currentPrice: 2689000,
      discountAmount: 10,
      rate: 4.9
    },
    {
      name: 'MacBookPro M1',
      price: 2869000,
      currentPrice: 2689000,
      discountAmount: 10,
      rate: 4.9
    },
    {
      name: 'MacBookPro M1',
      price: 2869000,
      currentPrice: 2689000,
      discountAmount: 10,
      rate: 4.9
    },
    {
      name: 'MacBookPro M1',
      price: 2869000,
      currentPrice: 2689000,
      discountAmount: 10,
      rate: 4.9
    },
    {
      name: 'MacBookPro M1',
      price: 2869000,
      currentPrice: 2689000,
      discountAmount: 10,
      rate: 4.9
    },
    {
      name: 'MacBookPro M1',
      price: 2869000,
      currentPrice: 2689000,
      discountAmount: 10,
      rate: 4.9
    },
  ]

  useEffect(() => {
    (async()=> {
      const cateData = await categoryApi.getCategory()
      setCates(cateData)
    })()
  }, []);

  const renderCate = () => {
    return (
      <View style={styles.ctnCate}>
        <Image style={styles.imgCate} source={require('../resources/images/lap.png')} />
        <Text style={styles.txtCate}>Laptop</Text>
      </View>
    )
  }
  interface Product {
    name: string,
    price: number,
    discountAmount: number,
    rate: number
  }
  const renderPro = ({ item }: { item: Product }) => {
    return (
      <View style={styles.ctnItemPro}>
        <Image style={styles.imgPro} source={require('../resources/images/lap.png')} />
        <Line backgroundColor='black' />
        <Text style={styles.txtCate}>{item.name}</Text>
        <View style={{ height: 27, marginTop: 8 }}>
          <Text style={styles.txtPrice}>{item.price}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.txtCurPrice}>{item.price}</Text>
            <Image style={globalStyle.icon16} source={require('../resources/icons/rate.png')} />
            <Text style={styles.txtRate}>{item.rate}</Text>
          </View>
        </View>
        <Text style={styles.txtDiscountAmount}>{'-' + item.discountAmount + '%'}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={globalStyle.container}>
      <Header
        modifier={styles.ctnHeader}
        showDrawer={() => navigation.openDrawer()}
        isLogged={false}
      />
      <View style={styles.ctnBreadCrummb}>
        <Text style={styles.txtBreadCrumbF}>Home</Text>
        {breadCrumb.map((item, index) => {
          return (
            <View key={index} style={globalStyle.viewRow}>
              <Image style={globalStyle.icon16} source={require('../resources/icons/arrow_r_breadCrumb.png')} />
              <Text style={index == breadCrumb.length - 1 ? styles.txtBreadCrumbT : styles.txtBreadCrumbF}>item</Text>
            </View>
          )
        })}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexDirection: 'row', marginTop: 16 }}>
        {
          cates.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.ctnCate} onPress={() => setCurrentCate(index)}>
                <Image style={styles.imgCate} source={{uri:item.image}} />
                <Text style={styles.txtCate}>{item.name}</Text>
                <Line backgroundColor={index == currentCate ? colors.primary : colors.backGround} />
              </TouchableOpacity>
            )
          }
          )
        }
      </ScrollView>

      <ScrollView
        style={styles.ctnListFilter}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {
          listFilter.map((item, index) => {
            return (
              <View key={index} style={styles.ctnFilterItem}>
                <Text style={styles.txtFilterItem}>{item}</Text>
                <TouchableOpacity>
                  <Image style={globalStyle.icon16} source={require('../resources/icons/remove_filter.png')} />
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>

      <View style={{ flexDirection: 'row', marginHorizontal: 16, marginTop: 24 }}>
        <TouchableOpacity style={styles.ctnFilterBtn} onPress={()=>navigation.navigate('FilterScreen')
        }>
          <Text>Filter</Text>
        </TouchableOpacity>

        <View style={styles.ctnFilterBtn}>
          <Text>Sort by</Text>
        </View>
      </View>

      <FlatList
        style={styles.ctnProductList}
        data={listProduct}
        renderItem={renderPro}
        numColumns={2}
        scrollEnabled={false}
      />

      <Image style={{
        flex: 1,
        height: 210,
        marginHorizontal: 24,
        resizeMode: 'contain'
      }} source={{ uri: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/01/banner/chuyentrang-appleDT-390x210.png' }} />
      <Image style={{
        flex: 1,
        height: 210,
        marginHorizontal: 24,
        resizeMode: 'contain'
      }} source={{ uri: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/01/banner/chuyentrang-appleDT-390x210.png' }} />

      <FlatList
        style={styles.ctnProductList}
        data={listProduct}
        renderItem={renderPro}
        numColumns={2}
        scrollEnabled={false}
      />

      <View style={[globalStyle.viewRow, { alignSelf: 'center' }]}>
        {
          pages.map((item, index) => {
            return (
              <Text key={index} style={{
                width: 45, height: 45, fontSize: 18,
                padding: 11,
                color: currentPage != item ? 'black' : colors.primary
              }}>{item}</Text>
            )
          })
        }
      </View>

      <View style={{ marginHorizontal: 24 }}>
        <View style={[globalStyle.viewRow, { marginBottom: 16 }]}>
          <Image style={{ width: 30, height: 30, marginRight: 16 }} source={require('../resources/images/lap.png')} />
          <Text style={{ alignSelf: 'center', flex: 1, fontSize: 16, color: 'black', fontWeight: '500' }}>Công nghệ đỉnh cao</Text>
        </View>
        <View style={[globalStyle.viewRow, { marginBottom: 16 }]}>
          <Image style={{ width: 30, height: 30, marginRight: 16 }} source={require('../resources/images/lap.png')} />
          <Text style={{ alignSelf: 'center', flex: 1, fontSize: 16, color: 'black', fontWeight: '500' }}>Đảm bảo an toàn</Text>
        </View>
        <View style={[globalStyle.viewRow, { marginBottom: 16 }]}>
          <Image style={{ width: 30, height: 30, marginRight: 16 }} source={require('../resources/images/lap.png')} />
          <Text style={{ alignSelf: 'center', flex: 1, fontSize: 16, color: 'black', fontWeight: '500' }}>Miễn phí ship</Text>
        </View>
        <View style={[globalStyle.viewRow, { marginBottom: 16 }]}>
          <Image style={{ width: 30, height: 30, marginRight: 16 }} source={require('../resources/images/lap.png')} />
          <Text style={{ alignSelf: 'center', flex: 1, fontSize: 16, color: 'black', fontWeight: '500' }}>Hỗ trợ 24/7</Text>
        </View>

      </View>

      <Image style={{
        width: '100%',
        height: 364, backgroundColor: 'red'
      }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pushnoti-55901.appspot.com/o/main%20footer.png?alt=media&token=646428f8-44af-40e1-8c68-5496d1b0196e' }} />
      <Image style={{
        width: '100%',
        height: 40, backgroundColor: 'red'
      }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pushnoti-55901.appspot.com/o/partners%20%26%20social%20media.png?alt=media&token=b7972ba9-2b59-4ad2-a579-3f303ed36a41' }} />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  ctnHeader: {
    marginHorizontal: 24
  },
  ctnCate: {
    height: 100,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginLeft: 16, elevation: 5,
    justifyContent: 'space-between',
    marginVertical: 8
  },
  ctnBreadCrummb: {
    flexDirection: 'row',
    marginHorizontal: 24,
    height: 16.5,
    alignItems: 'center',
    marginTop: 16
  },
  ctnListFilter: {
    flexDirection: 'row',
    height: 40,
    marginTop: 24,
  },
  ctnFilterItem: {
    height: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctnProductList: {
    marginHorizontal: 16,
    marginTop: 26
  },
  ctnFilterBtn: {
    flex: 1, 
    height: 40, 
    elevation: 5, 
    backgroundColor: 'white', 
    padding: 8, 
    marginHorizontal: 8,
    borderRadius:8
  },
  ctnItemPro: {
    height: 196,
    backgroundColor: 'white', elevation: 3,
    borderRadius: 8,
    margin: 8,
    padding: 8,
    flex: 1
  },
  imgPro: {
    height: 104,
    width: '100%',
    resizeMode: 'contain'
  },
  imgCate: {
    width: 66,
    height: 65,
    resizeMode:'center'
  },
  txtFilterItem: {
    fontSize: 12,
    fontWeight: '300',
    color: 'black',
    marginRight: 8
  },
  txtCate: {
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
    fontWeight: '300'
  },
  txtBreadCrumbF: {
    fontSize: 12,
    color: '#717171'
  },
  txtBreadCrumbT: {
    fontSize: 12,
    color: colors.primary
  },
  txtDiscountAmount: {
    color: colors.secondary,
    backgroundColor: colors.secondary200,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignSelf: 'center',
    position: 'absolute',
    left: 0,
    top: 4
  },
  txtPrice: {
    fontSize: 10,
    textDecorationLine: 'line-through'
  },
  txtCurPrice: {
    fontSize: 12,
    color: 'black',
    fontWeight: '300',
    flex: 1
  },
  txtRate: {
    color: colors.primary500,
    fontSize: 14,
    fontWeight: '500'
  }
})