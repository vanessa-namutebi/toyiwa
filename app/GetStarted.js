import React from "react";
import { Button, Image, Center } from "native-base";
import { NativeBaseProvider, Heading, FormControl, Box } from "native-base";
import { StatusBar } from "expo-status-bar";
export default function GetStarted({ get_started, login }) {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" backgroundColor="orange" />
      <Box bg="green.700" width={"100%"} height={"50%"}>
        <Center>
          <Image
            source={require("../assets/10181-ai.png")}
            width={"98%"}
            height={"90%"}
            alt="Image"
          />
        </Center>
      </Box>

      <FormControl height={110} width={"90%"} alignSelf={"center"} mt={"20"}>
        <Button
          m={2}
          height={"1/2"}
          rounded="full"
          bg="green.700"
          alignSelf={"center"}
          width={"100%"}
          onPress={get_started}
          _pressed={{ backgroundColor: "gold" }}
        >
          <Heading color="white">Get Started</Heading>
        </Button>
        <Button
          m={2}
          height={"1/2"}
          rounded="full"
          bg="white"
          borderColor="green.700"
          borderWidth="2"
          alignSelf={"center"}
          width={"100%"}
          onPress={login}
          _pressed={{ backgroundColor: "gold" }}
        >
          <Heading color="green.700">Login</Heading>
        </Button>
      </FormControl>
    </NativeBaseProvider>
  );
}
