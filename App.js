import { StatusBar } from "expo-status-bar";
import { Input, TamaguiProvider } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import Home from "./src/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import FirstScreen from "./src/screens/FirstScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerRight: () => (
              <Input
                size="$4"
                placeholder="Search"
                className="duration-400 w-[140px] rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 focus:ring-offset-2 sm:w-64 sm:focus:w-7"
              />
            ),
            title: "PIZZA REACT CO.",
            headerStyle: {
              backgroundColor: "#FFBF00",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
