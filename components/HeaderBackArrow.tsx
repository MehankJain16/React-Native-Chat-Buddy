import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useCode,
  block,
  onChange,
  cond,
  eq,
  call,
} from "react-native-reanimated";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import { onGestureEvent } from "react-native-redash";
import { Ionicons as Icon } from "@expo/vector-icons";
import { WHITE_COLOR } from "../helpers/Constants";

interface HeaderBackArrowProps {
  onPress: () => void;
}

const styles = StyleSheet.create({
  backArrow: {
    position: "absolute",
    height: 60,
    width: 60,
    top: 26,
    left: 32,
    zIndex: 100,
  },
});

export const HeaderBackArrow: React.FC<HeaderBackArrowProps> = ({
  onPress,
}) => {
  const gestureState = useRef(new Animated.Value(State.UNDETERMINED));
  const gestureAnim = onGestureEvent({ state: gestureState.current });
  useCode(
    () =>
      block([
        onChange(
          gestureState.current,
          cond(eq(gestureState.current, State.END), call([], onPress))
        ),
      ]),
    []
  );
  return (
    <TapGestureHandler {...gestureAnim}>
      <Animated.View style={{ ...styles.backArrow }}>
        <Icon name="md-arrow-back" size={24} color={WHITE_COLOR} />
      </Animated.View>
    </TapGestureHandler>
  );
};
