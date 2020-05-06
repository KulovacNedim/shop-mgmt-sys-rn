import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import AddedToCartModal from '../../components/shop/AddedToCartModal';
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.products);
    const selectedCartItem = useSelector(state => state.cart.selectedItem);
    const cartItems = useSelector(state => state.cart.items);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const onAddToCart = (itemData) => {
        if (cartItems.hasOwnProperty(itemData.item.id)) {
            // item is already in the cart
            dispatch(cartActions.selectItem(cartItems[itemData.item.id]));
        } else {
            // item is not in the cart, add one
            dispatch(cartActions.addToCart(itemData.item, 1, '+'));
        }
        setShowModal(true);
    };

    return (
        <View>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={products}
                renderItem={itemData => {
                    return (
                        <ProductItem
                            prod={itemData.item}
                            isInCart={cartItems.hasOwnProperty(itemData.item.id)}
                            onViewDetail={() => {
                                props.navigation.navigate('ProductDetail', {
                                    prodId: itemData.item.id,
                                    title: itemData.item.title
                                });
                            }}
                            onAddToCart={onAddToCart.bind(this, itemData)}
                        />
                    );
                }}
            />
            {showModal ?
                <AddedToCartModal
                    showModal={showModal}
                    item={selectedCartItem}
                    onCloseModal={() => setShowModal(!showModal)}
                />
                : null
            }
        </View>
    );
};

ProductsOverviewScreen.navigationOptions = navData => {
    const categoryTitle = navData.navigation.getParam('categoryTitle');
    return {
        headerTitle: categoryTitle,
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Cart"
                    iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                    onPress={() => {
                        navData.navigation.navigate('Cart');
                    }} />
            </HeaderButtons>
        )
    }
};

export default ProductsOverviewScreen;