import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, } from 'react-native'

import Screen from '../components/Screen'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

import ListItemSeparator from '../components/ListItemSeparator'

import ListItem from '../components/ListItem'

//dummy data
const initialMessages = [
  {
    id: 1,
    title: "Larsen Gotschalk",
    description: "Hey! Is this item still available?",
    image: require("../assets/larsen.png"),
  },
  {
    id: 2,
    title: "Larsen Gotschalk",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/larsen.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/larsen.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
