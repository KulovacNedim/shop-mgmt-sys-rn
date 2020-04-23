import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { selectCategory, selectCategory1 } from '../store/actions/categories';
import ProductsOverviewScreen from '../screens/products/ProductsOverviewScreen';

const NavList = props => {

    const [nav, setNav] = useState(false)
    const categories = useSelector(state => state.categories.subcategories);

    const dispatch = useDispatch();

    const handler = (id) => {
        dispatch(selectCategory(id));
        if (categories.length === 0) {
            setNav(true)
        }
    }
     let jup = (
        <View>
         

            <FlatList
                data={categories}
                keyExtractor={item => item.id.toString()}
                renderItem={itemData => {
                    return (
                        <TouchableOpacity onPress={handler.bind(this, itemData.item.id)}>
                            <View style={styles.item}>
                                <Text>{itemData.item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
    useEffect(() => {
        if (categories.length === 0) {
            jup = null;
            props.navigation.navigate('BLA');
        }
    }, [categories]);

   
    console.log('+9+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   ' + categories.length)
    // if (categories.length === 0) {
    //     jup = null;
    //     props.navigation.navigate('BLA');
    // }

    return (
        <View>
            {jup}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        paddingVertical: 10
    }
});

export default NavList;