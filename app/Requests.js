import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Heading, StatusBar } from "native-base";
import { HStack, Icon, ScrollView, Input, Box } from "native-base";
import { FormControl, VStack, Pressable, Actionsheet } from "native-base";
import { Toast, Divider, Spinner, Radio, Flex, Avatar } from "native-base";
import { Progress, Skeleton, CheckIcon, Checkbox, Text } from "native-base";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Footer from "./components/Footer";
import axios from "axios";
import getApi from "./getApi";
import { useSelector, useDispatch } from "react-redux";
import { requests } from "../state/requestsSlice";
const Requests = ({ back }) => {
  const apiKey = getApi();
  const dispatch = useDispatch();
  const fetched = useSelector((state) => state.requests.fetched);
  const my_requests = useSelector((state) => state.requests.requests);
  const user = useSelector((state) => state.login.user);
  const [err, setErr] = useState("");

  useEffect(async () => {
    await axios
      .get(`${apiKey}/pickuprequest/${user._id}`)
      .then((response) => dispatch(requests(response.data)))
      .catch((err) => setErr(err.message));
  }, []);

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
      </HStack>
      <Box height={"72%"}>
        {my_requests !== null &&
          my_requests.map((request) => {
            return (
              <Pressable
                key={request._id}
                mb={"1.5"}
                alignSelf={"center"}
                size="16"
                rounded="sm"
                bg={"white"}
                shadow={"3"}
                width={"98%"}
                height={100}
                alignItems={"center"}
                padding={1}
                _pressed={{
                  backgroundColor: "gray.200",
                }}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Text fontSize={"18"} color="gray.500" fontWeight={"800"}>
                  {request._id}
                </Text>
                <Icon
                  mb="1"
                  as={<Ionicons name={"git-pull-request"} />}
                  color="gray.500"
                  size={30}
                />
              </Pressable>
            );
          })}
      </Box>
      <Footer selected={2} />
    </NativeBaseProvider>
  );
};

export default Requests;
