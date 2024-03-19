import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "tamagui";

const MenuItem = ({ soldOut, imageUrl, name, ingredients, unitPrice }) => {
  return (
    <View className="flex-row bg-gray-100 w-full px-3 py-2">
      <View className="">
        <Image
          source={{ uri: imageUrl }}
          className={`h-28 w-28 ${soldOut ? "opacity-50 grayscale" : ""}`}
        />
      </View>
      <View className="px-4 py-1 justify-between">
        <View className="w-[62vw]">
          <Text className="text-lg text-gray-800 ">{name}</Text>
          <Text className="italic text-gray-500">{ingredients.join(", ")}</Text>
        </View>
        <View className="flex-row items-center justify-between ">
          {soldOut ? (
            <Text className="text-gray-700 font-semibold">SOLD OUT</Text>
          ) : (
            <Text className="text-gray-700 font-semibold">${unitPrice}</Text>
          )}
          {!soldOut && (
            <Button className=" bg-yellow-400 rounded-full px-4 text-sm">
              ADD TO CART
            </Button>
          )}
        </View>
      </View>
    </View>
  );
};

export default MenuItem;
