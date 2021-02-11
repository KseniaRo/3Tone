import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Image, } from 'react-native'
import authApi from '../api/auth'

import * as Yup from 'yup'

import {
  AppForm, AppFormField,
  SubmitButton, ErrorMessage
} from '../components/forms'
import Screen from '../components/Screen'
import jwtDecode from "jwt-decode"
import AuthContext from '../auth/context'



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),

})
export default function LoginScreen(props) {
  // const auth = useAuth();
  const authContext = useContext(AuthContext)
  const [loginFailed, setloginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password)
    if (!result.ok) return setloginFailed(true);
    setloginFailed(false);
    const user = jwtDecode(result.data)
    authContext.setUser(user);
  }


  //Formik keep track of our State
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo} source={require('../assets/note2.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textcontentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          secureTextEntry
          placeholder="Password"
          textcontentType="password"
        />

        <SubmitButton title="Login" />
      </AppForm>

    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 85,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20

  }
})
