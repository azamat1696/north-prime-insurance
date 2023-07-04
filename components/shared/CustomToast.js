import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomToast = ({ message ,onDismiss,svg,interval=3000}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onDismiss();
        }, interval);

        return () => clearTimeout(timer);
    }, [onDismiss]);
    return (
        <View className="pl-9 pr-9">
            <View style={styles.container}>
                <View style={styles.svg}>
                    {svg}
                </View>
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: 50,
        padding: 12,
         zIndex: 999,
         flexDirection: 'row', // Set flex direction to "row"
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '30%'
    },
    message: {
        color: '#fff',
        fontSize: 16,
    },
    svg: {
        marginRight: 8
    }
});

export default CustomToast;
