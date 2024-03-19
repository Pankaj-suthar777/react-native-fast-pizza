import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button, TamaguiProvider } from "tamagui";
import tamaguiConfig from "./tamagui.config";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <View className="flex-1">
        <Home />
      </View>
    </TamaguiProvider>
  );
}
