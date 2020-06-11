import React, { useRef, useState } from "react";
import Animated, {
  interpolate,
  useCode,
  cond,
  eq,
  set,
  block,
  call,
} from "react-native-reanimated";
import { Text, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import {
  PRIMARY_COLOR,
  WHITE_COLOR,
  APP_NAME,
  SCREEN_HEIGHT,
  GET_STARTED_VIEW_HEIGHT,
  CREATE_ACCOUNT_VIEW_HEIGHT,
} from "../Constants";
import {
  withTimingTransition,
  onGestureEvent,
  withSpringTransition,
} from "react-native-redash";
import { GetStarted } from "../components/GetStarted/GetStarted";
import { CustomButton } from "../components/CustomButton";
import { State } from "react-native-gesture-handler";
import { TapHandler } from "../components/TapHandler";

interface AuthScreenProps {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
});

export const AuthScreen: React.FC<AuthScreenProps> = ({}) => {
  const [currView, setCurrView] = useState({
    getStarted: true,
    createAccount: false,
    verifyAccount: false,
  });

  const startAnim = useRef(new Animated.Value<0 | 1>(0));
  const startTrans = withSpringTransition(startAnim.current);

  const getStarted = interpolate(startTrans, {
    inputRange: [0, 0.5, 1],
    outputRange: [0, GET_STARTED_VIEW_HEIGHT, CREATE_ACCOUNT_VIEW_HEIGHT],
  });

  const gestureState = useRef(new Animated.Value(State.UNDETERMINED));
  const gestureHandler = onGestureEvent({ state: gestureState.current });

  useCode(() => {
    return block([
      cond(eq(startAnim.current, 0), set(startAnim.current, 0.5)),
      cond(eq(gestureState.current, State.END), [
        cond(eq(startAnim.current, 0.5), set(startAnim.current, 1)),
      ]),
    ]);
  }, []);

  const onPress = () => {
    if (currView.getStarted === true) {
      console.log("errrr");
      setCurrView({
        getStarted: false,
        createAccount: true,
        verifyAccount: false,
      });
    }
    if (currView.createAccount === true) {
      console.log("err");
      setCurrView({
        getStarted: false,
        createAccount: false,
        verifyAccount: true,
      });
    }
  };

  console.log(currView);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="light-content" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: "Microsoft-YaHei-Bold",
            fontSize: 37,
            color: WHITE_COLOR,
            textAlign: "center",
            marginTop: 30,
          }}
        >
          {APP_NAME}
        </Text>
      </View>
      {/* Animation View Which Transition Through Screens */}
      <Animated.View
        style={{
          backgroundColor: WHITE_COLOR,
          height: getStarted,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {/* Main Content Components Like GetStarted, CreateAccount etc. */}
        <TapHandler
          {...{
            onPress,
            animation: startAnim.current,
          }}
        >
          {currView.getStarted && (
            <Animated.View>
              <Text>Get Started</Text>
            </Animated.View>
          )}

          {currView.createAccount && (
            <Animated.View>
              <Text>Send Otp</Text>
            </Animated.View>
          )}

          {currView.verifyAccount && (
            <Animated.View>
              <Text>Verify Otp</Text>
            </Animated.View>
          )}
        </TapHandler>
      </Animated.View>
    </SafeAreaView>
  );
};
