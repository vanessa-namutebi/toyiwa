import React, { memo, useState, useEffect } from "react";
import {
  StatusBar,
  Button,
  Image,
  Text,
  Center,
  Icon,
  Spinner,
  HStack,
} from "native-base";
import { NativeBaseProvider, Heading, FormControl, Input } from "native-base";
import { ScrollView, Pressable, Divider, Toast } from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../state/LoginSlice";

import getApi from "./getApi";
import { useNavigation } from "@react-navigation/native";
const apiKey = getApi();
const Login = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [state, setState] = useState({
    loggingIn: false,
    showPass: false,
    showForm: false,
  });

  const handleLogin = async () => {
    if (!credentials.email) {
      showToast("Email address is required!");
      return;
    } else if (!credentials.password) {
      showToast("Password is required!");
      return;
    } else {
      setState({ ...state, loggingIn: true });
      await axios
        .post(`${apiKey}/login`, credentials)
        .then((response) => {
          if (response.data.user) {
            setState({ ...state, loggingIn: false });
            const user = response.data.user;
            showToast(`Welcome ${user.first_name}`);
            dispatch(login(user));
            nav.popToTop();
          } else {
            showToast(response.data.message);
            setState({ ...state, loggingIn: false });
          }
        })
        .catch((err) => {
          showToast(err.message);
          setState({ ...state, loggingIn: false });
        });
    }
  };

  const showToast = (msg) => {
    Toast.show({ title: msg, backgroundColor: "red.500", placement: "top" });
  };

  useEffect(() => {
    setTimeout(() => setState({ ...state, showForm: true }), 100);
  }, []);

  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} backgroundColor={"green"} />
      {state.showForm === true ? (
        <ScrollView>
          <Center width={"100%"} height={"40%"}>
            <Center>
              <Image
                source={require("../assets/logo.png")}
                alt="Logo"
                width={200}
                height={200}
              />
            </Center>
          </Center>

          <FormControl m={2} alignSelf={"center"}>
            <Input
              value={credentials.email}
              onChangeText={(value) =>
                setCredentials({
                  ...credentials,
                  email: value,
                })
              }
              placeholder="Email Address"
              m={2}
              borderColor={"green.700"}
              InputLeftElement={
                <Icon
                  m={2}
                  as={MaterialIcons}
                  name="email"
                  color="green.700"
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
              }
            />
            <Input
              type={state.showPass ? "text" : "password"}
              value={credentials.password}
              onChangeText={(value) =>
                setCredentials({
                  ...credentials,
                  password: value,
                })
              }
              placeholder="Password"
              m={2}
              borderColor={"green.700"}
              InputLeftElement={
                <Icon
                  m={2}
                  as={Ionicons}
                  name="finger-print-sharp"
                  color="green.700"
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
              }
              InputRightElement={
                <Pressable
                  onPress={() =>
                    setState({ ...state, showPass: !state.showPass })
                  }
                >
                  <Icon
                    m={2}
                    as={Ionicons}
                    name={state.showPass ? "ios-eye-off" : "ios-eye"}
                    color="green.700"
                    _dark={{
                      color: "warmGray.50",
                    }}
                  />
                </Pressable>
              }
            />
            <Button
              m={5}
              bg="green.700"
              onPress={handleLogin}
              isLoading={state.loggingIn}
              isDisabled={state.loggingIn}
              _pressed={{ backgroundColor: "gold" }}
            >
              <Heading color="white">Login</Heading>
            </Button>
          </FormControl>
          <Divider />
          <Center m={4}>
            <Text>Have no Account?</Text>
            <Button
              m={5}
              bg="white"
              width={"90%"}
              borderWidth={2}
              borderColor={"green.700"}
              onPress={() => nav.navigate("Register")}
              _pressed={{ backgroundColor: "gold" }}
            >
              <Heading color="green.700">Sign Up</Heading>
            </Button>
          </Center>
        </ScrollView>
      ) : (
        <HStack space={2} justifyContent="center" mt="1/2">
          <Spinner color="green.700" size={"lg"} />
          <Heading color="green.700" fontSize="md">
            Just a moment...
          </Heading>
        </HStack>
      )}
    </NativeBaseProvider>
  );
};

export default Login;
