
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Alert,
  TouchableHighlight,
  Button,
  Platform
} from 'react-native';

//view components represent abstract view for native langauge of the os(ioπs or android)
export default function App() {
  const handlePress = () => console.log('Text clicked')

  return (
    <SafeAreaView style={[styles.container, containerStyle]
    }>
      <Text numberOfLines={1} onPress={handlePress} >Hello World </Text>
      <Button
        color="pink"
        title="Click Me"
        onPress={() =>
          Alert.prompt("my title", "my message", text => console.log(text))}>

      </Button>
      <TouchableHighlight onPress={() => console.log("image tapped")}><Image
        blurRadius={0}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
        }}>

      </Image>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </SafeAreaView >
  );
}
const containerStyle = { backgroundColor: "aqua" }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* <View style={{
  backgroundColor: "dodgerblue",
  width: 100,
  height: 100,
  padding: 20,
  paddingHorizontal: 10,
  paddingLeft: 30,
  marginBottom: 30
  // shadowColor: "black",
  // shadowOffset: { width: 0, height: 10 },
  // shadowOpacity: 1,
  // shadowRadius: 10,
  // borderWidth: 10,
  // borderColor: "royalblue",
  // borderRadius: 50,
  // borderTopWidth: 20,
  // borderTopLeftRadius: 50,

// }}>
*/

// NO STYLE HERRITANce
