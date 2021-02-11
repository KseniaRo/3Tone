
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TextInput, Button, } from 'react-native'
import * as Permissions from 'expo-permissions'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import * as ImagePicker from 'expo-image-picker';
import Screen from './app/components/Screen'
import ImageInput from './app/components/ImageInput'
import ImageInputList from './app/components/ImageInputList'
import ListingEditScreen from './app/screens/ListingEditScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import AppNavigator from './app/navigation/AppNavigator'
import AuthContext from './app/auth/context'


import AppButton from './app/components/AppButton'




export default function App() {
  const [user, setUser] = useState()
  return (
    <AuthContext.Provider value={{ user, setUser }}>

      <NavigationContainer theme={navigationTheme}>
        {user ?
          <AppNavigator />
          :
          <AuthNavigator />
        }

      </NavigationContainer>
    </AuthContext.Provider>

  );
}

// const Tweets = ({ navigation }) => {

//   return (
//     <Screen>
//       <Text> Tweets</Text>
//       <Button
//         title="View Tweet"
//         onPress={() => navigation.navigate("TweetDetails", { id: "Brian" })}
//       />
//     </Screen>
//   )

// }
// const TweetDetails = ({ route }) => {
//   return (

//     <Screen>
//       <Text>Tweet Details {route.params.id}</Text>
//     </Screen>
//   )

// }
// const Account = () => {
//   return (

//     <Screen>
//       <Text>Account Details </Text>
//     </Screen>
//   )

// }

// const Stack = createStackNavigator()
// const StackNavigator = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: { backgroundColor: "royalblue" },
//       headerTintColor: "white"
//     }}>
//     <Stack.Screen
//       name="Tweets"
//       component={Tweets}
//       options={{
//         headerStyle: { backgroundColor: "tomato" },
//         headerTintColor: "white"
//       }}
//     />
//     <Stack.Screen name="TweetDetails"
//       component={TweetDetails}
//       options={({ route }) => ({ title: route.params.id })} />
//   </Stack.Navigator>
// )

// const Tab = createBottomTabNavigator()
// const TabNavigator = () => (
//   <Tab.Navigator
//     tabBarOptions={{
//       activeBackgroundColor: "tomato",
//       activeTintColor: "white",
//       inactiveBackgroundColor: "#eee",
//       inactiveTintColor: "black"
//     }}
//   >
//     <Tab.Screen
//       name="Feed"
//       component={StackNavigator}
//       options={{
//         tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
//       }} />
//     <Tab.Screen name="Account" component={Account} />
//   </Tab.Navigator>
// )

// {/* <ListingEditScreen /> */ }
/* <LoginScreen />
<WelcomeScreen />

use hooks insted of componentDidMount bv its not class component
  by passing[] we prevent updating and that means permisson wont be asking again and only for the first time
  useEffect(() => {
  Update the document title using the browser API
  requestPermission()
}, []); */

