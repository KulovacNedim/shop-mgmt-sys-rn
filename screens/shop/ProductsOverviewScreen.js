import React, { useState } from 'react';
import { FlatList, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import AddedToCartModal from '../../components/shop/AddedToCartModal';
import * as cartActions from '../../store/actions/cart';
import Colors from '../../constants/Colors';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.products);
    const selectedCartItem = useSelector(state => state.cart.selectedItem);
    const cartItems = useSelector(state => state.cart.items);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const onAddToCartHandler = (itemData) => {
        if (cartItems.hasOwnProperty(itemData.item.id)) {
            // item is already in the cart
            dispatch(cartActions.selectItem(cartItems[itemData.item.id]));
        } else {
            // item is not in the cart, add one
            dispatch(cartActions.addToCart(itemData.item, 1, '+'));
        }
        setShowModal(true);
    };

    const onViewDetail = product => {
        props.navigation.navigate('ProductDetail', {
            prodId: product.id,
            title: product.title
        });
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
                            onCardPress={onViewDetail.bind(this, itemData.item)}
                        >
                            <Button
                                color={Platform.OS === 'android' ? Colors.accent : Colors.primary}
                                title="View Details"
                                onPress={onViewDetail.bind(this, itemData.item)}
                            />
                            <Button
                                color={Platform.OS === 'android' ? Colors.accent : Colors.primary}
                                title={cartItems.hasOwnProperty(itemData.item.id) ? "In Cart" : "Add to Cart"}
                                onPress={onAddToCartHandler.bind(this, itemData)}
                            />
                        </ProductItem>
                    );
                }}
            />
            {showModal &&
                <AddedToCartModal
                    showModal={showModal}
                    item={selectedCartItem}
                    onCloseModal={() => setShowModal(!showModal)}
                />
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