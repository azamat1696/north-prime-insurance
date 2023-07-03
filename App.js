import {NativeWindStyleSheet} from "nativewind";
import {AuthProvider} from "./src/contexts/AuthContext";
import {Router} from "./Router";
import 'react-native-gesture-handler';
 NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {

   return (
      <AuthProvider>
           <Router />
      </AuthProvider>
  );
}

