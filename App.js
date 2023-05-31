import React from "react";
import GetStarted from "./app/GetStarted";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Register from "./app/Register";
import Login from "./app/Login";
import Home from "./app/Home";
import { useSelector } from "react-redux";

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
  const nav = useNavigation();
  return <Register login={() => nav.navigate("Login")} />;
};
const LoginScreen = () => {
  const nav = useNavigation();
  return (
    <Login
      get_started={() => nav.navigate("Register")}
      backHome={() => nav.popToTop()}
    />
  );
};
const HomeScreen = () => {
  const nav = useNavigation();
  return <Home />;
};
const Stack = createStackNavigator();
export default function App() {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={options} /> */}
        <Stack.Screen
          name="Get Started"
          component={loggedIn ? HomeScreen : GetStartedScreen}
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
