import { StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Header from "../../components/Header";
import tw from "twrnc";

export default function TabOrder() {
  return (
    <>
      <Header defaultSelected="3" />
      <ScrollView>
        <View className="flex justify-center items-center w-full">
          <View className="flex justify-center items-center h-screen w-full bg-[#FFFFFF]">
            <Text className="text-center text-[#00880F] font-bold">
              Pesanan Page
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

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
