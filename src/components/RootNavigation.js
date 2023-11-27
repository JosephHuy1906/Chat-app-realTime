import React from "react";
import ChatStack from "./ChatStack";
import { NavigationContainer } from "@react-navigation/native";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
