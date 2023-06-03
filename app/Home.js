import React from "react";
import { StatusBar, Button, Image, Container, Text, Center } from "native-base";
import {
  NativeBaseProvider,
  Heading,
  FormControl,
  Box,
  IconButton,
  HStack,
  Icon,
  VStack,
  Stack,
  ScrollView,
  Pressable,
} from "native-base";
import { TouchableOpacity, View } from "react-native";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const Home = ({ toMap, toProfile, pickup }) => {
  const time = new Date().getHours();
  const user = useSelector((state) => state.login.user);
  const nav = useNavigation();
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="orange" barStyle="light-content" />
      <Center height={160} bg="green.700">
        <HStack
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          height={"60%"}
        >
          <HStack alignItems="center" marginLeft={2}>
            <Heading color="white" fontSize="24" fontWeight="bold">
              SmartBin
            </Heading>
          </HStack>
          <HStack>
            <IconButton
              icon={
                <Icon
                  as={Ionicons}
                  name="notifications"
                  size="lg"
                  color="white"
                />
              }
            />

            <IconButton
              icon={
                <Icon
                  as={MaterialIcons}
                  name="more-vert"
                  size="lg"
                  color="white"
                />
              }
            />
          </HStack>
        </HStack>

        <VStack
          height={"40%"}
          size="16"
          backgroundColor="white"
          rounded="sm"
          shadow={"9"}
          width={"95%"}
          mb={"5"}
          justifyContent={"space-evenly"}
        >
          {user && (
            <Heading fontSize={"18"} alignSelf="center">
              {time < 12
                ? "Good morning, "
                : time <= 16
                ? "Good afternoon, "
                : "Good evening, "}
              {user.first_name} {user.last_name}
            </Heading>
          )}
          <Text alignSelf="center">How can we help you today?</Text>
        </VStack>
      </Center>
      <ScrollView h={"50%"} showsVerticalScrollIndicator={false}>
        <Box h={"100%"}>
          <Stack direction="row" mt="0.5" width={"100%"} m={0}>
            <Pressable
              m={2}
              size="16"
              bg="white"
              rounded="sm"
              shadow={"7"}
              width={"48%"}
              height={200}
              _pressed={{ backgroundColor: "gold" }}
              onPress={() => nav.navigate("Pick up")}
            >
              <Center
                _text={{
                  color: "green.700",
                  fontWeight: "medium",
                }}
              >
                <Icon
                  as={MaterialCommunityIcons}
                  name="dump-truck"
                  size={100}
                  color="green.700"
                />
                Request Waste Pick Up
              </Center>
            </Pressable>

            <Pressable
              m={2}
              ml={-1}
              size="16"
              bg="white"
              rounded="sm"
              shadow={"7"}
              width={"48%"}
              height={200}
              _pressed={{ backgroundColor: "gold" }}
            >
              <Center
                _text={{
                  color: "green.700",
                  fontWeight: "medium",
                }}
              >
                <Icon
                  as={MaterialIcons}
                  name="payments"
                  size={100}
                  color="green.700"
                />
                Make Payment
              </Center>
            </Pressable>
          </Stack>
          <Stack direction="row" mb="0.5" width={"100%"} m={0}>
            <Pressable
              m={2}
              size="16"
              bg="white"
              rounded="sm"
              shadow={"7"}
              width={"48%"}
              height={200}
              _pressed={{ backgroundColor: "gold" }}
              onPress={() => nav.navigate("Schedule")}
            >
              <Center
                _text={{
                  color: "green.700",
                  fontWeight: "medium",
                }}
              >
                <Icon
                  as={MaterialCommunityIcons}
                  name="calendar"
                  size={100}
                  color="green.700"
                />
                Schedule Pick up
              </Center>
            </Pressable>

            <Pressable
              m={2}
              ml={-1}
              size="16"
              bg="white"
              rounded="sm"
              shadow={"7"}
              width={"48%"}
              height={200}
              _pressed={{ backgroundColor: "gold" }}
            >
              <Center
                _text={{
                  color: "green.700",
                  fontWeight: "medium",
                }}
              >
                <Icon
                  as={MaterialCommunityIcons}
                  name="broadcast"
                  size={100}
                  color="green.700"
                />
                Track Driver
              </Center>
            </Pressable>
          </Stack>
        </Box>
      </ScrollView>
      <Footer selected={0} toMap={toMap} toAccount={toProfile} />
    </NativeBaseProvider>
  );
};

export default Home;
