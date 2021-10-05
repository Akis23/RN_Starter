import React from "react";
import {View, Text, StyleSheet} from 'react-native';


const styleScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewFirst}></View>
            <View style={styles.viewSecond}></View>
            <View style={styles.viewThird}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200
    },
    viewFirst: {
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewSecond: {
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        width: 50,
        backgroundColor: 'green',
        top: 50
    },
    viewThird: {
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
});

export default styleScreen;