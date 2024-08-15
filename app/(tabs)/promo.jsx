import {
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import tw from "twrnc";
import { Link } from "expo-router";
import Header from "../../components/Header";
import { useState } from "react";

const DATA = [
  {
    id: "1",
    title: "Apa aja",
  },
  {
    id: "2",
    title: "Promo",
  },
  {
    id: "3",
    title: "Donasi",
  },
  {
    id: "4",
    title: "Hiburan",
  },
  {
    id: "5",
    title: "Fifth",
  },
];

const Item = ({ item, onPress, backgroundColor, borderColor, textColor }) => (
  <TouchableOpacity
  className=" active:scale-95 transition-all"
    onPress={onPress}
    style={[styles1.item, { backgroundColor, borderColor }]}
  >
    <Text style={[styles1.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function PromoPage() {
  const [selectedId, setSelectedId] = useState("1");

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#00880F" : "#FAFAFA";
    const borderColor = item.id === selectedId ? "#00880F" : "#E9E9E9";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        textColor={color}
      />
    );
  };

  return (
    <>
      <Header defaultSelected="2" />
      <ScrollView className="flex bg-white">
        <View className="bg-[#FFFFFF]">
          <Text className="text-black"></Text>
        </View>
        <View className="my-6 w-full bg-[#FFFFFF]">
          <Text className=" text-left text-black text-[19px] font-bold">
            Konten buat kamu 
          </Text>
          <FlatList
            horizontal
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
        <View className="flex items-center justify-center h-[500px] bg-[#FFFFFF]">
          <Text className="text-lg font-bold text-[#00880F] underline ">
            Promo Page
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 16,
    marginRight: 16,
    borderWidth: 1,
    borderRadius: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
