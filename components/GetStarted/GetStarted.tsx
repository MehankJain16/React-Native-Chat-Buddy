import React, { useRef } from "react";
import Animated, {
  interpolate,
  useCode,
  block,
  cond,
  eq,
  set,
} from "react-native-reanimated";
import {
  PRIMARY_COLOR,
  WHITE_COLOR,
  GET_STARTED_VIEW_HEIGHT,
  APP_NAME,
  GREY_COLOR,
  GET_STARTED_HELPER_TEXT,
} from "../../Constants";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { withSpringTransition } from "react-native-redash";
import { CustomButton } from "../CustomButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "../AuthParmList";

interface GetStartedProps {
  navigation: StackNavigationProp<AuthParamList, "GetStarted">;
}

export const GetStarted: React.FC<GetStartedProps> = ({ navigation }) => {
  const val = useRef(new Animated.Value<0 | 1>(0));
  const anim = withSpringTransition(val.current);

  const transition = interpolate(anim, {
    inputRange: [0, 1],
    outputRange: [0, GET_STARTED_VIEW_HEIGHT],
  });

  useCode(() => block([cond(eq(val.current, 0), set(val.current, 1))]), []);

  const onPress = () => {
    // navigation.push("CreateAccount")
    navigation.navigate("CreateAccount");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: PRIMARY_COLOR }}>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="light-content" />
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          scaleX: anim,
          scaleY: anim,
        }}
      >
        <Text
          style={{
            fontFamily: "Microsoft-YaHei-Bold",
            fontSize: 30,
            textAlign: "center",
            color: WHITE_COLOR,
          }}
        >
          {APP_NAME}
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: WHITE_COLOR,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: transition,
        }}
      >
        <Animated.View
          style={{
            marginTop: 47,
            alignItems: "center",
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Microsoft-YaHei-Bold",
              fontSize: 23,
              textAlign: "left",
              color: GREY_COLOR,
            }}
          >
            {GET_STARTED_HELPER_TEXT}
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            scaleX: anim,
          }}
        >
          <CustomButton onPress={onPress} text="Get Started" />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};
