import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const ImageDetail = ({imageSource, title, score}) => {


    return (
    <View>
        <Text>{title}</Text>
        <Image source={imageSource}/>
        <Text>Image score - {score}</Text>
    </View>
    
    );
};

const styles = StyleSheet.create ({});

export default ImageDetail;