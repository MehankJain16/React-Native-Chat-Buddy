import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import {
  PRIMARY_COLOR,
  PRIMARY_DARK_COLOR,
  WHITE_COLOR,
} from "../helpers/Constants";
import Animated from "react-native-reanimated";
import { TapHandler } from "./TapHandler";

interface CustomButtonProps {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    marginVertical: 12,
    marginHorizontal: 25,
  },
  buttonText: {
    paddingVertical: 12,
    textAlign: "center",
    color: WHITE_COLOR,
    fontSize: 13,
    fontFamily: "OpenSans-SemiBold",
  },
});

export const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  text,
  style,
  textStyle,
}) => {
  return (
    <TapHandler onPress={onPress}>
      {/* <Animated.View style={[style]}> */}
      <LinearGradient
        colors={[PRIMARY_COLOR, PRIMARY_DARK_COLOR]}
        style={[styles.buttonContainer, style]}
      >
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      </LinearGradient>
      {/* </Animated.View> */}
    </TapHandler>
  );
};
