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
} from "native-base";
import { TouchableOpacity, View } from "react-native";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state.login.user);
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Box safeAreaTop bg="violet.600" />
      <Center height={200} bg="green.700">
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
        <VStack height={"40%"} shadow={"1"}>
          {user && (
            <Heading color="white" fontSize={"18"}>
              Good Eveing {user.first_name} {user.last_name}
            </Heading>
          )}
        </VStack>
      </Center>
      <ScrollView h={"50%"} showsVerticalScrollIndicator={false}>
        <Box h={"100%"}>
          <Stack direction="row" mb="0.5" mt="0.5" width={"100%"} m={0}>
            <Center
              m={2}
              size="16"
              bg="white"
              rounded="sm"
              _text={{
                color: "green.700",
                fontWeight: "medium",
              }}
              shadow={"7"}
              width={"48%"}
              height={200}
            >
              <Icon
                as={MaterialCommunityIcons}
                name="dump-truck"
                size={100}
                color="green.700"
              />
              Request Waste Pick Up
            </Center>

            <Center
              m={2}
              ml={-1}
              size="16"
              bg="white"
              rounded="sm"
              _text={{
                color: "green.700",
                fontWeight: "medium",
              }}
              shadow={"3"}
              width={"48%"}
              height={200}
            >
              <Icon
                as={MaterialIcons}
                name="payments"
                size={100}
                color="green.700"
              />
              Make Payment
            </Center>
          </Stack>
          <Stack direction="row" mb="0.5" mt="0.5" width={"100%"} m={0}>
            <Center
              m={2}
              size="16"
              bg="white"
              rounded="sm"
              _text={{
                color: "green.700",
                fontWeight: "medium",
              }}
              shadow={"7"}
              width={"48%"}
              height={200}
            >
              <Icon
                as={MaterialCommunityIcons}
                name="calendar"
                size={100}
                color="green.700"
              />
              Schedule Pick up
            </Center>

            <Center
              m={2}
              ml={-1}
              size="16"
              bg="white"
              rounded="sm"
              _text={{
                color: "green.700",
                fontWeight: "medium",
              }}
              shadow={"3"}
              width={"48%"}
              height={200}
            >
              <Icon
                as={MaterialCommunityIcons}
                name="broadcast"
                size={100}
                color="green.700"
              />
              Track Dreiver
            </Center>
          </Stack>
        </Box>
      </ScrollView>
      <Footer />
    </NativeBaseProvider>
  );
};

export default Home;
