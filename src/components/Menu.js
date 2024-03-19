// import React, { useEffect, useState } from "react";
// import { Image, View, Text } from "react-native";
// import { getMenu } from "../../api/apiRestaurant";
// import MenuItem from "./MenuItem";
// import { Button } from "tamagui";

// const Menu = () => {
//   async function getData() {
//     const menu = await getMenu();
//     setMenu(menu);
//     console.log(menu);
//     return menu;
//   }
//   const [menu, setMenu] = useState([]);
//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <View className="flex-1 px-2 pt-5">
//       <View className="w-full h-full bg-red-500 flex-row">
//         <View>
//           <Image source={{ uri: menu[0]?.imageUrl }} className="h-28 w-28" />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Menu;
import React, { useEffect, useState } from "react";
import { Image, View, Text } from "react-native";
import { getMenu } from "../../api/apiRestaurant";
import MenuItem from "./MenuItem";
import { Button } from "tamagui";

const Menu = () => {
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
    <View className="px-2 pt-5 h-screen">
      <View className="flex-row bg-gray-100">
        <View>
          <Image source={{ uri: menu[0]?.imageUrl }} className="h-28 w-28" />
        </View>
        <View className="px-2 py-1">
          <View>
            <Text className="text-lg text-gray-800 ">{menu[0]?.name}</Text>
            <Text className="italic text-gray-500">
              {menu[0]?.ingredients.join(", ")}
            </Text>
          </View>
          <View>
            <Text>${menu[0]?.unitPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Menu;
