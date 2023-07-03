import Toast from "react-native-root-toast";
import React from "react";
import {View} from "react-native";

export function ToasterMessage({visible,label,svg}){
    return(
    <Toast
        visible={visible}
        position={50}
        shadow={false}
        animation={false}
        hideOnPress={true}
    >{svg} {label}</Toast>
    )
}