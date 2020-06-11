import React, { useRef } from "react";
import Animated, {
  useCode,
  block,
  cond,
  eq,
  onChange,
  call,
} from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";
import { onGestureEvent } from "react-native-redash";

interface TapHandlerProps {
  onPress: () => void;
}

export const TapHandler: React.FC<TapHandlerProps> = ({
  children,
  onPress,
}) => {
  const gestureState = useRef(new Animated.Value(State.UNDETERMINED));
  const gestureHandler = onGestureEvent({ state: gestureState.current });
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
    <TapGestureHandler {...gestureHandler}>
      <Animated.View>{children}</Animated.View>
    </TapGestureHandler>
  );
};
