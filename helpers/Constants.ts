import { Dimensions, Platform } from "react-native";

// Platform
export const PLATFORM = Platform.OS;

// Dimensions
const { width, height } = Dimensions.get("window");

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const GET_STARTED_VIEW_HEIGHT = 250;
export const CREATE_ACCOUNT_VIEW_HEIGHT = 366;

// Colours
export const PRIMARY_COLOR = "#394DC4";
export const PRIMARY_DARK_COLOR = "#394DC4";
export const ACCENT_COLOR = "#455EEF";
export const TEXT_INPUT_COLOR = "#E9E9E9";
export const WHITE_COLOR = "#FFFFFF";
export const BLACK_COLOR = "#000000";
export const GREY_COLOR = "#7F7F7F";

// Strings
export const APP_NAME = "Chat Buddy";
export const GET_STARTED_HELPER_TEXT =
  "New ways to interact with\nfamily and friends";
export const CREATE_ACCOUNT_HELPER_TEXT =
  "We need to send you the OTP to\nauthenticate your acount";
export const CREATE_ACCOUNT_HEADING_TEXT = "Create Account";
export const VERIFY_ACCOUNT_HELPER_TEXT = "Enter the OTP sent to\n";
export const VERIFY_ACCOUNT_HEADING_TEXT = "Verify Account";
