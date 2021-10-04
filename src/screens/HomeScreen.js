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
      <Button
        title="Counter"
        onPress={() => props.navigation.navigate('Counter')}
      />
      <Button
        title="Colors"
        onPress={() => props.navigation.navigate('Color')}
      />
      <Button
        title="Square"
        onPress={() => props.navigation.navigate('Square')}
      />
      <Button
        title="Square Reducer"
        onPress={() => props.navigation.navigate('Reducer')}
      />
      <Button
        title="TextScreen"
        onPress={() => props.navigation.navigate('Text')}
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
