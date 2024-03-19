import React from "react";
import { Image, Text, View } from "react-native";

const MenuItem = ({ imageUrl, name }) => {
  return (
    <View className="flex-row">
      <Image source={{ uri: imageUrl }} className="h-28 w-28" />
      <View className="w-full">
        <Text className="text-blac w-full">{name}hhhhhhhh</Text>
      </View>
    </View>
  );
};

export default MenuItem;
