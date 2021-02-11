import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

import colors from '../config/colors'

export default function ListingDetailsScreen({ route }) {
  const listing = route.params
  return (
    <View>
      <Image style={styles.image}
        source={listing.image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('/Users/karo/code/react-native/3tone/app/assets/larsen.png')}
            title="Larsen Gottschalk"
            subTitle="5 listings"

          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.secondary,
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40
  }
})
