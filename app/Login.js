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
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
const Login = ({ get_started }) => {
  const handleLogin = () => {};
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} backgroundColor={"green"} />
      <Box bg="green.700" width={"100%"} height={"40%"}></Box>
      <FormControl m={2} alignSelf={"center"}>
        <Input
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
        <Button m={5} bg="green.700" onPress={handleLogin}>
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
