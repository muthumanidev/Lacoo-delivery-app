import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";
import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <View style={styles.searchField}>
          <Ionicons
            style={styles.searchIcon}
            name="search-outline"
            size={20}
            color={Colors.medium}
          />
          <TextInput
            style={styles.input}
            placeholder="Restaurants, groceries, dishes"
          />
        </View>
        <Link href={"/(modal)/filter"} asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />

      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={openModal}>
            <Image
              style={styles.bike}
              source={require("@/assets/images/bike.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
            <Text style={styles.title}>Delivery . Now </Text>
            <View style={styles.locationName}>
              <Text style={styles.subtitle}>London</Text>
              <Ionicons
                name="chevron-down-outline"
                size={20}
                marginLeft={0.5}
                marginRight={35}
                color={Colors.primary}
              />
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.Profilebutton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
    height: 30,
    marginRight: -13,
    marginLeft: 0.5,
    top: 10,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  Profilebutton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
    marginRight: 0.5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
  searchIcon: {
    paddingLeft: 10,
  },
});

export default CustomHeader;
