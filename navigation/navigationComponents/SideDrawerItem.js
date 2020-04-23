import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const SideDrawerItem = props => {
    const activeRoute = props.navigation.state['routes'][props.navigation.state['routes'].length - 2].routes[0].routeName;
    return (
        <TouchableOpacity onPress={props.onSelectRoute.bind(this, props.item)}>
            <View style={styles.listItemContainer}>
                <View style={styles.listItemIcon}>
                    <Ionicons
                        name={Platform.OS === 'android' ? props.item.icon : 'ios-home'}
                        size={23}
                        color={activeRoute === props.item.route ? Colors.accent : 'black'}
                    />
                </View>
                <View style={styles.listItemTitleContainer}>
                    <Text style={[styles.listItemTitle, activeRoute === props.item.route ? styles.activeTitle : '']}>
                        {props.item.itemTitle}
                    </Text>
                </View>
                {props.item.hasSubNav ?
                    <View style={[styles.listItemIcon, styles.arrow]}>
                        <Ionicons
                            name={Platform.OS === 'android' ? 'ios-arrow-forward' : 'ios-arrow-forward'}
                            size={20}
                            color={activeRoute === props.item.route ? Colors.accent : 'black'}
                        />
                    </View>
                    : null}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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

export default SideDrawerItem;