import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import RootList from './rootList/RootList';
import CategoryList from './categoryList/CategoryList';
import * as SelectView from '../SelectViewConstants';

const SideDrawerList = props => {
    const selectedView = useSelector(state => state.navigation.selectedView);

    let rootList = <RootList {...props} />;
    let categoryList = <CategoryList {...props} />

    switch (selectedView) {
        case SelectView.CATEGORIES:
            rootList = null;
            break;
        default:
            rootList = <RootList {...props} />;
            categoryList = null;
    }

    return (
        <ScrollView>
            <View>
                {rootList}
                {categoryList}</View>
        </ScrollView>
    );
};

export default SideDrawerList;