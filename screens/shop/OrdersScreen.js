import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';
import OrderDetailsModal from '../../components/shop/OrderDetailsModal';
import * as orderActions from '../../store/actions/order';

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    let noOrders;
    if (orders.length === 0) {
        noOrders = <Text>You don't have any orders yet.</Text>;
    }

    const onOrderSelect = (order) => {
        dispatch(orderActions.selectOrder(order));
        setShowModal(true);
    };

    return (
        <View style={styles.screen}>
            {noOrders}
            <FlatList
                data={orders}
                keyExtractor={item => item.id.toString()}
                renderItem={itemData => <OrderItem onOrderSelect={onOrderSelect} order={itemData.item}/>}
            />
            {showModal &&
                <OrderDetailsModal
                    showModal={showModal}
                    onCloseModal={() => setShowModal(!showModal)}
                />
            }
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