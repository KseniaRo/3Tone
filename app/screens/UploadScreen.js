import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import AppText from '../components/AppText'

export default function UploadScreen({ progress = 0, visivle = false }) {
  return (
    <Modal visible={visivle}>

      <View style={styles.container}>
        <AppText>{progress * 100}%</AppText>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,

  }
})
