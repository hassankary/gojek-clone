import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

import Colors from "../../constants/Colors";
import { View } from "../../components/Themed";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarCustom({ name, color }) {
  return (
    <View
      className={`${
        color === "white" ? `bg-[#097210] ` : `bg-white`
      } flex h-[45px] w-[85px] justify-center items-center rounded-full`}
    >
      <Text
        className={`${
          color === "white" ? `text-white` : `text-[#097210]`
        } font-semibold text-[14px]`}
      >
        {name}
      </Text>
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "[#097210]",
        tabBarInactiveTintColor: "white",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          tabBarItemStyle: styles.tabScreenStyleFirst,
          tabBarIcon: ({ color }) => (
            <TabBarCustom name={"Beranda"} color={color} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="promo"
        options={{
          title: "Promo",
          tabBarItemStyle: styles.tabScreenStyle,
          tabBarIcon: ({ color }) => (
            <TabBarCustom name={"Promo"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pesanan"
        options={{
          title: "Pesanan",
          tabBarItemStyle: styles.tabScreenStyle,
          tabBarIcon: ({ color }) => (
            <TabBarCustom name={"Pesanan"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarItemStyle: styles.tabScreenStyleLast,
          tabBarIcon: ({ color }) => (
            <TabBarCustom name={"Chat"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#00880F",
    height: 85,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  tabScreenStyleFirst: {
    backgroundColor: "#097210",
    paddingLeft: 6,
    height: 56,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  tabScreenStyle: {
    backgroundColor: "#097210",
    height: 56,
  },
  tabScreenStyleLast: {
    backgroundColor: "#097210",
    paddingHorizontal: 6,
    height: 56,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});
