import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders);

    let noOrders;
    if (orders.length === 0) {
        noOrders = <Text>You don't have any orders yet.</Text>;
    }
    return (
        <View style={styles.screen}>
            {noOrders}
            <FlatList
                data={orders}
                keyExtractor={item => item.id.toString()}
                renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}
            />
        </View>
    );
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Orders',
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
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default OrdersScreen;