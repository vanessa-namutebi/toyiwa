import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const ThisLocation = () => {
  const [myLocation, setMyLocation] = useState({});

  useEffect(() => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setMyLocation(location);
    };
  }, []);

  return myLocation;
};

export default ThisLocation;
