import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { GetStarted } from "../../../screens/GetStarted/GetStarted";
import { CreateAccount } from "../../../screens/CreateAccount/CreateAccount";
import { AuthParamList } from "../../../helpers/AuthParmList";
import { VerifyAccount } from "../../../screens/VerifyAccount/VerifyAccount";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
    </Stack.Navigator>
  );
};
