import React from 'react';
import { View, Text, Button, Modal, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const OrderDetailsModal = props => {
    const order = useSelector(state => state.orders.selectedOrder);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.showModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Order No. 159456 from 23.04.2020.:</Text>
                    </View>
                    <View style={styles.content}>
                        <FlatList
                            keyExtractor={item => item.id}
                            data={order.items}
                            renderItem={itemData => {
                                return (
                                    <View style={styles.orderItemDetails}>
                                        <Text>{itemData.item.product.title}</Text>
                                        <Text>{itemData.item.cartQuantity}</Text>
                                        <Text>{itemData.item.product.price}</Text>
                                        <Text>{itemData.item.cartQuantity * itemData.item.product.price}</Text>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View>
                        <Text>Total amount: {order.totalAmount}</Text>
                    </View>
                    <View style={styles.confirm}>
                        <Button title="Close" onPress={props.onCloseModal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,.6)'
    },
    modalView: {
        width: '90%',
        backgroundColor: "white",
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    headerContainer: {
        width: '100%',
        height: 70,
        borderBottomWidth: '#888',
        borderBottomWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    headerText: {
        marginHorizontal: 10,
        fontSize: 17,
        fontFamily: 'semi-bold',
        textAlign: "left",
        color: 'white'
    },
    boldText: {
        fontFamily: 'bold'
    },
    content: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    orderItemDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    confirm: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginBottom: 5,
        borderTopWidth: 0.5,
        borderTopColor: '#888',
        paddingVertical: 10
    }
});

export default OrderDetailsModal;