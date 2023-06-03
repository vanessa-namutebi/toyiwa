import React, { useState, useCallback, memo, useEffect } from "react";
import { StatusBar, Button, FormControl, Center, Input } from "native-base";
import { Icon, Pressable, Toast, Flex, Skeleton, Checkbox } from "native-base";
import { NativeBaseProvider, Heading, VStack, HStack, Text } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
  const [renderForm, setRenderForm] = useState(false);

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

    axios
      .post(`${apiKey}/pickuprequest`, request)
      .then((response) => {
        if (response.data.success === false) {
          showToast(response.data.message, "red.700");
        } else {
          showToast(response.data.message, "green.700");
        }
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

  useEffect(() => {
    setTimeout(() => {
      setRenderForm(true);
    }, 100);
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

        <Heading alignSelf="center" color="green.700">
          Waste Pick-up Request
        </Heading>
      </HStack>
      {renderForm ? (
        <FormControl m={2} alignSelf={"center"}>
          <FormControl.Label m={2}>
            What Category are we picking?
          </FormControl.Label>
          <FormControl.HelperText m={2}>
            (Select all that apply)
          </FormControl.HelperText>
          <Text>Selected: {categories.length}</Text>
          <Checkbox.Group
            colorScheme="green"
            defaultValue={categories}
            onChange={(values) => {
              setCategories(values);
            }}
          >
            <Flex flexWrap={"wrap"} flexDirection={"row"} m={2}>
              <Checkbox value="Yard waste" my="1">
                Yard waste
              </Checkbox>
              <Checkbox value="Metal" my="1">
                Metal
              </Checkbox>
              <Checkbox value="Hazardous" my="1">
                Hazardous
              </Checkbox>
              <Checkbox value="Plastic" my="1">
                Plastic
              </Checkbox>
              <Checkbox value="Food waste" my="1">
                Food waste
              </Checkbox>
              <Checkbox value="Glass" my="1">
                Glass
              </Checkbox>
              <Checkbox value="Paper" my="1">
                Paper
              </Checkbox>
              <Checkbox value=" Polythen Bags" my="1">
                Polythen Bags
              </Checkbox>
            </Flex>
          </Checkbox.Group>

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
            isDisabled={submitting}
            isLoadingText="Submitting"
            _loading={{ backgroundColor: "#000000c0", color: "black" }}
          >
            <Heading color={"white"}>Next</Heading>
          </Button>
        </FormControl>
      ) : (
        <Center w="100%">
          <VStack
            w="95%"
            maxW="400"
            borderWidth="1"
            space={8}
            overflow="hidden"
            rounded="md"
            _light={{
              borderColor: "coolGray.200",
            }}
          >
            <Skeleton h="40" />
            <Skeleton.Text px="4" />
            <Skeleton px="4" my="4" rounded="md" startColor="green.200" />
          </VStack>
        </Center>
      )}
    </NativeBaseProvider>
  );
};

export default PickUp;
