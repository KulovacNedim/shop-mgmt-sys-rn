import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import SideDrawerList from './SideDrawerList';

const CustomDrawerContentComponent = props => {
    return (
        <View style={styles.navContainer}>
            <View style={styles.headerAndContentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Welcome</Text>
                </View>

                <SideDrawerList {...props} />
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footerButton}>
                    <Button title="LOG OUT" onPress={() => { }} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navContainer: {
        flex: 1
    },
    headerAndContentContainer: {
        flex: 8
    },
    headerContainer: {
        height: 80,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    headerTitle: {
        paddingBottom: 15,
        fontFamily: 'semi-bold',
        fontSize: 22
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerButton: {
        width: '90%'
    }
});

export default CustomDrawerContentComponent;