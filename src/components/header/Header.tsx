import { StyleSheet, Text, View, Image, TouchableOpacity, StyleProp, ViewStyle, TextInput } from 'react-native'
import React, { useRef } from 'react'
import globalStyle from '../../styles/globalStyle'
import colors from '../../styles/colors'
interface Props {
  modifier?: StyleProp<ViewStyle>,
  isLogged?: Boolean,
  showDrawer: () => void,
  onCart?: () => void,
  onProfile?: () => void,
  onLogin?: () => void
}

const Header: React.FC<Props> = (props: Props) => {
  const { modifier, isLogged, showDrawer, onCart, onProfile, onLogin } = props
  const input = useRef<TextInput>(null)
  const onSearchClick = () => {
    input.current?.focus()
  }
  return (
    <View style={[styles.ctn, modifier]}>
      <View style={styles.ctnTop}>
        <TouchableOpacity onPress={showDrawer}>
          <Image style={globalStyle.icon24} source={require('../../resources/icons/menu.png')} />
        </TouchableOpacity>

        <Text style={styles.txtApp}>Teach Heim</Text>
        {isLogged
          ?
          <View style={globalStyle.viewRow}>
            <TouchableOpacity style={styles.marginRight16}>
              <Image style={globalStyle.icon24} source={require('../../resources/icons/bag.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={globalStyle.icon24} source={require('../../resources/icons/user.png')} />
            </TouchableOpacity>
          </View>
          :
          <View style={globalStyle.viewRow}>
            <TouchableOpacity style={styles.marginRight16}>
              <Image style={globalStyle.icon24} source={require('../../resources/icons/login.png')} />
            </TouchableOpacity>
            <Text style={styles.txtLogin}>Login</Text>
          </View>
        }
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput ref={input} style={styles.input} placeholder='What can we help you to find ?' />
        <TouchableOpacity onPress={onSearchClick} style={styles.imgSearch}>
          <Image style={[globalStyle.icon24]} source={require('../../resources/icons/search.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    height: 92,
    justifyContent: 'space-between',
  },
  ctnTop: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingVertical: 8
  },
  ctnBottom: {
    height: 40,
    width: '100%',
  },
  txtApp: {
    fontSize: 16,
    color: '#0951BE',
    textAlign: 'center',
    alignSelf: 'center'
  },
  txtLogin: {
    fontSize: 14,
    alignSelf: 'center',
    color: colors.primary
  },
  input: {
    height: 40,
    backgroundColor: '#EDEDED',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flex: 1,
    paddingHorizontal:16
  },
  marginRight16: {
    marginRight: 16,
  },
  imgSearch: {
    height: 40,
    backgroundColor: '#EDEDED',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 12
  }
})