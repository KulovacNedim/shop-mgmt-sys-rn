import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from '../../constants/Colors';

const CategoryItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS = 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.itemCard}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onEnterCategory.bind(this, props.category.id)} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{ uri: props.category.coverImageUrl }}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.title} numberOfLines={1} >{props.category.title} - {props.category.id}</Text>
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    itemCard: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 10,
        borderRadius: 8,
        backgroundColor: Colors.accent,
        height: 190,
        marginHorizontal: 20,
        marginVertical: 10
    },
    touchable: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '75%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    info: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '25%'
    },
    title: {
        fontFamily: 'semi-bold',
        fontSize: 22,
        marginVertical: 2,
        //color: 'white'
    }
});

export default CategoryItem;