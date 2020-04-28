import React from 'react';
import { View, StyleSheet, Text, Image, Button } from 'react-native';

import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

const ProductDetailScreen = props => {
    const prodId = props.navigation.getParam('prodId');
    const product = useSelector(state => state.products.products.find(prod => prod.id === prodId));
    return (
        <ScrollView>
            <Image source={{ uri: product.imageUrl }} style={styles.image}/>
            <View style={styles.actions}>
                <Button color={Colors.primary} title="Add to Cart" onPress={() => { }} />
            </View>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('title')
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20
    }
});

export default ProductDetailScreen;