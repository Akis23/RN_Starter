import React, {useState, useReducer} from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const reducer = (state, action) =>{
// state === { count: number} (this {} means object)
//action === {type: 'increment' || 'decrement', payload: 1 }
    switch(action.type){
        case 'increment':
            return{...state, count: state.count + action.payload}
        case 'decrement':
            return{...state, count: state.count - action.payload}
        default:
            return state;
    }

};

const CounterScreen = () => {

    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return(
        <View>
            <Button
                title="increase"
                onPress={() => {
                //    setCounter(counter + 1);
                dispatch({ type: 'increment', payload: 1 })
            }}/>
            <Button
                title="Decrease"
                onPress={() => {
                    // setCounter(counter - 1);
                    dispatch({ type: 'decrement', payload: 1 })
            }}/>
            <Text>Current Count:{/*counter*/state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;