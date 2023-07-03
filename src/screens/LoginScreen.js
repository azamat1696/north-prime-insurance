import {View, Text, TouchableOpacity, ScrollView} from "react-native";
 import React, {useEffect, useLayoutEffect, useState} from "react";
import {BackIcon, DoneSuccessIcon, FacebookIcon, FlagIcon, GoogleIcon} from "../../Icons";
import {StyledTextInput} from "../../components/shared/StyledTextInput";
import {StyledPasswordInput} from "../../components/shared/StyledPasswordInput";
import {StyledButton} from "../../components/shared/StyledButton";
import {SocialMedialLogin} from "../../components/shared/SocialMedialLogin";
import {ToasterMessage} from "../../components/shared/ToasterMessage";
import Toast from "react-native-root-toast";
import CustomToast from "../../components/shared/CustomToast";

export function LoginScreen({navigation})
{
  /*  let toast = Toast.show('Tebrikler giriş işleminiz başarılı oldu', {
        duration: 5000,

    });

// You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
    setTimeout(function hideToast() {
        Toast.hide(toast);
    }, 5000);*/
  /*  const [showToaster,setShowToaster] = useState(false)

    useEffect(() => {
    setTimeout(() => setShowToaster(true), 2000); // show toast after 2s

    setTimeout(() => setShowToaster(false), 5000); // hide toast after 5s
    },[]);*/
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: 'Giriş',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 15,
                color: '#000',
            },
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerShadowVisible: false,
            headerTintColor: '#000',
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} className="ml-2">
                    <View className="p-2 border border-purple-open  rounded-full">
                        <BackIcon size={24} fill="#000" />
                    </View>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} className="mr-2">
                    <View className="p-2 border border-purple-open  rounded-full">
                        <FlagIcon size={24} fill="#000" />
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const [showToast, setShowToast] = useState(true);

    const toggleToast = () => {
        setShowToast(!showToast);
    };
    return (
        <ScrollView className="h-full w-full bg-white">

        <View className="p-6 flex-col justify-around">

             <View>
                       <StyledTextInput placeholder="E-postanızı giriniz"  label="E-posta veya Telefon Numarası" />
                       <StyledPasswordInput placeholder="Şifrenizi giriniz" label="Şifre"/>
                       <StyledButton label="Giriş" />

                       <View className="mt-10 text-center">
                           <Text className="text-center text-sm text-gray-500 font-normal">
                               Veya başka bir yöntem kullanarak giriş yapın
                           </Text>
                       </View>
                       <SocialMedialLogin label="Google ile giriş yap" svg={<GoogleIcon/>} />
                       <SocialMedialLogin label="Facebook ile giriş yap" svg={<FacebookIcon/>} />
            </View>

            <View className="flex-row items-center justify-center mb-2 mt-32">
                <Text className="text-md text-gray-500 font-normal">
                    Hesabınız yok mu?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text className="font-semibold text-blue-800 pl-2" >
                        Kayıt Ol
                    </Text>
                </TouchableOpacity>

            </View>

         </View>
            <CustomToast message="Tebrikler giriş işleminiz başarılı oldu" svg={<DoneSuccessIcon />} interval={3000} onDismiss={()=>toggleToast()}/>

        </ScrollView>
    );
}