import React, { useState, useCallback, memo } from "react";
import {
  StatusBar,
  Button,
  Image,
  Container,
  Text,
  Center,
  Stack,
} from "native-base";
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
  Toast,
  Divider,
  Spinner,
  Radio,
  Flex,
} from "native-base";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
import axios from "axios";
import getApi from "../getApi";
const apiKey = getApi();
const PickUp = ({ back }) => {
  const user = useSelector((state) => state.login.user);
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState({});
  const [quantity, setQuantity] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const addtoCategories = (option) => {
    setCategories([...categories, option]);
    console.log(categories);
  };

  const submitRequest = () => {
    if (categories.length <= 0) {
      showToast("Please select the categories of waste!", "red.500");
      return;
    } else if (quantity == null) {
      showToast("Provide the quantity of the waste!", "red.500");
      return;
    } else if (!location) {
      showToast("You must provide the location!", "red.500");
      return;
    } else {
      setSubmitting(true);
    }
    const request = {
      user_id: user._id,
      location: location,
      categories: categories,
      quantity: quantity,
    };
    console.log(request);
    axios
      .post(`${apiKey}/pickuprequest`, request)
      .then((response) => {
        console.log(response.data);
        setSubmitting(false);
      })
      .catch((err) => {
        showToast(err.message, "red.700");
        setSubmitting(false);
      });
  };
  const showToast = (msg, color) => {
    Toast.show({
      title: msg,
      placement: "top",
      backgroundColor: `${color}`,
      accessibilityAnnouncement: "Error",
    });
  };
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
          Waste Pick-up Request
        </Heading>
      </HStack>
      <FormControl m={2} alignSelf={"center"}>
        <FormControl.Label m={2}>
          What Category are we picking?
        </FormControl.Label>
        <FormControl.HelperText m={2}>
          (Select all that apply)
        </FormControl.HelperText>
        <Radio.Group onChange={(option) => addtoCategories(option)}>
          <Flex
            flexWrap={"wrap"}
            flexDirection={"row"}
            _text={{
              fontWeight: "900",
            }}
            m={2}
          >
            <Radio
              value="Food waste"
              my={1}
              colorScheme={"green"}
              icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
            >
              Food waste
            </Radio>
            <Radio
              value="Yard waste"
              my={1}
              colorScheme={"green"}
              icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
            >
              Yard waste
            </Radio>
            <Radio value="Plastic" my={1}>
              Plastic
            </Radio>
            <Radio value="Metal" my={1}>
              Matel
            </Radio>
            <Radio
              value="Hazardous"
              my={1}
              colorScheme={"green"}
              icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
            >
              Hazardous
            </Radio>
            <Radio value="Glass" my={1}>
              Glass
            </Radio>
            <Radio
              value="Paper"
              my={1}
              colorScheme={"green"}
              icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
            >
              Paper
            </Radio>
            <Radio
              value="Polythen Bags"
              my={1}
              colorScheme={"green"}
              icon={<Icon as={<MaterialCommunityIcons name="check" />} />}
            >
              Polythen Bags
            </Radio>
          </Flex>
        </Radio.Group>
        <FormControl.Label m={2}>
          What is the Quanity in Kilogram?
        </FormControl.Label>

        <Input
          m={2}
          keyboardType="numeric"
          value={quantity && quantity}
          onChangeText={(value) => setQuantity(value)}
          placeholder="Enter Quantity"
          fontSize={"16"}
          backgroundColor={"white"}
          borderColor={"green.700"}
          InputRightElement={
            <Icon
              as={<MaterialCommunityIcons name="weight-kilogram" />}
              size={25}
              m={2}
            />
          }
        />
        <FormControl.Label m={2}>
          Where are we picking the waste?
        </FormControl.Label>
        <Pressable
          mb={"1.5"}
          alignSelf={"center"}
          size="16"
          rounded="sm"
          bg={"white"}
          width={"96%"}
          height={50}
          alignItems={"center"}
          padding={1}
          _pressed={{
            backgroundColor: "gray.200",
          }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          borderColor={"green.700"}
          borderWidth={1}
        >
          <Text fontSize={"18"} color="gray.500" fontWeight={"800"}>
            Location
          </Text>
          <Icon
            mb="1"
            as={<Ionicons name={"location"} />}
            color="gray.500"
            size={25}
          />
        </Pressable>
        <Button
          m={5}
          height={50}
          _pressed={{ backgroundColor: "gold" }}
          backgroundColor="green.700"
          onPress={submitRequest}
          isLoading={submitting}
        >
          <Heading color={"white"}>Next</Heading>
        </Button>
      </FormControl>
    </NativeBaseProvider>
  );
};

export default PickUp;
