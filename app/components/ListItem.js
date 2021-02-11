import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'

import AddText from '../components/AppText'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}>

      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}>

        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailesContainer}>
            <AddText style={styles.title}>{title}</AddText>
            {subTitle && <AddText style={styles.subTitle}>{subTitle}</AddText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  detailesContainer: {
    marginLeft: 10,
    justifyContent: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,

  },
  subTitle: {
    color: colors.medium
  },
  title: {
    fontWeight: "500"
  }
})
