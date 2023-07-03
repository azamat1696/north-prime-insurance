import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Test2 = () => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const toggleBottomSheet = () => {
        setIsBottomSheetOpen(!isBottomSheetOpen);
    };

    return (
        <View style={styles.container}>
            <Button title="Toggle Bottom Sheet" onPress={toggleBottomSheet} />

            <View style={styles.content}>
                <Text>This is the main content</Text>
            </View>

            {isBottomSheetOpen && (
                <View style={styles.overlay} />
            )}

            {isBottomSheetOpen && (
                <View style={styles.bottomSheet}>
                    <Text>Bottom Sheet Content</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    bottomSheet: {
        height: 200,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Test2;
