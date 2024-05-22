import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import GlobalStyle from '../../styles/GlobalStyle';
interface Props {
    imageUrl: any;
    name: string
}

const TypeProduct = (props: Props) => {
   
    const { imageUrl, name } = props;
    return (
        <View style={styles.container}>
            <Image source={imageUrl} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default TypeProduct
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        margin: 10,
    },
    image: {
        width: 36,
        height: 36,
        marginBottom: 10
    },
    name: {
        fontSize: 16,
        color: '#333',
    },
});