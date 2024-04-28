import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { fetchContacts } from "../utility/Api";
import { ActivityIndicator, Avatar, Text } from "react-native-paper";

const Favorites = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true); // Corrected syntax
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchContacts()
      .then(data => {
        setContacts(data);
        setLoading(false);
        setError(false); // Corrected logic
      })
      .catch(e => {
        setLoading(false); // Corrected logic
        setError(true);
        console.error(e); // Moved console.log inside catch block
      });
  }, []);

  const renderItem = ({ item }) => { // Corrected syntax
    const { avatar } = item;
    return (
      <TouchableOpacity onPress={() => console.log(item)} style={{ padding: 20 }}>
        <Avatar.Image source={{ uri: avatar }} size={80} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {loading && <ActivityIndicator size={40} color="blue" />}
      {error && <Text>Error loading......</Text>}
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderItem} // Corrected prop name
        numColumns={3} // Corrected syntax
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default Favorites;
