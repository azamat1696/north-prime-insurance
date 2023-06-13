import {View} from "react-native";
import MainScreen from "./src/screens/MainScreen";
import { store } from './store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from "./src/screens/Test";
import {NativeWindStyleSheet} from "nativewind";
NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
          <Provider store={store}>
          <Stack.Navigator initialRouteName="MainScreen">
                      <Stack.Screen name="MainScreen" component={MainScreen} />
                      <Stack.Screen name="TestScreen" component={Test} />
          </Stack.Navigator>
            </Provider>
      </NavigationContainer>
  );
}

