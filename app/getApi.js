import Constants from "expo-constants";

const apiKey = Constants.expoConfig.extra.env.API_URL;

const getApi = () => {
  return apiKey;
};
export default getApi;
