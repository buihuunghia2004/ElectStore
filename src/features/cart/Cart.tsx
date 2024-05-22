import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import GlobalStyle from '../../styles/globalStyle'
import InputComponent from '../../components/InputComponent'
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'


const Cart = () => {
    const data = [1,2,3,4,5]
    const renderItemProduct = () => {
        return(
            <View style={styles.containerProduct}>
                <Image style={styles.i} source={require('../../resources/icons/menu.png')} />
                <View style={{ flex: 1 }}>
                    <Text>Macbook Pro M2 MN Macbook Pro M2 MN Macbook Pro </Text>
                    <Text>Black</Text>
                    <Text>x1</Text>
                    <View style={GlobalStyle.viewRow}>
                        <Image style={GlobalStyle.icon16} source={require('../../resources/icons/menu.png')} />
                        <Text>Guarantedd</Text>
                    </View>
                    <View style={GlobalStyle.viewRow}>
                        <Image style={GlobalStyle.icon16} source={require('../../resources/icons/menu.png')} />
                        <Text>Guarantedd</Text>
                    </View>
                    <View style={[GlobalStyle.viewRow,{justifyContent:'space-between'}]}>

                        <Text>$63.000</Text>

                        <View style={GlobalStyle.viewRow}>
                            <Image style={GlobalStyle.icon16} source={require('../../resources/icons/menu.png')} />
                            <Image style={GlobalStyle.icon16} source={require('../../resources/icons/menu.png')} />
                            <Text>1</Text>
                            <Image style={GlobalStyle.icon16} source={require('../../resources/icons/menu.png')} />
                        </View>

                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.toolbar}>
                    <Image style={styles.btn_menu} source={require('../../resources/icons/menu.png')} />
                    <Text style={styles.logo}>Tech Heim</Text>
                    <View style={GlobalStyle.viewRow}>
                        <Image style={styles.btn_menu} source={require('../../resources/icons/menu.png')} />
                        <Image style={styles.btn_menu} source={require('../../resources/icons/menu.png')} />
                    </View>
                </View>
                <View>
                    <InputComponent
                        hint="What can we help to find ?"
                        width={345}
                        height={40}
                        color='green'
                    />
                </View>
            </View>
            <Text style={styles.text}>3 items</Text>
            <FlatList
                data={data}
                renderItem={renderItemProduct}
            />
            <View style={[GlobalStyle.viewRow,styles.justi]}>
                <View style={{marginRight:20}}>
                    <Text>Rrand total</Text>
                    <Text>$ 543.02</Text>
                </View>
                <TouchableOpacity style={styles.btn_Buy}>
                
                    <Text>Proceed to Cart</Text>
                    <Image  source={require('../../resources/icons/menu.png')} />
                    
                </TouchableOpacity>
            
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    i: {
        width: 102,
        height: 146,
        backgroundColor: 'green'
    },
    header: {
        marginHorizontal: 20,
        height: 92,
        paddingHorizontal: 4,
        paddingVertical: 8
    },
    toolbar: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
    },
    btn_menu: {
        width: 24,
        height: 24
    },
    logo: {
        flex: 1,
        textAlign: 'center',
        color: 'blue',
        width: 81,
        height: 24
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    containerProduct: {
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    item_Buy:{
        flexDirection:'row',
        backgroundColor:'black',
        height:80,
        justifyContent:'center',
        padding:20

    },
    btn_Buy:{
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        backgroundColor: 'green',
        width: 230,
        height: 50
    },
    justi:{
        padding: 10,
    
        justifyContent:'center'
    }
});