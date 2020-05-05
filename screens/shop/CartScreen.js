import React from 'react';
import { StyleSheet, View, Text, FlatList,  Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../../components/shop/Cartitem';
import * as cartActions from '../../store/actions/cart';

const CartScreen = props => {
    const totalAmount = useSelector(state => state.cart.totalAmount);
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const transformedItems = [];

    for (const key in items) {
        transformedItems.push({
            product: items[key].product,
            cartQuantity: items[key].cartQuantity
        });
    };
    transformedItems.sort(
        (a, b) => a.product.productId > b.product.productId ? 1 : -1
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={transformedItems}
                keyExtractor={item => item.product.id.toString()}
                renderItem={itemData => {
                    return (
                        <CartItem
                            item={itemData.item}
                            onRemove={() => {
                                dispatch(cartActions.removeFromCart(itemData.item.product.id));
                            }}
                        />
                    );
                }}
            />
            <View style={styles.sumContainer}>
                <Text>Total: {totalAmount.toFixed(2)}</Text>
                <Button title="Order Now" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    sumContainer: {
        height: 150
    }
});

export default CartScreen;