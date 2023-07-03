import {Text, TouchableOpacity, View} from "react-native";

export function SocialMedialLogin({label,svg}){
    return(
        <View className="mt-6">
            <TouchableOpacity activeOpacity="0.5" className="flex-row items-center justify-center border border-gray-300 rounded-full p-3.5">
                {svg}
                <Text className="font-normal text-md ml-2">{label}</Text>
             </TouchableOpacity>
        </View>
    )
}