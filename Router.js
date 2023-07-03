import { NavigationContainer } from '@react-navigation/native';
import {RootSiblingParent} from "react-native-root-siblings";
import {Provider} from "react-redux";
import {store} from "./store";
import {AppScreens} from "./AppScreens";
import {useAuth} from "./src/contexts/Auth";
import {AuthScreens} from "./AuthScreens";


export const Router = () => {
    const {authData,loading} = useAuth();
    return (
        <NavigationContainer>
            <RootSiblingParent>

                <Provider store={store}>
                   {authData?.token ? <AuthScreens />  : <AppScreens />}
                </Provider>

            </RootSiblingParent>
        </NavigationContainer>
    )
}