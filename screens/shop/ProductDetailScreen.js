import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Button, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import AddedToCartModal from '../../components/shop/AddedToCartModal';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';

const ProductDetailScreen = props => {
    const [showModal, setShowModal] = useState(false);
    const selectedCartItem = useSelector(state => state.cart.selectedItem);
    const prodId = props.navigation.getParam('prodId');
    const product = useSelector(state => state.products.products.find(prod => prod.id === prodId));
    const cartItems = useSelector(state => state.cart.items);
    const isInCart = cartItems.hasOwnProperty(product.id);

    const dispatch = useDispatch();
    return (
        <ScrollView>
            <Image source={{ uri: product.imageUrl }} style={styles.image} />
            <View style={styles.actions}>
                <Button color={Colors.primary} title={isInCart ? "In Cart" : "Add to Cart"} onPress={() => {
                    if (isInCart) {
                        dispatch(cartActions.selectItem(cartItems[product.id]));
                    } else {
                        dispatch(cartActions.addToCart(product, 1, '+'));
                    }
                    setShowModal(true);
                    setShowModal(true);
                }} />
            </View>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <Text style={styles.description}>{product.description}</Text>
            {showModal ?
                <AddedToCartModal
                    showModal={showModal}
                    item={selectedCartItem}
                    onCloseModal={() => setShowModal(!showModal)}
                />
                : null
            }
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('title')
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20
    }
});

export default ProductDetailScreen;