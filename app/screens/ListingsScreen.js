import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import routes from '../navigation/routes'
import colors from '../config/colors'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'

import useApi from '../hooks/useApi'
import listingApi from '../api/listings'
import ActivityIndicator from '../components/ActivityIndicator'



export default function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(listingApi.getListings)
  //passing empty arr====will execute once
  useEffect(() => {
    loadListings(1, 2, 3)
  }, [])

  return (
    <Screen style={styles.screen}>
      {error && <><AppText> Couldn't retrive the listings.</AppText>
        <AppButton title="Retry" onPress={loadListings} /></>}
      {/* <ActivityIndicator visible={true} /> */}
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  },

})
