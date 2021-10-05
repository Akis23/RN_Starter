import React, {useState} from "react";
import {View, StyleSheet, Text, TextInput} from 'react-native';

const passwordScreen = () => {
    const [pass, setPass] = useState('');


    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={pass}
                onChangeText={(newValue) => setPass(newValue)}
            />
            <Text>The password is: {pass}</Text>
            {pass.length < 5 ? <Text>thelei panw apo 5 xaraktires</Text> : null }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'green',
        borderWidth: 1
    }
});

export default passwordScreen;