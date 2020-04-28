import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import AddedToCartModal from '../../components/shop/AddedToCartModal';
import * as cartActions from '../../store/actions/cart';
import * as productActions from '../../store/actions/products';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.products);
    const product = useSelector(state => state.cart.selectedItem);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    return (
        <View>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={products}
                renderItem={itemData => {
                    return (
                        <ProductItem
                            prod={itemData.item}
                            onViewDetail={() => {
                                props.navigation.navigate('ProductDetail', {
                                    prodId: itemData.item.id,
                                    title: itemData.item.title
                                });
                            }}
                            onAddToCart={() => {
                                dispatch(productActions.updateProduct(itemData.item, 'isInCart', true));
                                dispatch(cartActions.addToCart(itemData.item, 1));
                                
                                setShowModal(true);
                            }}
                        />
                    );
                }}
            />
            {showModal ?
                <AddedToCartModal showModal={showModal} product={product} onCloseModal={() => setShowModal(!showModal)} />
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
        )
    }
};

export default ProductsOverviewScreen;