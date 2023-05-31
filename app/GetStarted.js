import React from "react";
import {
  StatusBar,
  Button,
  Image,
  AspectRatio,
  Text,
  Center,
} from "native-base";
import { NativeBaseProvider, Heading, FormControl, Box } from "native-base";

export default function GetStarted({ get_started, login }) {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} backgroundColor={"green"} />

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
        >
          <Heading color="green.700">Login</Heading>
        </Button>
      </FormControl>
    </NativeBaseProvider>
  );
}
