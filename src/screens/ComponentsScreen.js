import React from "react";
import {Text, StyleSheet, View} from 'react-native';


const ComponentsScreen = () => {
    const name = 'Akis';
    const subheader = <Text style={Styles.SubHeaderStyle}>My name is {name}!</Text>;

    return (
        <View>
            <Text style={Styles.textStyle}>Getting started with React Native!</Text>
            {subheader}
        </View>
        
    );
};

const Styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    SubHeaderStyle:{
        fontSize: 20
    }
    
});



export default ComponentsScreen;