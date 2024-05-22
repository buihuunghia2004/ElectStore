import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import GlobalStyle from '../../styles/globalStyle'
import InputAuth from '../../components/editext/InputAuth'
import CheckBox from '../../components/CheckBox'
import Line from '../../components/line/Line'
import colors from '../../styles/colors'
import { authenAPI } from './authenAPI'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from './userSlice'
import { AppDispatch, RootState } from '../../app/store'

const LOGIN_STATE = 1
const REGISTER_STATE = 2

const LoginAndRegister = () => {
  const [isCheck, setIsCheck] = useState(false)
  const [stateForm, setStateForm] = useState(LOGIN_STATE)
  const [name, setName] = useState({ text: '', isErr: false })
  const [email, setEmail] = useState({ text: '', isErr: false })
  const [password, setPassword] = useState({ text: '', isErr: false })
  const dispatch = useDispatch<AppDispatch>()
  const loadding = useSelector((state: RootState) => state.user.loading)

  const login = async () => {
    setEmail({ ...email, isErr: false })
    setPassword({ ...password, isErr: false })
    dispatch(loginThunk({email:email.text,password:password.text}))
    
    console.log(loadding);
  }

  

  return (
    <View style={[GlobalStyle.viewContainer24, styles.container]}>
      <Image style={[GlobalStyle.icon24, styles.imgBackBtn]} source={require('./../../resources/icons/arrow_left.png')} />
      <Text style={styles.txtTechHeim}>Tech Heim</Text>

      <View style={[GlobalStyle.viewRow, GlobalStyle.justAround, styles.marginTop24]}>
        <TouchableOpacity onPress={() => setStateForm(LOGIN_STATE)}>
          <Text style={stateForm == LOGIN_STATE && styles.txtIsState}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setStateForm(REGISTER_STATE)}>
          <Text style={stateForm == REGISTER_STATE && styles.txtIsState} >Create account</Text>
        </TouchableOpacity>
      </View>

      <View style={[GlobalStyle.viewRow, { height: 1, marginTop: 10 }]}>
        <View style={stateForm == LOGIN_STATE ? styles.focusedLine : styles.unFocusedLine}></View>
        <View style={stateForm == REGISTER_STATE ? styles.focusedLine : styles.unFocusedLine}></View>
      </View>

      <Text style={styles.txtTitle}>{stateForm == LOGIN_STATE ? 'Log in to Teach Heim' : 'Create your account'}</Text>

      {
        stateForm == LOGIN_STATE ?
          <View>
            <InputAuth
              label='E-mail'
              style={{ marginVertical: 20 }}
              onChangeText={(text) => setEmail({ ...email, text })}
              isError={email.isErr} />

            <InputAuth
              label='Password'
              onChangeText={(text) => setPassword({ ...password, text })}
              isPassword={true}
              isError={password.isErr} />
          </View>
          :
          <View>
            <InputAuth label='Full Name' onChangeText={(text) => setName({ ...name, text })} isError={name.isErr} />
            <InputAuth
              label='E-mail'
              style={{ marginVertical: 20 }}
              onChangeText={(text) => setEmail({ ...email, text })}
              isError={email.isErr} />

            <InputAuth
              label='Password'
              onChangeText={(text) => setPassword({ ...password, text })}
              isPassword={true}
              isError={password.isErr} />
          </View>
      }

      {
        stateForm == REGISTER_STATE ? null : <Text style={styles.txtForgotPass} >Forgot Password</Text>
      }

      <View style={[GlobalStyle.viewRow, { marginTop: 10 }]}>
        <CheckBox isCheck={isCheck} onPress={() => { setIsCheck(!isCheck) }} />
        <Text style={styles.marginLeft5}>{stateForm == LOGIN_STATE ? 'Keep me logged in' : 'I agree to all'}</Text>
      </View>

      <TouchableOpacity style={styles.btnLogin} onPress={() => login()}
      >
        <Text style={styles.txtLogin}>{stateForm == LOGIN_STATE ? 'Log in' : 'Create Account'}</Text>
      </TouchableOpacity>

      <View style={[GlobalStyle.viewRow, { alignItems: 'center', marginTop: 30 }]}>
        <Line />
        <Text>{stateForm == REGISTER_STATE ? 'Or Sign Up with' : 'Or Log In with'}</Text>
        <Line />
      </View>

      <View style={[GlobalStyle.viewRow, GlobalStyle.justAround, { marginTop: 30 }]}>
        <TouchableOpacity style={styles.btnLoginWith}>
          <Text style={styles.txtLoginWith}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLoginWith}>
          <Text style={styles.txtLoginWith}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginAndRegister

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24
  },
  imgBackBtn: {
    marginTop: 16
  },
  txtTechHeim: {
    color: '#0951BE',
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 16
  },
  txtTitle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    marginTop: 40,
    marginBottom: 20,
    fontWeight: '500'
  },
  txtLogin: {
    color: 'white'
  },
  btnLogin: {
    width: '100%',
    height: 40,
    padding: 8,
    backgroundColor: colors.primary,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center'
  },
  btnLoginWith: {
    width: 148,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    borderColor: colors.primary
  },
  txtLoginWith: {
    color: colors.primary
  },
  txtForgotPass: {
    color: colors.primary,
    alignSelf: 'flex-end',
    marginTop: 25
  },
  txtIsState: {
    color: colors.primary
  },
  focusedLine: {
    flex: 1,
    backgroundColor: colors.primary
  },
  unFocusedLine: {
    flex: 1,
    backgroundColor: "#717171"
  },
  marginTop10: {
    marginTop: 10
  },
  marginTop24: {
    marginTop: 24
  },
  marginLeft5: {
    marginLeft: 5
  }
})