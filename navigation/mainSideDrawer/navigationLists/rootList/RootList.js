import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import SideDrawerItem from '../../../navigationComponents/SideDrawerItem';
import * as navActions from '../../../../store/actions/navigation';
import * as SelectView from '../../SelectViewConstants';

const RootList = props => {
    const items = [
        { icon: 'md-home', itemTitle: 'Home', route: 'Index', hasSubNav: false },
        { icon: 'md-list', itemTitle: 'Your Orders', route: 'ProductsOverview', hasSubNav: false },
        { icon: 'md-reorder', itemTitle: 'Products Categories', route: '', hasSubNav: true },
        { icon: 'md-person', itemTitle: 'Your Account', route: '', hasSubNav: false },
        { icon: 'md-mail', itemTitle: 'E-Mail', route: '', hasSubNav: false }
    ];
    // route property has to be equal to active route name in main navigator

    const dispatch = useDispatch();

    const routerHandler = (item) => {
        if (item.hasSubNav) {
            dispatch(navActions.setView(SelectView.CATEGORIES))
        }
        props.navigation.navigate(item.route);
    };

    return (
        <View style={styles.listContainer}>
            {items.map(item => {
                return (
                    <SideDrawerItem {...props} item={item} onSelectRoute={routerHandler} key={item.itemTitle} />
                )
            })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignContent: 'center',
        paddingLeft: 5
    }
});

export default RootList;