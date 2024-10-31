import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {HomeScreen,FitnessDetailsScreen} from '../../screens'


const RootStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={{ HomeScreen }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ gestureEnabled: false }}/>
          <Stack.Screen name="FitnessDetailsScreen" component={FitnessDetailsScreen} options={{ gestureEnabled: false }}/>
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default RootStack;