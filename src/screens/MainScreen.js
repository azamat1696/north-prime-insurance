import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useLayoutEffect} from "react";

export default function MainScreen({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../.././assets/home-bg.png')} style={styles.image} />
            <LinearGradient
                colors={['transparent','#fff']}
                locations={[0.3, 0.7]}
                style={styles.image_parent}
            >
            </LinearGradient>
            <View style={styles.footer}>
                <View className="text-center">
                    <Text className="font-bold text-xl text-center pb-2 pt-2 leading-3">Yakınınızdaki Sigortayı Keşfedin</Text>
                    <Text className="text-sm text-center text-gray-400 font-normal">
                        Eviniz, arabanız, iş yeriniz veya sevdikleriniz için
                        size uygun oluşturduğumuz ürünlerimizi inceleyebilir,
                        danışmanlarımızdan detaylı bilgi alabilirsiniz.
                    </Text>
                </View>
                <View className="text-center flex-row justify-around pt-2" >

                    <TouchableOpacity activeOpacity="0.5" onPress={() => navigation.navigate('LoginScreen')}>
                        <View className="rounded-full border justify-center items-center">
                            <Text style={styles.button}>Giriş Yap</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity="0.5" onPress={() => navigation.navigate('RegisterScreen')}>
                        <LinearGradient
                            colors={['#6F93C9','#16C9C4']}
                            start={{ x: 0.2, y: 0.4 }}
                            end={{ x: 0.8, y: 0.8 }}
                            className="rounded-full bg-green-300 justify-center items-center"
                        >
                            <Text className="text-white font-normal" style={styles.button}>Kayıt Ol</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View className="justify-center items-center pt-2">
                    <Text className="text-gray-400" >
                        Üye olmadan devam et
                    </Text>
                </View>

            </View>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'relative',
        opacity: 0.9,
    },
    footer: {
        position: 'absolute',
        width: '100%',
        height: '30%',
        bottom: 0,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
    },
    image_parent: {
        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    button: {
        paddingLeft: 53,
        paddingRight: 53,
        paddingTop: 17,
        paddingBottom: 17,
        fontSize: 14,
        fontWeight: 600,
    }
})