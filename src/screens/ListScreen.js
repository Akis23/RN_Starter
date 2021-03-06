import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: "friend 1", age: 20},
        {name: "friend 2", age: 45},
        {name: "friend 3", age: 32},
        {name: "friend 4", age: 27},
        {name: "friend 5", age: 53},
        {name: "friend 7", age: 30}
    ];

    return (
        <FlatList
            data = {friends}
            renderItem = {({item}) =>{
                return (
                <Text style={styles.TextStyle}>
                    {item.name} - Age {item.age}
                </Text>
                );
            }}
        />

    );
}

const styles = StyleSheet.create({
    TextStyle:{
        margin: 20
    }
});

export default ListScreen;