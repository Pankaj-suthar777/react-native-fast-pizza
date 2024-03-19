import React from "react";
import { Text } from "react-native";
import { Input, View } from "tamagui";

const Header = () => {
  return (
    <View className="h-[60px] bg-yellow-500 flex-row items-center w-full border-b">
      <View className="flex-row items-center justify-between w-full px-6">
        <Text>PIZZA REACT CO.</Text>
        <Input
          size="$3"
          placeholder="Search"
          //className="w-[120px] rounded-full px-6 py-2"
          className="duration-400 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 focus:ring-offset-2 sm:w-64 sm:focus:w-7"
        />
      </View>
    </View>
  );
};

export default Header;
