import React, { useEffect, useState } from "react";
import { Image, View, Text, ScrollView, FlatList } from "react-native";
import { getMenu } from "../../api/apiRestaurant";
import MenuItem from "./MenuItem";

const Menu = () => {
  function renderItem(itemData) {
    return <MenuItem {...itemData.item} />;
  }

  async function getData() {
    const menu = await getMenu();
    setMenu(menu);
    console.log(menu);
    return menu;
  }
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  return (
    <View className="mt-2 h-full w-full ">
      <FlatList
        data={menu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Menu;
