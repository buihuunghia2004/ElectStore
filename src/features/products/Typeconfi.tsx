import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import GlobalStyle from '../../styles/GlobalStyle';

interface TypeconfiProps {
    name: string;
}

const Typeconfi = (props: TypeconfiProps) => {
    const { name } = props; 

    return (
        <View style={[GlobalStyle.viewRow, styles.container]}>
            <Text style={styles.name}>{name}</Text>
            <Image style={styles.image} source={require('../../resources/icons/close-square.png')} />
        </View>
    );
};

export default Typeconfi;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
    },
    image: {
        width: 18,
        height: 20,
        marginBottom: 10,
    },
    name: {
        marginRight: 10,
        fontSize: 16,
        color: '#333',
    },
});
