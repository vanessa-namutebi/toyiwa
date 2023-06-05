import React, { useState, useCallback, memo } from "react";
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
  Toast,
  Divider,
  Spinner,
} from "native-base";
import axios from "axios";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import getApi from "./getApi";

const apiKey = getApi();

function Register({ login }) {
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const [isSelect, setIsSelect] = useState(false);
  //values
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmmiting, setIsSubmitting] = useState(false);
  const showSelectImage = useCallback(() => {
    setIsSelect(!isSelect);
  });
  const handleFormChange = useCallback((setState, value) => {
    setState(value);
  });
  const handleSubmit = async () => {
    if (!fname || !lname || !email || !phoneNumber || !password || !confirm) {
      showToast("Please fill all the required fields!", "red.500");
      return;
    }
    if (confirm !== password) {
      showToast("Passwords do not match!", "red.500");
      return;
    }
    setIsSubmitting(true);
    await axios
      .post(`${apiKey}/register`, {
        first_name: fname,
        last_name: lname,
        email: email,
        phone_number: phoneNumber,
        password: password,
      })
      .then((response) => {
        setIsSubmitting(false);
        if (response.data.success === true) {
          showToast(response.data.message, "green.500");
          login();
        } else {
          showToast(response.data.message, "red.500");
        }
      })
      .catch((err) => {
        setIsSubmitting(false);
        showToast(err.message, "red.500");
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
      <StatusBar barStyle={"light-content"} backgroundColor={"green"} />
      <ScrollView>
        <FormControl width={"100%"} alignSelf={"center"} mt={"16"}>
          {/* <Pressable onPress={showSelectImage}>
            <Avatar
              bg="purple.600"
              alignSelf="center"
              size="2xl"
              source={{
                uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
              }}
              m={2}
            >
              RB
            </Avatar>
          </Pressable> */}
          <HStack width={"90%"}>
            <Box width={"50%"} m={2}>
              <FormControl.Label m={2}>First Name</FormControl.Label>
              <Input
                value={fname}
                onChangeText={(value) => handleFormChange(setFname, value)}
                width={"100%"}
                placeholder="First name"
                fontSize={"14"}
                borderColor="green.700"
              />
            </Box>
            <Box width={"50%"} m={2}>
              <FormControl.Label m={2}>Last Name</FormControl.Label>
              <Input
                value={lname}
                onChangeText={(value) => handleFormChange(setLname, value)}
                width={"100%"}
                placeholder="Last name"
                fontSize={"14"}
                borderColor="green.700"
              />
            </Box>
          </HStack>
          <VStack m={2}>
            <FormControl.Label>Email Address</FormControl.Label>
            <Input
              value={email}
              onChangeText={(value) => handleFormChange(setEmail, value)}
              fontSize={"14"}
              placeholder="Email Address"
              borderColor={"green.700"}
              InputLeftElement={
                <Icon
                  m={2}
                  as={MaterialIcons}
                  name="email"
                  color="green.700"
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
              }
            />
          </VStack>
          <VStack m={2}>
            <FormControl.Label>Phone Number</FormControl.Label>
            <Input
              value={phoneNumber}
              onChangeText={(value) => handleFormChange(setPhone, value)}
              fontSize={"14"}
              placeholder="Phone Number"
              borderColor={"green.700"}
              InputLeftElement={
                <Icon
                  m={2}
                  as={MaterialIcons}
                  name="phone"
                  color="green.700"
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
              }
            />
          </VStack>
          <VStack m={2}>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              value={password}
              onChangeText={(value) => handleFormChange(setPassword, value)}
              type={showPass ? "text" : "password"}
              placeholder="Set new Password"
              fontSize={"14"}
              borderColor={"green.700"}
              InputLeftElement={
                <Icon
                  m={2}
                  as={Ionicons}
                  name="finger-print-sharp"
                  color="green.700"
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
              }
              InputRightElement={
                <Pressable onPress={() => setShowPass(!showPass)}>
                  <Icon
                    m={2}
                    as={Ionicons}
                    name={showPass ? "ios-eye-off" : "ios-eye"}
                    color="green.700"
                    _dark={{
                      color: "warmGray.50",
                    }}
                  />
                </Pressable>
              }
            />
          </VStack>
          <VStack m={2}>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              value={confirm}
              onChangeText={(value) => handleFormChange(setConfirm, value)}
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              fontSize={"14"}
              borderColor={"green.700"}
              InputLeftElement={
                <Icon
                  m={2}
                  as={Ionicons}
                  name="finger-print-sharp"
                  color="green.700"
                  _dark={{
                    color: "warmGray.50",
                  }}
                />
              }
              InputRightElement={
                <Pressable onPress={() => setShowConfirm(!showConfirm)}>
                  <Icon
                    m={2}
                    as={Ionicons}
                    name={showConfirm ? "ios-eye-off" : "ios-eye"}
                    color="green.700"
                    _dark={{
                      color: "warmGray.50",
                    }}
                  />
                </Pressable>
              }
            />
          </VStack>
          <Button
            m={5}
            bg="green.700"
            onPress={handleSubmit}
            isLoading={isSubmmiting}
            isDisabled={isSubmmiting}
            _pressed={{ backgroundColor: "gold" }}
          >
            <Heading color="white">Sign Up</Heading>
          </Button>
        </FormControl>
      </ScrollView>
      {/* <Actionsheet isOpen={isSubmmiting}>
        <Actionsheet.Content height={200}>
          <Heading>Creating Account</Heading>

          <Actionsheet.Item>
            <Spinner size={"lg"} />
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet> */}
      <Actionsheet isOpen={isSelect} onClose={showSelectImage}>
        <Actionsheet.Content>
          <Heading>Creating Account</Heading>

          <Actionsheet.Item
            startIcon={
              <Icon m={2} as={Ionicons} name="ios-camera" size={"lg"} />
            }
          >
            Take Photo
          </Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon m={2} as={Ionicons} name="ios-image-outline" size={"lg"} />
            }
          >
            Choose from gallery
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={showSelectImage}
            startIcon={<Icon m={2} as={Ionicons} name="close" size={"lg"} />}
          >
            Cancel
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </NativeBaseProvider>
  );
}
export default memo(Register);
