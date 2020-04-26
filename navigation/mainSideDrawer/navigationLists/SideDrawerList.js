import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import RootList from './rootList/RootList';
import CategoryList from './categoryList/CategoryList';
import BackToComponent from '../../navigationComponents/BackToComponent';
import * as SelectView from '../SelectViewConstants';
import * as navActions from '../../../store/actions/navigation';
import * as categoryActions from '../../../store/actions/categories';

const SideDrawerList = props => {
    const selectedView = useSelector(state => state.navigation.selectedView);
    const showBackToMainMenu = useSelector(state => state.navigation.showBackToMainMenu);
    const showBackToAllCategories = useSelector(state => state.navigation.showBackToAllCategories);

    const dispatch = useDispatch();

    let rootList = <RootList {...props} />;
    let categoryList = <CategoryList {...props} />

    switch (selectedView) {
        case SelectView.CATEGORIES:
            rootList = null;
            dispatch(navActions.setBackToMainMenu(true));
            break;
        default:
            rootList = <RootList {...props} />;
            dispatch(navActions.setBackToMainMenu(false));
            dispatch(navActions.setBackToAllCategories(false));
            categoryList = null;
    }

    const loadMainMenuHandler = () => {
        dispatch(navActions.setView(""));
        dispatch(categoryActions.selectCategory(null));
    };

    let backToMainMenu;
    if (showBackToMainMenu) {
        backToMainMenu = (
            <BackToComponent
                text="Back to main menu"
                onClick={loadMainMenuHandler}
            />
        );
    }

    let backToAllCategories;
    if (showBackToAllCategories) {
        backToAllCategories = (
            <BackToComponent
                text="Back to all categories"
                onClick={() => {
                    dispatch(categoryActions.selectCategory(null));
                }}
            />
        );
    }

    return (
        <View style={styles.conatainer}>
            <View style={!backToMainMenu ? '' : styles.backButton}>
                {backToMainMenu}
            </View>
            <View style={!backToAllCategories ? '' : styles.backButton}>
                {backToAllCategories}
            </View>
            <ScrollView style={styles.scroll}>
                {rootList}
                {categoryList}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButton: {
        height: 50
    },
    scroll: {
        flex: 1
    }
});

export default SideDrawerList;