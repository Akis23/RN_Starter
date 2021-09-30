import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Touchable } from "react-native";

const HomeScreen = (props) => {
  
  return(
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress = {() => props.navigation.navigate('Components')}
        title = "Components"
      />
      <Button
        title="List"
        onPress={() => props.navigation.navigate('List')}

      />
      <Button
        title="Image"
        onPress={() => props.navigation.navigate('Image')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  text2:{
    fontSize: 20,
    margin: 20
  }
});

export default HomeScreen;
