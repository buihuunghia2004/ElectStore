import { StyleSheet } from 'react-native'
import colors from './colors'

export default StyleSheet.create({
  viewRow:{
    flexDirection:'row'
  },
  viewRowFull:{
    flexDirection:'row',
    flex:1,backgroundColor:'blue'
  },
  icon24:{
    width:24,
    height:24
  },
  icon16:{
    width:16,
    height:16
  },
  viewContainer24:{
    flex:1,
    padding:24
  },
  mgH24:{
    marginHorizontal:24
  },
  justBettwen:{
    justifyContent:'space-between'
  },
  justAround:{
    justifyContent:'space-around'
  },
  container:{
    flex:1,
    backgroundColor:colors.backGround
  },
  line:{
    height:1,
    width:'100%'
  }
})
