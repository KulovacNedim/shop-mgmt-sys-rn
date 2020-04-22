import React, { useEffect, useCallback } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory, selectCategory1 } from '../../store/actions/categories';

import CategoryItem from '../../components/CategoryItem';

const CategoriesOverviewScreen = props => {
    const categories = useSelector(state => state.categories.subcategories);
    const cs = useSelector(state => state.categories.cs);
    const dispatch = useDispatch();


    const { navigation } = props;

    const saveFilters = useCallback(() => {
        //const id = cs.pop()
        console.log('popani ' )
        // const arr = [1,2,3,4,5]
        // arr.splice(-1,1)
        const ll = [...cs]
        console.log(ll)
        dispatch(selectCategory1(ll));
      // dispatch(cs1(ll));
    }, [categories, dispatch])

    useEffect(() => { 
        navigation.setParams({ save: saveFilters, showIcon: cs.length >= 1 });
    }, [saveFilters]);







    // onEnterCategori dispatch action to update categories
    // if categories.length === 0 open products else do nothing
    const onEnterCategoryHandler = (id) => {
        console.log('ID: ' + id)
        dispatch(selectCategory(id));
        props.navigation.navigate('CategoriesOverview');
    };
    console.log('c5s')
    console.log(cs)
    return (
        <FlatList
            data={categories}
            keyExtractor={item => item.id.toString()}
            renderItem={itemData => {
                return (
                    <View>
                        <CategoryItem
                            category={itemData.item}
                            onEnterCategory={onEnterCategoryHandler}
                        />
                    </View>
                );
            }}
        />
    );
};

CategoriesOverviewScreen.navigationOptions = navData => {
    const showIcon =navData.navigation.getParam('showIcon');
    let oo;
    if (showIcon) {
        oo = <HeaderBackButton
            onPress={navData.navigation.getParam('save')}
            //title="Info"
            tintColor="white"
        />
    }
    return {
        headerTitle: 'Products Categories',

        headerLeft: () => (oo),
    };
};

const styles = StyleSheet.create({});

export default CategoriesOverviewScreen;