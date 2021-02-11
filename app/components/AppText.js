import React from 'react'
import { Text, View } from 'react-native'
// import styles from './styles'
import defaultStyles from '../config/styles'

// My heading components:
export default function AppText({ children, style }) {
  return (

    <Text style={[defaultStyles.text, style]}>
      {children}
    </Text>

  )
}




// different platforms summarizing the  styles:
// Platform.select({
//   ios: {
//     fontSize: 20,
//     fontFamily: "Avenir"
//   },
//   android: {
//     fontFamily: "Roboto",
//     fontSize: 18
//   }
// })
// const styles = StyleSheet.create({
//   text: {
//     color: "tomato",
//     ...Platform.select({
//       ios: {
//         fontSize: 20,
//         fontFamily: "Avenir"
//       },
//       android: {
//         fontFamily: "Roboto",
//         fontSize: 18
//       }
//     })
//   }
// })




