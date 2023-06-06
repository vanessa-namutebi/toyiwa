import React, { useState, useCallback, memo, useEffect } from "react";
import { StatusBar, Button, Center } from "native-base";
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
import { useNavigation } from "@react-navigation/native";
const apiKey = getApi();

function Register({ login }) {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  //state
  const [isSelect, setIsSelect] = useState(false);
  const [account, setAccount] = useState({});
  const [state, setState] = useState({
    showPass: false,
    showConfirm: false,
    isSubmmiting: false,
    showForm: false,
  });

  const showSelectImage = useCallback(() => {
    setIsSelect(!isSelect);
  });

  const handleSubmit = async () => {
    if (
      !account.last_name ||
      !account.last_name ||
      !account.email ||
      !account.phone_number ||
      !account.password ||
      !account.confirm
    ) {
      showToast("Please fill all the required fields!", "red.500");
      return;
    }
    if (account.confirm !== account.password) {
      showToast("Passwords do not match!", "red.500");
      return;
    }
    setState({ ...state, isSubmmiting: true });
    await axios
      .post(`${apiKey}/register`, account)
      .then((response) => {
        setState({ ...state, isSubmmiting: false });
        if (response.data.success === true) {
          showToast(response.data.message, "green.500");
          login();
        } else {
          showToast(response.data.message, "red.500");
          setState({ ...state, isSubmmiting: false });
        }
      })
      .catch((err) => {
        setState({ ...state, isSubmmiting: false });
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
  useEffect(() => {
    setTimeout(() => setState({ ...state, showForm: true }), 100);
  }, []);
  const nav = useNavigation();
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} backgroundColor={"green"} />
      <Center direction="row" mb="2.5" mt="1.5" space={3} height={"15%"}>
        <HStack
          height={"100%"}
          size="16"
          backgroundColor="white"
          rounded="sm"
          shadow={"3"}
          shad
          width={"100%"}
        >
          <Pressable
            width={50}
            m={2}
            height={50}
            mt={"10"}
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
            onPress={() => nav.goBack()}
          >
            <Icon
              as={Ionicons}
              name="chevron-back-outline"
              size={30}
              color="green.700"
            />
          </Pressable>

          <Heading alignSelf="center" color="green.700">
            Create Account
          </Heading>
        </HStack>
      </Center>
      <ScrollView>
        {state.showForm === true ? (
          <FormControl width={"100%"} alignSelf={"center"}>
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
                  value={account.first_name}
                  onChangeText={(value) =>
                    setAccount({ ...account, first_name: value })
                  }
                  width={"100%"}
                  placeholder="First name"
                  fontSize={"14"}
                  borderColor="green.700"
                />
              </Box>
              <Box width={"50%"} m={2}>
                <FormControl.Label m={2}>Last Name</FormControl.Label>
                <Input
                  value={account.last_name}
                  onChangeText={(value) =>
                    setAccount({ ...account, last_name: value })
                  }
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
                value={account.email}
                onChangeText={(value) =>
                  setAccount({ ...account, email: value })
                }
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
                value={account.phone_number}
                onChangeText={(value) =>
                  setAccount({ ...account, phone_number: value })
                }
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
                value={account.password}
                onChangeText={(value) =>
                  setAccount({ ...account, password: value })
                }
                type={state.showPass ? "text" : "password"}
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
                  <Pressable
                    onPress={() =>
                      setState({ ...state, showPass: !state.showPass })
                    }
                  >
                    <Icon
                      m={2}
                      as={Ionicons}
                      name={state.showPass ? "ios-eye-off" : "ios-eye"}
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
                value={account.confirm}
                onChangeText={(value) =>
                  setAccount({ ...account, confirm: value })
                }
                type={state.showConfirm ? "text" : "password"}
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
                  <Pressable
                    onPress={() =>
                      setState({ ...state, showConfirm: !state.showConfirm })
                    }
                  >
                    <Icon
                      m={2}
                      as={Ionicons}
                      name={state.showConfirm ? "ios-eye-off" : "ios-eye"}
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
              isLoading={state.isSubmmiting}
              isDisabled={state.isSubmmiting}
              _pressed={{ backgroundColor: "gold" }}
            >
              <Heading color="white">Sign Up</Heading>
            </Button>
          </FormControl>
        ) : (
          <HStack space={2} justifyContent="center" mt="1/2">
            <Spinner color="green.700" size={"lg"} />
            <Heading color="green.700" fontSize="md">
              Just a moment...
            </Heading>
          </HStack>
        )}
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
