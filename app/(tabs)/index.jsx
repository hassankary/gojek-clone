import {
  StyleSheet,
  Pressable,
  Button,
  TextInput,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import tw from "twrnc";
import { Link } from "expo-router";
import Header from "../../components/Header";
import { useState } from "react";
import {
  CardsHome1,
  DotsExp,
  IconBayar,
  IconExplore,
  IconGocar,
  IconGoclub,
  IconGofood,
  IconGopay,
  IconGopayLater,
  IconGopulsa,
  IconGoride,
  IconGosend,
  IconGoshop,
  IconLainnya,
  IconProfile,
  IconSmile,
  IconTopup,
  IconWink,
  RightArrow,
  StarExp,
} from "../../components/icon/icon";
import { CardsGopaylater } from "../../components/icon/Cards";
import { ScrollView } from "react-native";

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
    onPress={onPress}
    style={[styles1.item, { backgroundColor, borderColor }]}
  >
    <Text style={[styles1.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function TabOneScreen() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const [selectedId, setSelectedId] = useState("1");

  const productGojek = [
    { component: IconGoride(), name: "GoRide" },
    { component: IconGocar(), name: "GoCar" },
    { component: IconGofood(), name: "GoFood" },
    { component: IconGosend(), name: "GoSend" },
    { component: IconGoshop(), name: "GoMart" },
    { component: IconGopulsa(), name: "GoPulsa" },
    { component: IconGoclub(), name: "GoClub" },
    { component: IconLainnya(), name: "Lainnya" },
  ];

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

  const dataCards = [
    {
      src: require("../../assets/images/card3.png"),
      alt: "pic gopaylater makin seru 1",
      title: "Makin Seru",
      description: "Aktifkan & Sambungkan GoPay & GoPayLater di Tokopedia",
    },
    {
      src: require("../../assets/images/card2.png"),
      alt: "pic gopaylater makin seru 2",
      title: "Makin Seru",
      description: "Sambungin Akun ke Tokopedia, Banyakin Untung",
    },
    {
      src: require("../../assets/images/card1.png"),
      alt: "pic gopaylater makin seru 3",
      title: "Makin Seru",
      description: "Promo Belanja Online 10.10: Cashback hingga Rp100.000",
    },
  ];

  return (
    <>
      <SafeAreaView className="bg-[#FFFFFF] ">
        <ScrollView>
          <View className="flex flex-col px-4 w-full justify-center items-center bg-[#FFFFFF]">
            <View className="flex flex-row mt-4 w-full justify-between items-center bg-[#FFFFFF]">
              <TextInput
                className="w-[287px] h-[40px] bg-[#FAFAFA] border border-[#E9E9E9] rounded-full px-3"
                onChangeText={setData}
                value={data}
                placeholder="Cari layanan, makanan, dan tujuan"
                placeholderTextColor="#7B7B7B"
              />
              <View className="flex justify-center items bg-[#00880F] w-[40px] h-[40px] rounded-full">
                <Text className="text-center text-base text-white font-bold">
                  H
                </Text>
                <View className="absolute top-6 left-6 bg-transparent ">
                  <IconProfile />
                </View>
              </View>
            </View>
            <View className="flex flex-row mt-4 p-[17px] justify-between space-x-[17px] w-full h-[101px] bg-[#0281A0] rounded-3xl">
              <View className="flex flex-col p-2 bg-[#FFFFFF] justify-center items-start rounded-xl">
                <IconGopay />
                <Text className="font-bold max-w-[140px] text-[16px] text-black">
                  Rp 9.812.600
                </Text>
                <Text className="font-semibold text-[12.5px] text-[#00880F]">
                  Klik & cek riwayat
                </Text>
              </View>
              <View className="flex flex-row grow py-[10px] justify-between bg-[#0281A0]">
                <View className="flex flex-col justify-between w-[48px] items-center bg-[#0281A0]">
                  <IconBayar />
                  <Text className="text-[12px] font-semibold text-white">
                    Bayar
                  </Text>
                </View>
                <View className="flex flex-col justify-between w-[48px] items-center bg-[#0281A0]">
                  <IconTopup />
                  <Text className="text-[12px] font-semibold text-white">
                    Top Up
                  </Text>
                </View>
                <View className="flex flex-col justify-between w-[48px] items-center bg-[#0281A0]">
                  <IconExplore />
                  <Text className="text-[12px] font-semibold text-white">
                    Eksplor
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row pt-2 justify-between w-full mt-4 bg-[#FFFFFF]">
              {productGojek.slice(0, 4).map((data, idx) => {
                return (
                  <View
                    key={idx}
                    className="flex w-[70px] justify-center items-center space-y-1 bg-[#FFFFFF]"
                  >
                    {data.component}
                    <Text className="text-[12px] text-[#4A4A4A]">
                      {data.name}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View className="flex flex-row pt-2 justify-between w-full mt-4 bg-[#FFFFFF]">
              {productGojek.slice(4, 8).map((data, idx) => {
                return (
                  <View
                    key={idx}
                    className="flex w-[70px] justify-center items-center space-y-1 bg-[#FFFFFF]"
                  >
                    {data.component}
                    <Text className="text-[12px] text-[#4A4A4A]">
                      {data.name}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View className="mt-6 w-full bg-[#FFFFFF]">
              <Text className=" text-left text-black text-[19px] font-bold">
                Konten buat kamu
              </Text>
              <View className=" w-full bg-[#FFFFFF]">
                <FlatList
                  horizontal
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  extraData={selectedId}
                />
              </View>
            </View>
            <View className="mt-2 w-full bg-[#FFFFFF]">
              <Text className=" text-left text-black text-[19px] font-bold">
                Akses cepat
              </Text>
              <View className=" mt-4 w-full bg-[#FFFFFF] border border-[#E9E9E9] rounded-xl">
                <View className="flex flex-row justify-between items-center rounded-full bg-white py-[15px] px-[17px] ">
                  <IconGoride />
                  <Text className=" mx-3 flex-grow bg-[#FFFFFF] text-black">
                    Pintu masuk motor, MNC Land
                  </Text>
                  <RightArrow />
                </View>
                <View className="flex flex-row justify-between items-center rounded-full bg-white py-[15px] px-[17px] ">
                  <IconGoride />
                  <Text className=" mx-3 flex-grow bg-[#FFFFFF] text-black">
                    Pintu keluar motor, MNC Land
                  </Text>
                  <RightArrow />
                </View>
              </View>
            </View>
            <View className="flex mt-6 w-full bg-[#EAF3F6] border border-[#E9E9E9] rounded-xl ">
              <View className="flex flex-row items-center justify-center p-1 bg-transparent">
                <View className="flex flex-row items-center bg-transparent">
                  <DotsExp />
                  <StarExp className="absolute left-2" />
                </View>
                <Text className="font-bold right-[59px] bg-transparent text-black">
                  67 XP lagi ada Harta Karun!
                </Text>
                <View className="right-3 bg-transparent">
                  <RightArrow />
                </View>
              </View>
            </View>
            <View className="mt-6 w-full bg-[#FFFFFF]">
              <View className="px-2">
                <View className="bg-[#FFFFFF]">
                  <IconGopayLater />
                </View>
                <View className="flex mt-2 flex-row bg-[#FFFFFF]">
                  <Text className="mr-1 text-base font-bold text-black">
                    Lebih hemat pakai GoPayLater
                  </Text>
                  <IconSmile />
                </View>
                <View className="flex mt-2 flex-row bg-[#FFFFFF]">
                  <Text className="mr-1 text-sm text-black">
                    Yuk, belanja di Tokopedia pake GoPayLater dan nikmatin
                    cashbacknya~
                  </Text>
                </View>
              </View>
              <View className="flex flex-col bg-[#FFFFFF] ">
                {/* <View className="mt-5 bg-[#FFFFFF] rounded-xl">
                <CardsHome1 />
                <View className="flex flex-col px-6 py-6 space-y-2 border border-t-0 border-[#E9E9E9] bg-[#FFFFFF] rounded-b-xl">
                  <View className="flex flex-row bg-[#FFFFFF] rounded-xl">
                    <Text className="font-bold text-base text-black">
                      Makin Seru
                    </Text>
                    <IconWink />
                  </View>
                  <Text className="text-black text-sm">
                    Aktifkan & Sambungkan GoPay & GoPayLater di Tokopedia
                  </Text>
                </View>
              </View> */}
                {dataCards.map((data, idx) => {
                  return (
                    <View
                      key={idx}
                      className={`${
                        idx == dataCards.length - 1 ? "mb-5" : ""
                      } mt-5 bg-[#FFFFFF] h-fit w-full rounded-xl`}
                    >
                      <Image
                        source={data.src}
                        alt={data.alt}
                        height={50}
                        width={50}
                        className=" rounded-t-xl h-[170px] w-full"
                        resizeMethod="resize"
                        quality={100}
                        unoptimized
                      ></Image>
                      <View className="flex flex-col px-6 py-6 space-y-2 border border-t-0 border-[#E9E9E9] bg-[#FFFFFF] rounded-b-xl">
                        <View className="flex flex-row bg-[#FFFFFF] rounded-xl">
                          <Text className="font-bold text-base text-black">
                            {data.title}
                          </Text>
                          <IconWink />
                        </View>
                        <Text className="text-black text-sm">
                          {data.description}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
