import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BackToComponent = props => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.container}>
                <View style={styles.contentWrapper}>
                    <View style={styles.iconContainer}>
                        <Ionicons style={styles.icon}
                            name='ios-arrow-back'
                            size={23}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{ ...styles.text, ...props.textStyle }}>{props.text}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-around'
    },
    contentWrapper: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },
    iconContainer: {
        flex: 1
    },
    icon: {
        marginLeft: 'auto',
        paddingRight: 30
    },
    textContainer: {
        flex: 3
    },
    text: {
        fontFamily: 'semi-bold',
        fontSize: 14
    }
});

export default BackToComponent;