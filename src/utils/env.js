import { Platform } from "react-native";

const liveHost = "yourHost";
const localHost = "yourHost";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = false;
export const host = liveHost;
