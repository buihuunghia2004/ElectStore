import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import GlobalStyle from '../../styles/GlobalStyle';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { relative } from 'path';

interface Product {
    image: any,
    name: string,
    priceOld: string,
    priceNew: string,
    star: number,
    sale: number
}


const Item_Product1 = (props: Product) => {
    const { image, name, priceOld, priceNew, star, sale } = props;

    return (
        <View style={[styles.container]}>
            <Text style={styles.sale}>-{sale}%</Text>
            <Image style={styles.image} />
           <View style={styles.detail}>
           <Text style={styles.name}>{name}</Text>
            <Text style={styles.priceOld}>${priceOld}</Text>
            <View style={styles.viewSale}>
                <Text style={styles.priceNew}>${priceOld}</Text>
                <Image style={styles.imgStar} source={require('../../resources/icons/start.png')} />
                <Text style={styles.numberSale}>4.9</Text>
            </View>
           </View>
        </View>
    );
};

export default Item_Product1;

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        position: 'relative',
        flex:1,
        height: 190,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      sale: {
        position: 'absolute',
        left: 20,
        zIndex: 1,
        backgroundColor: 'red',
        color: 'white',
        padding: 5,
        margin:10,
        borderRadius: 5,
      },
      image: {
        backgroundColor:'green',
        width:140,
        height: 100,
        borderRadius: 5,
      },
    name: {
        fontSize: 20,
        color: 'black',

    },
    detail:{
        padding:15
    },
    priceOld: {

        alignSelf:'flex-start',
        fontSize: 15,
    },
    priceNew: {
        flex:1,
        fontSize: 20,
    },
    viewSale: {
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
    },
    numberSale: {
        color: '#063A88',
        width: 20,
        height: 15
    },
    imgStar: {
        width: 20,
        height: 20
    }
});
