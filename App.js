import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Header from "./components/Header";
import Test from "./components/Test";
import TestForm from "./components/TestForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <Test />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="ShitHead"
            component={ProfileScreen}
            options={{ title: 'profile' }}

           
          />

            {/* <View style={styles.container}>
              
              <Header />
              <TestForm />
              <Text>Smash coders</Text>
              <Text style={styles.smashCoders}>Smash coders</Text>
              <StatusBar style="auto" />
              <Image source={require("./assets/bike_animated.gif")} />
            </View> */}

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "#ff0000",
  },

  smashCoders: {
    color: "red",
    // borderRadius: '1px 1px 1px',
    borderWidth: 20,
    borderStyle: "dashed",
    borderColor: "orange",
    borderRadius: 20,
    backgroundColor: "blue",
  },
});
