import React from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import Colors from '../../constants/Colors';
import * as productsActions from '../../store/actions/products';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';

const AdminProductsScreen = props => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const editProductHandler = pid => {
        props.navigation.navigate('EditProduct', { productId: pid });
    };
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={item => item.id.toString()}
                renderItem={itemData => {
                    return (
                        <ProductItem
                            prod={itemData.item}
                            onCardPress={() => {
                                props.navigation.navigate('ProductDetail', {
                                    prodId: itemData.item.id,
                                    title: itemData.item.title,
                                    isAdmin: true
                                });
                            }}
                            onAddToCart={() => { }}
                        >
                            <Button
                                color={Platform.OS === 'android' ? Colors.accent : Colors.primary}
                                title="Edit"
                                onPress={editProductHandler.bind(this, itemData.item.id)}
                            />
                            <Button
                                color={Platform.OS === 'android' ? Colors.accent : Colors.primary}
                                title={"Delete"}
                                onPress={() => dispatch(productsActions.deleteProduct(itemData.item.id))}
                            />
                        </ProductItem>
                    );
                }}
            />
        </View>
    );
};

AdminProductsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Admin Products',
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
                    title="Add"
                    iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                    onPress={() => {
                        navData.navigation.navigate('EditProduct');
                    }} />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({});

export default AdminProductsScreen;