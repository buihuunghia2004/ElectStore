import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

interface Props {
    hint: string;
    width: number;
    height: number;
    color: string;
}

const InputComponent = (props: Props) => {
    const { hint, width, height, color } = props;   
    return (
        <View style={[styles.inputContainer, { width, height, backgroundColor: color }]}>
            <TextInput
                placeholder={hint}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 8,
        paddingHorizontal: 12,
        justifyContent: 'center',
    },
    input: {
        fontSize: 16,
       
        color: 'white', // Màu chữ
    },
});

export default InputComponent;