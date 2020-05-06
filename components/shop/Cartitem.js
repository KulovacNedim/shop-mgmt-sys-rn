import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import * as cartActions from '../../store/actions/cart';

const CartItem = props => {
    const [warning, setWarning] = useState({ isWarning: false, msg: '' });
    const dispatch = useDispatch();

    let warningMsg;
    if (warning.isWarning) {
        warningMsg = <Text>{warning.msg}</Text>
    }

    const onQtyIncHandler = () => {
        let inStockQty = props.item.product.quantity;
        let cartQty = props.item.cartQuantity;
        if (inStockQty === cartQty) {
            setWarning({
                isWarning: true,
                msg: 'There is ' + inStockQty + ' pieces in stock.'
            });
            return;
        }
        setWarning({ isWarning: false, msg: '' });
        dispatch(cartActions.addToCart(props.item.product, props.item.cartQuantity + 1, '+'));
    };

    const onQtyDecHandler = () => {
        let cartQty = props.item.cartQuantity;
        if (cartQty === 1) {
            setWarning({
                isWarning: true,
                msg: 'You cannot order less than 1 artical. If you want to remove it from the cart click on remove button.'
            });
            return;
        }
        setWarning({ isWarning: false, msg: '' });
        dispatch(cartActions.addToCart(props.item.product, props.item.cartQuantity - 1, '-'));
    };

    return (
        <View>
            <View style={styles.cartItem}>
                <Text>{props.item.product.title}</Text>
                <View style={styles.qtyControls}>
                    <Button title="-" onPress={onQtyDecHandler} />
                    <Text>{props.item.cartQuantity}</Text>
                    <Button title="+" onPress={onQtyIncHandler} />
                </View>
                <Text>{props.item.product.price * props.item.cartQuantity}</Text>
                <TouchableOpacity onPress={props.onRemove}>
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                        size={23}
                        color="red"
                    />
                </TouchableOpacity>
            </View>
            {warningMsg}
        </View>
    );
};

const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 7
    },
    qtyControls: {
        flexDirection: 'row'
    }
});

export default CartItem;