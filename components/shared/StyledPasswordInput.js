import {Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {EyeClose, EyeOpen} from "../../Icons";

export function StyledPasswordInput({placeholder,label}){
     const [seePassword,setSeePassword] = useState(false);
    return(
        <View className="mt-2 mb-2">
            <Text className="block font-bold text-md mb-3">{label}</Text>
            <View className="flex-row   bg-gray-50 border border-gray-300
                     text-gray-900 text-sm rounded-full
                     focus:ring-blue-500 focus:border-blue-500
                     block w-full p-3.5
                     justify-between

                      ">
                <TextInput
                    placeholder={placeholder}
                    keyboardType="default"
                    secureTextEntry={seePassword}
                    className="flex-auto"

                />
                <TouchableOpacity
                onPress={() => setSeePassword(!seePassword)}
                >
                    {
                        seePassword ? <EyeOpen /> : <EyeClose fill="#9496A5" />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )

}