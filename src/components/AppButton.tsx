import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle, } from 'react-native'
import React, { ReactElement } from 'react'
import colors from '../styles/colors'

interface Props {
  text:string,
  textColor: string,
  color?: string,
  leftIcon?:ReactElement,
  rightIcon?:ReactElement,
  onPress?: () => void,
  style?: {},
  outLine?:Boolean
}

const AppButton = (props: Props) => {
  const {text, onPress, textColor, color,leftIcon, rightIcon, style, outLine} = props

  
  const ctnStyle = {
    ...styles.ctn,
    ...style,
    borderWidth: outLine ? 1 : 0,
    borderColor:colors.primary,
    backgroundColor:color
  }
  const txtStyle = {
    ...styles.txt,
    color: textColor
  }
  return (
    <TouchableOpacity style={ctnStyle} onPress={onPress}>
      {leftIcon}
      <Text style={txtStyle}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    height:40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 8,
  },
  txt: {
    marginHorizontal: 8,
    textAlign: 'center',
    fontSize: 14
  }
})