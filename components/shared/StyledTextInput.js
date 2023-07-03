import {Text, TextInput, View} from "react-native";

export function StyledTextInput({placeholder,label}){
      return(
        <View className="mt-2 mb-2">
            <Text className="block font-bold text-md mb-3">{label}</Text>
            <TextInput
                placeholder={placeholder}
                keyboardType="default"
                className="
                     bg-gray-50 border border-gray-300
                     text-gray-900 text-sm rounded-full
                     focus:ring-blue-500 focus:border-blue-500
                     block w-full p-3.5
                     "

             />
        </View>
    )

}