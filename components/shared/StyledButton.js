import {View, Text, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export function StyledButton({label,callbackNavigation}){

     return(
         <View className="mt-9">
             <TouchableOpacity activeOpacity="0.5" onPress={callbackNavigation}>
                 <LinearGradient
                     colors={['#6F3DE9','#37B6C7']}
                     start={{ x: 0.2, y: 0.4 }}
                     end={{ x: 0.8, y: 0.8 }}
                     className="rounded-full bg-green-300 justify-center items-center p-3"
                 >
                     <Text className="text-white font-bold text-lg">{label}</Text>
                 </LinearGradient>
             </TouchableOpacity>
         </View>
     )
}