import { Text, View } from "./Themed";
import { Button, Pressable, SafeAreaView } from "react-native";
import {
  StyleSheet,
  TextInput,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { Link } from "expo-router";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "1",
    title: "Branda",
    page: "index",
  },
  {
    id: "2",
    title: "Promo",
    page: "promo",
  },
  {
    id: "3",
    title: "Pesanan",
    page: "pesanan",
  },
  {
    id: "4",
    title: "Chat",
    page: "chat",
  },
];

export default function Header({ defaultSelected = "1" }) {
  // const [selectedId, setSelectedId] = useState(defaultSelected);
  const [selectedMenuId, setSelectedMenuId] = useState(defaultSelected);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      {/* <View className="flex flex-row justify-around p-3 bg-[#00880F] items-center w-full">
        <View className="flex flex-row p-[6px] space-x-1 bg-[#097210] rounded-full">
          <Link className="bg-white" href="/" asChild>
            <Pressable className="flex h-[45px] w-[85px] justify-center items-center rounded-full ">
              <Text className="font-semibold text-[14px] text-[#00880F]">
                Beranda
              </Text>
            </Pressable>
          </Link>
          <Link className="bg-transparent" href="/promo" asChild>
            <Pressable className="flex h-[45px] w-[85px]  justify-center items-center rounded-full ">
              <Text className="font-semibold text-[14px] text-[#ffff]">
                Promo
              </Text>
            </Pressable>
          </Link>
          <Link className="bg-transparent" href="/pesanan" asChild>
            <Pressable className="flex h-[45px] w-[85px] justify-center items-center rounded-full ">
              <Text className="font-semibold text-[14px] text-[#ffff]">
                Pesanan
              </Text>
            </Pressable>
          </Link>
          <Link className="bg-transparent" href="/chat" asChild>
            <Pressable className="flex h-[45px] w-[85px]  justify-center items-center rounded-full ">
              <Text className="font-semibold text-[14px] text-[#ffff]">
                Chat
              </Text>
            </Pressable>
          </Link>
        </View>
      </View> */}
      <View className="flex flex-row justify-around p-3 bg-[#00880F] items-center w-full">
        <View className="flex flex-row p-[6px] space-x-1 bg-[#097210] rounded-full">
          {DATA.map((data, idx) => {
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => {
                  navigation.navigate({ name: data.page });
                }}
                className={`${
                  selectedMenuId === data.id ? `bg-white` : `bg-[#097210]`
                } flex h-[45px] w-[85px] justify-center items-center active:scale-95 transition-all rounded-full`}
              >
                <Text
                  className={
                    selectedMenuId === data.id
                      ? `font-semibold text-[14px] text-[#00880F]`
                      : `font-semibold text-[14px] text-white`
                  }
                >
                  {data.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const stylesHeader = StyleSheet.create({
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
