import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'

export default function Screen({ children, style }) {
  return (
    //check if it will break in te future, if yes, take away view component
    <View style={[styles.screen, style]}>
      <SafeAreaView style={[styles.screen, style]}>
        {children}

      </SafeAreaView>
    </View>

  )
}

const styles = StyleSheet.create({
  screen: {

    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
})
