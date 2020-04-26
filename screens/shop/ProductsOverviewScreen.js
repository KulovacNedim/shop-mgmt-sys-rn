import React from 'react';
import { Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.products);
    return (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={products}
            renderItem={itemData => {
                return <Text>{itemData.item.title}</Text>
            }}
        />
    );
};

ProductsOverviewScreen.navigationOptions = navData => {
    return {
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