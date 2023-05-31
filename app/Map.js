import React, { memo } from "react";
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
  View,
} from "native-base";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
const Map = ({ back }) => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={"transparent"} barStyle={"dark-content"} />
      <View width={"100%"} height={"100%"}>
        <MapView
          showsCompass={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          style={{ width: "100%", height: "100%" }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 0.3476,
            longitude: 32.5825,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Icon
            as={Ionicons}
            name="arrow-back-circle"
            size={100}
            color="green.700"
          />
        </MapView>
      </View>
    </NativeBaseProvider>
  );
};

export default memo(Map);
