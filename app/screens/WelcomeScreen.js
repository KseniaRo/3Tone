import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import AppButton from '../components/AppButton'
import colors from '../config/colors';

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      // blurRadius={2}
      style={styles.background}
      source={require('../assets/city-night.png')} >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/note2.png')}
          style={styles.logo} />
        <Text style={styles.name}>3Tone</Text>
        <Text style={styles.logoText}>From Musicians for Musicians</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")} />
      </View>


    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonsContainer: {
    padding: 20,
    width: "100%"
  },
  logo: {
    width: 125,
    height: 120,
    // opacity: 0.71,
  },
  logoContainer: {
    position: "absolute",
    top: 70,

    alignItems: "center",

  },
  logoText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "600",
    paddingVertical: 20,
    fontFamily: "Arial",


  },
  name: {
    fontSize: 50,
    color: colors.white,
    fontWeight: "800",
    paddingVertical: 20,
    fontFamily: "Arial",
    paddingTop: 10


  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#3f37c9"
  },

})

