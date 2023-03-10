import { Platform } from "react-native";

const liveHost = "https://us-central1-localgems-ecf6c.cloudfunctions.net";
const localHost = "http://127.0.0.1:5001/localgems-ecf6c/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = liveHost;