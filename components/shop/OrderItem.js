import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import * as orderActions from '../../store/actions/order';

const OrderItem = props => {
    const dispatch = useDispatch();
    const deleteOrderHandler = order => {
        dispatch(orderActions.removeOrder(order));
    };
    return (
        <TouchableOpacity onPress={props.onOrderSelect.bind(this, props.order)}>
            <View style={styles.item}>
                <Text>{props.order.readableDate}</Text>
                <Text>{props.order.totalAmount}</Text>
                <TouchableOpacity style={styles.trashIcon} onPress={deleteOrderHandler.bind(this, props.order)}>
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                        size={23}
                        color="red"
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginVertical: 5
    },
    trashIcon: {
        paddingHorizontal: 10
    }
});

export default OrderItem;