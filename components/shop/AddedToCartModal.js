import React from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AddedToCartModal = props => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.showModal}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}><Text style={styles.boldText}>{props.product.title}</Text> added to the Cart:</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: props.product.imageUrl }} style={styles.image} />
                        </View>
                        <View style={styles.descContainer}>
                            <Text style={styles.descItems}>{props.product.title}</Text>
                            <Text style={styles.descItems}>{props.product.price}</Text>
                            <View style={styles.quantityControl}>
                                <View style={styles.btnContent}>
                                    <Button title="-" style={styles.button} />
                                </View>
                                <Text style={styles.qtyField}>12</Text>
                                <View style={styles.btnContent}>
                                    <Button title="+" style={styles.button} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.confirm}>
                        <Button title="Go to Cart" />
                        <Button title="Confirm" onPress={props.onCloseModal} />
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
    imageContainer: {
        height: 100,
        width: '35%'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    descContainer: {
        marginLeft: 20
    },
    descItems: {
        marginVertical: 5,
        fontSize: 15,
        fontFamily: 'semi-bold'
    },
    quantityControl: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    btnContent: {
        width: 50
    },
    button: {
        fontSize: 30,
        fontFamily: 'bold'
    },
    qtyField: {
        marginHorizontal: 20
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

export default AddedToCartModal;