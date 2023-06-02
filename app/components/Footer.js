import React from "react";
import { useNavigation } from "@react-navigation/native";
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
} from "native-base";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
const Footer = ({ toHome, toMap, toAccount, selected }) => {
  const nav = useNavigation();
  return (
    <Box
      flex={1}
      bg="white"
      safeAreaTop
      width="100%"
      alignSelf="center"
      alignItems={"baseline"}
    >
      <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => nav.navigate("Get Started")}
          _pressed={{ backgroundColor: "gold" }}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name={"dashboard"} />}
              color="green.700"
              size={30}
            />
            <Text color="green.700" fontSize="12" fontWeight={"600"}>
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => nav.navigate("Map")}
          _pressed={{ backgroundColor: "gold" }}
        >
          <Center>
            <Icon
              mb="1"
              as={<Entypo name="map" />}
              color="green.700"
              size={30}
            />
            <Text color="green.700" fontSize="12" fontWeight={"600"}>
              Map
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => nav.navigate("Requests")}
          _pressed={{ backgroundColor: "gold" }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={
                    selected === 2
                      ? "contactless-payment"
                      : "contactless-payment"
                  }
                />
              }
              color="green.700"
              size={30}
            />
            <Text color="green.700" fontSize="12" fontWeight={"600"}>
              Requests
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => nav.navigate("Profile")}
          _pressed={{ backgroundColor: "gold" }}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? "account" : "account-outline"}
                />
              }
              color="green.700"
              size={30}
            />
            <Text color="green.700" fontSize="12" fontWeight={"600"}>
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Footer;
