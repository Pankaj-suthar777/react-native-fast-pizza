import React from "react";
import { Text, View } from "react-native";
import { Button } from "tamagui";

const FirstScreen = () => {
  return (
    <View className="h-screen w-screen px-5 items-center">
      <View className="w-full justify-center items-center mt-12">
        <Text
          className="text-2xl font-medium
        text-gray-600"
        >
          The Best Pizza.
        </Text>
        <Text className="mt-4 text-2xl text-center font-bold text-[#ddae1e]">
          Straight out of the oven, stright to you
        </Text>
      </View>
      <Button className=" bg-yellow-500 rounded-full px-4 text-sm w-[200px] mt-8">
        CONTINUE ORDERING
      </Button>
    </View>
  );
};

export default FirstScreen;
