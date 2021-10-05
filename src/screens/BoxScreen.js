import React from "react";
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        //alignItems: 'center',
        flexDirection: 'column',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        //flex: 1
        //margin : 20

    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        //top: 10,
        //flex: 1,
        //position: 'absolute'
        //alignSelf: 'flex-end'
        //margin : 20
        //...StyleSheet.absoluteFillObject

    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        //flex: 1
        //margin : 20

    }
});

export default BoxScreen;