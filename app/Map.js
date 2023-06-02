import React, { memo, useState } from "react";
import { Button, Image, Container, Text, Center } from "native-base";
import { StatusBar } from "expo-status-bar";
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
  Actionsheet,
} from "native-base";
import { View } from "react-native";

const Map = ({ back }) => {
  const [openOverlay, setOpen] = useState(false);
  const showOverLay = () => {
    setOpen(!openOverlay);
  };
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="transparent" style={"dark-content"} />
      <View width={"100%"} height={"100%"}></View>
      <Actionsheet
        isOpen={openOverlay}
        onClose={showOverLay}
        disableOverlay={true}
        useRNModal={true}
      >
        <Actionsheet.Content borderTopRadius="0">
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Track Location
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </NativeBaseProvider>
  );
};

export default memo(Map);
