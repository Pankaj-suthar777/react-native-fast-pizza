import React from "react";
import { View } from "react-native";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <View className="h-full w-full">
      <View className="flex-1 h-full w-full">
        <Menu />
      </View>
    </View>
  );
};

export default Home;
