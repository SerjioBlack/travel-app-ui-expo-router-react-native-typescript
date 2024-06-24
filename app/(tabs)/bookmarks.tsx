import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListingType } from "@/types/listingType";
import Colors from "@/constants/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from "@expo/vector-icons";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<ListingType[]>([]);

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const storedBookmarks = await AsyncStorage.getItem('bookmarks');
        const bookmarks = storedBookmarks ? JSON.parse(storedBookmarks) : [];
        setBookmarks(bookmarks);
      } catch (error) {
        console.error('Error loading bookmarks', error);
      }
    };

    loadBookmarks();
  }, []);

  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
        <View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5
              name="map-marker-alt"
              size={18}
              color={Colors.primaryColor}
            />
            <Text style={styles.itemLocationTxt}>{item.location}</Text>
          </View>
          <Text style={styles.itemPriceTxt}>${item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarks}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bgColor,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocationTxt: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceTxt: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
});
