import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const EditProfile = () => {
  const nav = useNavigation();
  const user = useSelector((state) => state.login.user);
  const [state, setState] = useState({ showForm: false });
  useEffect(() => {
    setTimeout(() => setState({ ...state, showForm: true }), 100);
  }, []);
  const Form = () => {
    return (
      <FormControl>
        <FormControl.Label m={2}>First Name</FormControl.Label>
        <Input value={user.first_name} m={2} borderColor={"green.700"} />
        <FormControl.Label m={2}>Last Name</FormControl.Label>
        <Input value={user.last_name} m={2} borderColor={"green.700"} />
        <FormControl.Label m={2}>Email Address</FormControl.Label>
        <Input value={user.email} m={2} borderColor={"green.700"} />
        <FormControl.Label m={2}>Phone Number</FormControl.Label>
        <Input value={user.phone_number} m={2} borderColor={"green.700"} />
        <Button
          m={5}
          backgroundColor={"green.700"}
          _pressed={{ backgroundColor: "gold" }}
        >
          Update
        </Button>
      </FormControl>
    );
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
          {user.last_name} {user.first_name}
        </Heading>
      </HStack>
      {state.showForm === true ? (
        <Form />
      ) : (
        <HStack space={2} justifyContent="center" mt="1/2">
          <Spinner color="green.700" size={"lg"} />
          <Heading color="green.700" fontSize="md">
            Just a moment...
          </Heading>
        </HStack>
      )}
    </NativeBaseProvider>
  );
};

export default EditProfile;
