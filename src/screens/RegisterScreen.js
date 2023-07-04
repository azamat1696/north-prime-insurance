import {ScrollView, Text, TouchableOpacity, useWindowDimensions, View, StyleSheet} from "react-native";
import {StyledTextInput} from "../../components/shared/StyledTextInput";
import React, {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import {BackIcon, ContactCircleIcon, FacebookIcon, FlagIcon, GoogleIcon} from "../../Icons";
import {StyledPasswordInput} from "../../components/shared/StyledPasswordInput";
import {StyledButton} from "../../components/shared/StyledButton";
import {SocialMedialLogin} from "../../components/shared/SocialMedialLogin";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {VerificationCodeInput} from "../../components/shared/VerificationCodeInput";
import i18n from "../../i18n";
 //import {API_URL} from "@env";
export function RegisterScreen({navigation}){

    const [code,setCode] = useState([]);
     useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: 'Kayıt Ol',
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
                <TouchableOpacity onPress={() => navigation.goBack()} className="ml-2 mb-2">
                    <View className="p-2 border border-purple-open  rounded-full">
                        <BackIcon size={24} fill="#000" />
                    </View>
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} className="mr-2 mb-2">
                    <View className="p-2 border border-purple-open  rounded-full">
                        <FlagIcon size={24} fill="#000" />
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    const registerConfirmRef = useRef(null);
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [isBottomSheetTextOpen, setIsBottomSheetTextOpen] = useState(false);
    const snapPoints = useMemo(() => ["75%","65%"],[]);
    const handleSheetChange = useCallback((index) => {
        index === -1 ? setIsBottomSheetOpen(false) : setIsBottomSheetOpen(true);
        index === 1 ? setIsBottomSheetTextOpen(true) : setIsBottomSheetTextOpen(false);
        registerConfirmRef.current?.snapToIndex(index);
    }, []);
   const handleCodeFilled = (val) => {
      if(val.length === 5){
          // send request to api for register
          console.log('code',val)

      }
  }

   // const {width,height,fontScale,scale} = useWindowDimensions()
   // console.log('width',width,'height',height,'fontScale',fontScale,'scale',scale)
    return(
            <ScrollView
                className="h-full w-full bg-white"
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View className="p-6 flex-col justify-between">
                    <View>
                        <StyledTextInput label="Ad Soyad" placeholder="Lütfen adınızı ve soyadınızı girin"/>
                        <StyledTextInput label="Telefon Numarası" placeholder="Lütfen telefon numaranızı girin"/>
                        <StyledTextInput label="Email Adresi" placeholder="Lütfen Email adresinizi girin"/>
                        <StyledPasswordInput placeholder="Lütfen şifrenizi girin" label="Şifre"/>
                        <StyledButton label="Hesap Oluştur" callbackNavigation={() => handleSheetChange(0)}  />
                        <View className="mt-10 text-center">
                            <Text className="text-center text-sm text-gray-500 font-normal">
                                Veya başka bir yöntem kullanarak giriş yapın
                            </Text>
                        </View>
                        <SocialMedialLogin label="Google ile giriş yap" svg={<GoogleIcon/>} />
                        <SocialMedialLogin label="Facebook ile giriş yap" svg={<FacebookIcon/>} />
                    </View>
                    <View className="flex-row items-center justify-center mb-2 mt-12">
                        <Text className="text-md text-gray-500 font-normal">
                            Bir hesabın var mı? {i18n.t('welcome')}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                            <Text className="font-semibold text-blue-800 pl-2" >
                                Giriş Yap
                            </Text>
                        </TouchableOpacity>

                    </View>
                    {isBottomSheetOpen && (<View style={styles.overlay} />)}

                    <BottomSheet
                        ref={registerConfirmRef}
                        snapPoints={snapPoints}
                        onChange={handleSheetChange}
                        enablePanDownToClose={true}
                        className="shadow"
                        index={-1}
                        backgroundStyle={{borderRadius: 24}}
                    >
                        <BottomSheetView>
                            <View className="items-center mt-6">
                                <ContactCircleIcon />
                                <Text className="text-lg font-bold mt-4">Hesap oluşturuldu!</Text>
                                {isBottomSheetTextOpen ? (
                                    <Text
                                        className="text-sm text-gray-400 font-semibold text-center mt-3  pl-8 pr-8"
                                    >
                                        Başarıyla bir hesap oluşturdunuz,
                                        Ürünlerimizi keşfetmeden önce
                                        lütfen giriş yapınız! ❤️
                                    </Text>
                                ): (
                                    <Text
                                        className="text-sm text-gray-400 font-semibold text-center mt-3  pl-8 pr-8"
                                    >
                                        Size 5 haneli bir doğrulama kodu gönderdik, Lütfen e-postanızı kontrol edin.
                                    </Text>
                                ) }

                            </View>
                            {!isBottomSheetTextOpen && (
                                <View>
                                    <VerificationCodeInput codeLength={5} onCodeFilled={handleCodeFilled} />
                                </View>
                            )}
                            <View className="pl-6 pr-6">
                                {
                                    isBottomSheetTextOpen ? (
                                        <StyledButton label="Giriş Yap" callbackNavigation={() => navigation.navigate('LoginScreen')} />
                                    ): (
                                        <StyledButton label="Doğrula" callbackNavigation={() => handleSheetChange(1)} />
                                    )
                                }
                            </View>
                        </BottomSheetView>
                    </BottomSheet>
                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
        overlay: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            transform: '0.5s, transform 0.5s',
        },
})