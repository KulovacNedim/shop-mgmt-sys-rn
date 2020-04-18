import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CategoriesOverviewScreen = props => {
    const categories = useSelector(state => state.products.rootCategories);

    return (
        <FlatList
            data={categories}
            keyExtractor={item => item.id.toString()}
            renderItem={itemData => {
                return (
                    <View>
                        <Text>{itemData.item.title}</Text>
                    </View>
                );
            }}
        />
    );
};

CategoriesOverviewScreen.navigationOptions = {
    headerTitle: 'Products Categories'
};

const styles = StyleSheet.create({});

export default CategoriesOverviewScreen;