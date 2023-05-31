import React from "react";
import GetStarted from "./app/GetStarted";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Register from "./app/Register";
import Login from "./app/Login";
const GetStartedScreen = () => {
  const nav = useNavigation();
  return (
    <GetStarted
      get_started={() => nav.navigate("Register")}
      login={() => nav.navigate("Login")}
    />
  );
};

const RegisterScreen = () => {
  return <Register />;
};
const LoginScreen = () => {
  const nav = useNavigation();
  return <Login get_started={() => nav.navigate("Register")} />;
};
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Get Started"
          component={GetStartedScreen}
          options={options}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={options}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const options = {
  headerShown: false,
  // gestureEnabled: true,
  // gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
