import { StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'
import React from 'react'

interface InputAuthProps {
  label: string,
  style?: TextStyle | null,
  isPassword?: boolean,
  hideText?: boolean,
  isError: boolean,
  onChangeText: (text: string) => void
}

const InputAuth: React.FC<InputAuthProps> = ({ label, style, onChangeText, isError }) => {
  return (
    <TextInput placeholder={label} style={[styles.container, style || {}, isError && styles.isError]} onChangeText={onChangeText} >
      
    </TextInput>
  )
}

export default InputAuth

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10
  },
  isError: {
    borderColor: 'red'
  },
  notIsErorr: {

  }
})