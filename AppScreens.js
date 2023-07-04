import MainScreen from "./src/screens/MainScreen";
import Test from "./src/screens/Test";
import {LoginScreen} from "./src/screens/LoginScreen";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RegisterScreen} from "./src/screens/RegisterScreen";
import Test2 from "./src/screens/Test2";
export function AppScreens(){
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen  name="MainScreen" component={MainScreen} />
            <Stack.Screen name="TestScreen" component={Test} />
            <Stack.Screen name="Test2" component={Test2} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

         </Stack.Navigator>

    )
}