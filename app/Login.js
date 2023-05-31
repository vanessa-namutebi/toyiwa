import React, { memo, useState } from "react";
import { StatusBar, Button, Image, Container, Text, Center } from "native-base";
import {
  NativeBaseProvider,
  Heading,
  FormControl,
  Box,
  Input,
  VStack,
  HStack,
  Icon,
  Avatar,
  ScrollView,
  Pressable,
  Actionsheet,
  Divider,
  Toast,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../state/LoginSlice";
const apiKey = "http://192.168.1.8:3000/api";
const Login = ({ get_started, backHome }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [loggingIn, setLoggingIn] = useState(false);
  const handleLogin = () => {
    if (!credentials.email) {
      showToast("Email is required!");
      return;
    }
    if (!credentials.email) {
      showToast("Password is required!");
      return;
    }
    setLoggingIn(true);
    axios
      .post(`${apiKey}/login`, credentials)
      .then((response) => {
        if (response.data.user) {
          const user = response.data.user;
          showToast(`Welcome ${user.first_name}`);
          dispatch(login(user));
          backHome();
        } else {
          showToast(response.data.message);
        }
      })

      .catch((err) => {
        showToast(err.message);
      });
    setLoggingIn(false);
  };
  const showToast = (msg) => {
    Toast.show({
      title: msg,
      backgroundColor: "red.500",
      placement: "top",
    });
  };
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} backgroundColor={"green"} />
      <Box width={"100%"} height={"40%"}></Box>
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
            <Icon
              m={2}
              as={Ionicons}
              name="ios-eye"
              color="green.700"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
        <Button
          m={5}
          bg="green.700"
          onPress={handleLogin}
          isLoading={loggingIn}
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
          onPress={get_started}
        >
          <Heading color="green.700">Sign Up</Heading>
        </Button>
      </Center>
    </NativeBaseProvider>
  );
};

export default Login;
