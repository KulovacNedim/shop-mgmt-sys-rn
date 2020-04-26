import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import SideDrawerItem from '../../../navigationComponents/SideDrawerItem';
import * as categoryActions from '../../../../store/actions/categories';
import * as navActions from '../../../../store/actions/navigation';
import * as prodActions from '../../../../store/actions/products';

const CategoryList = props => {
    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();

    const onSelectHandler = (category) => {
        if (!category) {
            dispatch(categoryActions.selectCategory(null));
        }
        else if (category.subcategories.length > 0) {
            dispatch(categoryActions.selectCategory(category.category.id));
        } else {
            dispatch(prodActions.getProductsForCategory(category.category.id));
            dispatch(categoryActions.selectCategory(null));
            dispatch(navActions.setView(''));
            props.navigation.navigate('ProductsOverview');
            props.navigation.closeDrawer();
        }
    }


    if (categories[0].category.superCategory) {
        dispatch(navActions.setBackToAllCategories(true));
    } else {
        dispatch(navActions.setBackToAllCategories(false));
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {categories.map(category => {
                    const item = {
                        icon: category.category.icon || 'md-menu',
                        itemTitle: category.category.title,
                        route: '',
                        hasSubNav: category.subcategories.length > 0
                    }
                    return (
                        <SideDrawerItem
                            {...props} item={item}
                            onSelectRoute={onSelectHandler.bind(this, category)}
                            key={category.category.id}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 5
    },
    item: {
        paddingVertical: 10
    }
});

export default CategoryList;