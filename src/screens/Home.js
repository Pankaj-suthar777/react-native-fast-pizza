import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <View className="mt-[50px] h-full w-full">
      <Header />
      <View className="flex-1 h-full w-full">
        <Menu />
      </View>
    </View>
  );
};

export default Home;
