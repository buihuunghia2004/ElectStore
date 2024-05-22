import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import HeaderSearch from '../../components/header/HeaderSearch';
import GlobalStyle from '../../styles/GlobalStyle';
import TypeProduct from './TypeProduct';
import Item_Product1 from './Item_Product1';
import Typeconfi from './Typeconfi';


interface TypeProduct {
    image: any,
    name: string
}
interface Typeconfi {
    name: string
}
interface Prd {
    image: any;
    name: string;
    priceOld: string;
    priceNew: string;
    star: number;
    sale: number;
}
const Products = () => {

    const dataTypeProduct: TypeProduct[] = [
        { image: require('../../resources/icons/mobile.png'), name: 'mobile' },
        { image: require('../../resources/icons/Tablet.png'), name: 'Tablet' },
        { image: require('../../resources/icons/headphones.png'), name: 'headphones ' },
        { image: require('../../resources/icons/monitor.png'), name: 'monitor' },
        { image: require('../../resources/icons/mobile.png'), name: 'Product 5' },
    ];
    const dataTypeConfi: Typeconfi[] = [
        { name: 'Silver' },
        { name: '12 GB' },
        { name: 'Apple' },
        { name: 'intel core i9' },
        { name: 'e' }
    ];
    const product = {
        image: { uri: 'https://example.com/image.jpg' },
        name: 'broduct Name',
        priceOld: '$100',
        priceNew: '$80',
        star: 4,
        sale: 20,
    };
    const dataPrdList = [1, 2, 3, 4,5,6]

    const renderPrdList = () => {
        return (
            <View style={styles.ItemPrdContainer}>
                <Item_Product1 {...product} />
            </View>
        )
    }


    const renderItemTypeProduct = ({ item }: { item: TypeProduct }) => {
        return (
            <View style={GlobalStyle.viewRow}>
                <TypeProduct
                    imageUrl={item.image}
                    name="aaaaa"
                />
            </View>
        )
    }
    const renderItemTypeConfi = ({ item }: { item: { name: string } }) => {
        return (
            <View style={GlobalStyle.viewRow}>
                <Typeconfi
                    name={item.name}
                />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderSearch />
            <View style={[GlobalStyle.viewRow, { padding: 15 }]}>
                <Text>Home</Text>
                <Text>{'>'}</Text>
                <Text style={{ color: 'blue', marginLeft: 5 }}>Products</Text>
            </View>
            <FlatList
                horizontal
                data={dataTypeProduct}
                renderItem={renderItemTypeProduct}
                keyExtractor={(item, index) => index.toString()}
            />
            <FlatList
                horizontal
                data={dataTypeConfi}
                renderItem={renderItemTypeConfi}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={GlobalStyle.viewRow}>
                <TouchableOpacity style={[GlobalStyle.viewRow, styles.spiner]}>
                    <Image source={require('../../resources/icons/menu.png')} />
                    <Text style={{ marginLeft: 10 }}>Fillters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[GlobalStyle.viewRow, styles.spiner]}>
                    <Text>Sort by :</Text>
                </TouchableOpacity>
            </View>
            <FlatList
               data ={dataPrdList}
                renderItem={renderPrdList}
                keyExtractor={(item, index) => index.toString()} // Cần keyExtractor để tránh cảnh báo
                numColumns={2}
            />
        </View>
    );
};

export default Products;

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',

    },
    spiner: {
        margin: 10,
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    ItemPrdContainer: {
        flex: 1,
        marginTop: 20,
    }
});