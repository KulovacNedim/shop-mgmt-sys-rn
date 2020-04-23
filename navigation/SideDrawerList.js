import React from 'react';
import { Text, ScrollView, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import NavList from './NavList';
import * as navActions from '../store/actions/navigation';

const SideDrawerList = props => {
    const items = [
        { icon: 'md-home', itemTitle: 'Home', route: 'Index', openSubNav: false },
        { icon: 'md-list', itemTitle: 'Your Orders', route: 'ProductsOverview', openSubNav: false },
        { icon: 'md-reorder', itemTitle: 'Products Categories', route: '', openSubNav: true },
        { icon: 'md-person', itemTitle: 'Your Account', route: '', openSubNav: false },
        { icon: 'md-mail', itemTitle: 'E-Mail', route: '', openSubNav: false }
    ];
    // route property has to be equal to active route name in main navigator

    const selectedView = useSelector(state => state.navigation.selectedView);
    const dispatch = useDispatch();

    const activeRoute = props.navigation.state['routes'][props.navigation.state['routes'].length - 2].routes[0].routeName;

    const routerHandler = (item) => {
        if (item.openSubNav) {
            dispatch(navActions.setView("CATEGORIES"))
        }
        props.navigation.navigate(item.route);
    };

    let content;

    const initialNavList = (
        <View style={styles.listContainer}>
            {items.map(item => {
                return (
                    <TouchableOpacity onPress={routerHandler.bind(this, item)} key={item.itemTitle}>
                        <View style={styles.listItemContainer}>
                            <View style={styles.listItemIcon}>
                                <Ionicons
                                    name={Platform.OS === 'android' ? item.icon : 'ios-home'}
                                    size={23}
                                    color={activeRoute === item.route ? Colors.accent : 'black'}
                                />
                            </View>
                            <View style={styles.listItemTitleContainer}>
                                <Text style={[styles.listItemTitle, activeRoute === item.route ? styles.activeTitle : '']}>
                                    {item.itemTitle}
                                </Text>
                            </View>
                            {item.openSubNav ?
                                <View style={[styles.listItemIcon, styles.arrow]}>
                                    <Ionicons
                                        name={Platform.OS === 'android' ? 'ios-arrow-forward' : 'ios-arrow-forward'}
                                        size={20}
                                        color={activeRoute === item.route ? Colors.accent : 'black'}
                                    />
                                </View>
                                : null}
                        </View>
                    </TouchableOpacity>
                )
            })
            }
        </View>
    );

    switch (selectedView) {
        case "CATEGORIES":
            return content = <NavList />;
        default:
            content = initialNavList;
    }

    return (
        <ScrollView>
            {content}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignContent: 'center',
        paddingLeft: 5
    },
    listItemContainer: {
        flexDirection: 'row',
        height: 40,
        marginVertical: 3
    },
    listItemIcon: {
        paddingHorizontal: 10,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItemTitleContainer: {
        paddingLeft: 5,
        justifyContent: 'center'
    },
    listItemTitle: {
        fontSize: 14
    },
    activeTitle: {
        color: Colors.accent
    },
    arrow: {
        marginLeft: 'auto'
    }
});

export default SideDrawerList;