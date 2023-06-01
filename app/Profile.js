import React, { memo, useState } from "react";

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
  StatusBar,
  Center,
  Avatar,
  Text,
  Pressable,
  Actionsheet,
  Button,
} from "native-base";
import Footer from "./components/Footer";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import { useSelector } from "react-redux";
const Profile = ({ toHome }) => {
  const user = useSelector((state) => state.login.user);
  const [isLogout, setIsLogout] = useState(false);

  const showShowOut = () => {
    setIsLogout(!isLogout);
  };
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={"green"} barStyle={"light-content"} />
      <Box height={"88%"}>
        <Center direction="row" mb="2.5" mt="1.5" space={3}>
          <HStack
            size="16"
            bg="white"
            rounded="sm"
            shadow={"3"}
            width={"96%"}
            height={150}
          >
            <Avatar
              bg="gray.600"
              alignSelf="center"
              size={"xl"}
              source={user.image ? user.image : ""}
              m={2}
            >
              <Heading color="white" fontSize={40}>
                {user.last_name.charAt(0)}
                {user.first_name.charAt(0)}
              </Heading>
            </Avatar>
            <Center>
              <Heading color={"gray.600"}>
                {user.first_name} {user.last_name}
              </Heading>
            </Center>
          </HStack>
        </Center>
        <Pressable
          mb={"1.5"}
          alignSelf={"center"}
          size="16"
          rounded="sm"
          bg={"white"}
          shadow={"3"}
          width={"98%"}
          height={60}
          alignItems={"center"}
          padding={1}
          onPress={showShowOut}
          _pressed={{
            backgroundColor: "gray.200",
          }}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"18"} color="gray.500" fontWeight={"800"}>
            Edit Profile
          </Text>
          <Icon
            mb="1"
            as={<MaterialCommunityIcons name={"account-edit"} />}
            color="gray.500"
            size={30}
          />
        </Pressable>
        <Pressable
          mb={"1.5"}
          alignSelf={"center"}
          size="16"
          rounded="sm"
          bg={"white"}
          shadow={"3"}
          width={"98%"}
          height={60}
          alignItems={"center"}
          padding={1}
          onPress={showShowOut}
          _pressed={{
            backgroundColor: "gray.200",
          }}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"18"} color="gray.500" fontWeight={"800"}>
            My Location
          </Text>
          <Icon
            mb="1"
            as={<Ionicons name={"md-location"} />}
            color="gray.500"
            size={30}
          />
        </Pressable>
        <Pressable
          mb={"1.5"}
          alignSelf={"center"}
          size="16"
          rounded="sm"
          bg={"white"}
          shadow={"3"}
          width={"98%"}
          height={60}
          alignItems={"center"}
          padding={1}
          onPress={showShowOut}
          _pressed={{
            backgroundColor: "gray.200",
          }}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"18"} color="gray.500" fontWeight={"800"}>
            Logout
          </Text>
          <Icon
            mb="1"
            as={<Ionicons name={"log-out-sharp"} />}
            color="gray.500"
            size={30}
          />
        </Pressable>
      </Box>
      <Footer selected={3} toHome={toHome} />
      <Actionsheet isOpen={isLogout} onClose={showShowOut}>
        <Actionsheet.Content height={250}>
          <Text
            fontSize="16"
            color="gray.500"
            _dark={{
              color: "gray.300",
            }}
          >
            Are you sure you want lo logout
          </Text>
          <Center w="100%" h={"80%"} px={4} justifyContent="center">
            <Button
              width={"90%"}
              height={50}
              bg="white"
              borderWidth={1}
              borderColor={"green.700"}
              _pressed={{ backgroundColor: "gold" }}
            >
              <Heading color={"green.700"}>Logout</Heading>
            </Button>
          </Center>
        </Actionsheet.Content>
      </Actionsheet>
    </NativeBaseProvider>
  );
};

export default memo(Profile);
