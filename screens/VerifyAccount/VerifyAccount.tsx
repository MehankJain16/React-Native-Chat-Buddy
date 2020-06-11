import React, { useRef } from "react";
import Animated, {
  interpolate,
  useCode,
  block,
  cond,
  eq,
  set,
  SpringUtils,
} from "react-native-reanimated";
import {
  PRIMARY_COLOR,
  WHITE_COLOR,
  CREATE_ACCOUNT_VIEW_HEIGHT,
  BLACK_COLOR,
  GREY_COLOR,
  VERIFY_ACCOUNT_HEADING_TEXT,
  VERIFY_ACCOUNT_HELPER_TEXT,
} from "../../helpers/Constants";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { withSpringTransition } from "react-native-redash";
import { CustomButton } from "../../components/CustomButton";
// import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "../../helpers/AuthParmList";
import { HeaderBackArrow } from "../../components/HeaderBackArrow";
import { RouteProp } from "@react-navigation/native";

interface VerifyAccountProps {
  // navigation: StackNavigationProp<AuthParamList, "CreateAccount">;
  navigation: any;
  route: RouteProp<AuthParamList, "VerifyAccount">;
}

export const VerifyAccount: React.FC<VerifyAccountProps> = ({
  navigation,
  route,
}) => {
  const mobileNumber = route.params.mobileNumber;
  const val = useRef(new Animated.Value<0 | 1>(0));
  const anim = withSpringTransition(val.current, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(15),
  });

  const transition = interpolate(anim, {
    inputRange: [0, 1],
    outputRange: [0, CREATE_ACCOUNT_VIEW_HEIGHT],
  });

  useCode(() => block([cond(eq(val.current, 0), set(val.current, 1))]), []);

  const onPress = () => {
    console.log("Account Setup");
  };

  const handleBackArrowPress = () => {
    navigation.navigate("CreateAccount", { doAnim: true });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: PRIMARY_COLOR }}>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="light-content" />
      <HeaderBackArrow onPress={handleBackArrowPress} />
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
            marginTop: 40,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Microsoft-YaHei-Bold",
              fontSize: 26,
              textAlign: "center",
              color: BLACK_COLOR,
            }}
          >
            {VERIFY_ACCOUNT_HEADING_TEXT}
          </Text>
          <Text
            style={{
              marginTop: 12,
              fontFamily: "Microsoft-YaHei-Bold",
              fontSize: 14,
              textAlign: "center",
              color: GREY_COLOR,
            }}
          >
            {VERIFY_ACCOUNT_HELPER_TEXT}
            {mobileNumber}
          </Text>
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            scaleX: anim,
            scaleY: anim,
          }}
        >
          <CustomButton onPress={onPress} text="Verify OTP" />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};
