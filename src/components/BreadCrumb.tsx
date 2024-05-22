import { StyleSheet, Text, View, Image, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import globalStyle from '../styles/globalStyle'
import colors from '../styles/colors'

interface BreadCrumbProps{
  data:String[],
  modifier?:StyleProp<ViewStyle>
}

const BreadCrumb: React.FC<BreadCrumbProps>= ({data,modifier}) => {
  return (
    <View style={[styles.container,modifier]}>
      {
        data.map((it, index) => {
          return (
            <View style={globalStyle.viewRow}>
              {
                index != 0 && <Image style={globalStyle.icon16} source={require('../resources/icons/arrow-right.png')} />
              }
              {
                index != data.length-1
                  ?<Text style={styles.txt}>{data[index]}</Text>
                  :<Text style={styles.txtCurrent}>{data[index]}</Text>
              }
            </View>
          )
        })
      }
    </View>
  )
}

export default BreadCrumb

const styles = StyleSheet.create({
  container: {
    ...globalStyle.viewRow,
    height: 15
  },
  txt: {
    fontSize: 12
  },
  txtCurrent:{
    fontSize:12,
    color:colors.primary
  }
})