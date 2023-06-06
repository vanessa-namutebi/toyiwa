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
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../state/LoginSlice";

const Profile = ({ toHome, back_to_top }) => {
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const [isLogout, setIsLogout] = useState(false);
  const [loading, setLoading] = useState(false);

  const showShowOut = () => {
    setIsLogout(!isLogout);
  };
  const handleLogout = () => {
    setLoading(true);
    dispatch(logout());
    setIsLogout(!isLogout);
    back_to_top();
  };
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={"green"} barStyle={"light-content"} />
      {user !== null && (
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
            rounded="sm"
            bg={"white"}
            shadow={"9"}
            width={"98%"}
            height={50}
            alignItems={"center"}
            padding={1}
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
            rounded="sm"
            bg={"white"}
            shadow={"9"}
            width={"98%"}
            height={50}
            alignItems={"center"}
            padding={1}
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
            rounded="sm"
            bg={"white"}
            shadow={"9"}
            width={"98%"}
            height={50}
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
      )}
      <Footer selected={3} toHome={toHome} />
      <Actionsheet isOpen={isLogout} onClose={showShowOut} borderRadius={"sm"}>
        <Actionsheet.Content height={200}>
          <Heading fontSize="20" color="gray.900">
            Are you sure you want lo logout?
          </Heading>
          <Center w="100%" h={"80%"} px={4} justifyContent="center">
            <Button
              width={"90%"}
              height={50}
              bg="white"
              borderWidth={1}
              borderColor={"green.700"}
              _pressed={{ backgroundColor: "gold" }}
              onPress={handleLogout}
              isLoading={loading}
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
