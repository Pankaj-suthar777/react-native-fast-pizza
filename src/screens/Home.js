import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <View className="mt-5 ">
      <Header />
      <View className="flex-1">
        <Menu />
      </View>
    </View>
  );
};

export default Home;
