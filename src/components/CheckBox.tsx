import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CheckBoxProps {
  isCheck: boolean,
  onPress?: () => void 
}

const CheckBox: React.FC<CheckBoxProps> = ({ isCheck, onPress }) => {
  return (
    <>
      {
        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.container}
            source={
              isCheck ?
                require('../resources/icons/check_box.png')
                :
                require('../resources/icons/un_check_box.png')
            } />
        </TouchableOpacity>
      }
    </>
  )
}

export default CheckBox

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20
  }
})