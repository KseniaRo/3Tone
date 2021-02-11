import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'

import AppText from '../components/AppText'
import colors from '../config/colors'

export default function Card({ title, subTitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>

      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.detailesContainer}>
          <AppText style={styles.title}> {title}</AppText>
          <AppText style={styles.subTitle}> {subTitle}</AppText>
        </View>


      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden"
  },
  detailesContainer: {
    paddingTop: 20
  },
  image: {
    width: "100%",
    height: 200
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold"
  },
  title: {
    marginBottom: 7
  },
})
