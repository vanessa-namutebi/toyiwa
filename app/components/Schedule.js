import React, { useState, useCallback, memo, useEffect } from "react";
import { StatusBar, Button, FormControl, Center, Input } from "native-base";
import { Icon, Pressable, Toast, Flex, Skeleton, Checkbox } from "native-base";
import { NativeBaseProvider, Heading, VStack, HStack, Text } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import axios from "axios";
import getApi from "../getApi";
const apiKey = getApi();

const Schedule = ({ back }) => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={"green"} barStyle={"light-content"} />
      <HStack
        height={"15%"}
        size="16"
        backgroundColor="white"
        rounded="sm"
        shadow={"3"}
        shad
        width={"100%"}
        mb={"5"}
      >
        <Pressable
          width={50}
          height={50}
          m={2}
          p="2"
          bg="white"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg",
          }}
          shadow={2}
          rounded={"full"}
          justifyContent={"space-evenly"}
          _pressed={{ backgroundColor: "gold" }}
          onPress={back}
        >
          <Icon
            as={Ionicons}
            name="chevron-back-outline"
            size={30}
            color="green.700"
          />
        </Pressable>

        <Heading alignSelf="center" color="green.700">
          Schedule Wast Pick Up
        </Heading>
      </HStack>
    </NativeBaseProvider>
  );
};

export default memo(Schedule);
