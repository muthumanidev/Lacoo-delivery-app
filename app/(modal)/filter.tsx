import {
  View,
  Text,
  StyleSheet,
  Touchable,
  FlatList,
  ListRenderItem,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import categories from "@/assets/data/filter.json";
import { Ionicons } from "@expo/vector-icons";

interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const ItemBox = () => (
  <View style={styles.itemContainer}>
    <TouchableOpacity style={styles.item}>
      <Ionicons name="arrow-down-outline" size={20} color={Colors.medium} />
      <Text style={{ flex: 1 }}> Sort </Text>
      <Ionicons name="chevron-forward" size={22} color={Colors.primary} />
    </TouchableOpacity>
  </View>
);
const Filter = () => {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<Category> = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.fullButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.footerText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
});
export default Filter;
