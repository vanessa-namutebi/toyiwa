import React from "react";
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
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
const Footer = () => {
  const [selected, setSelected] = React.useState(1);
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
          py="3"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? "home" : "home-outline"}
                />
              }
              color="green.700"
              size="lg"
            />
            <Text color="green.700" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="search" />}
              color="green.700"
              size="lg"
            />
            <Text color="green.700" fontSize="12">
              Search
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 2 ? "cart" : "cart-outline"}
                />
              }
              color="green.700"
              size="lg"
            />
            <Text color="green.700" fontSize="12">
              Cart
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
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
              size="lg"
            />
            <Text color="green.700" fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Footer;
