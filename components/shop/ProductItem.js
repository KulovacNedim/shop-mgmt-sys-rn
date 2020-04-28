import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Colors from '../../constants/Colors';

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp === TouchableNativeFeedback;
    }
    return (
        <View style={styles.prodItem}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onViewDetail} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: props.prod.imageUrl }} style={styles.image} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.prod.title}</Text>
                            <Text style={styles.price}>{props.prod.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button color={Platform.OS === 'android' ? Colors.accent : Colors.primary} title="View Details" onPress={props.onViewDetail} />
                            <Button color={Platform.OS === 'android' ? Colors.accent : Colors.primary} title={props.prod.isInCart ? "In Cart" : "Add to Cart"} onPress={props.onAddToCart} />
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    prodItem: {
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5,
        height: 300,
        margin: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title: {
        fontFamily: 'bold',
        fontSize: 18,
        marginVertical: 2
    },
    price: {
        fontFamily: 'semi-bold',
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    }
});

export default ProductItem;