import { StyleSheet, ScrollView } from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Header from "../../components/Header";
import tw from "twrnc";

export default function TabTwoScreen() {
  return (
    <>
      <Header defaultSelected="4" />
      <ScrollView>
        <View className="flex justify-center items-center w-full">
          <View className="flex justify-center items-center w-full h-[900px] bg-[#FFFFFF]">
            <Text className="text-center text-black font-bold">Chat Page</Text>
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
