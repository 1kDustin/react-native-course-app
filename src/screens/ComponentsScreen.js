import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const fullName = 'Dustin Schomburg';

    return (
    <View>
        <Text style={styles.mainTextStyle}>Getting started with react native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {fullName}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    mainTextStyle: {
        fontSize: 30
    },
    headerStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;