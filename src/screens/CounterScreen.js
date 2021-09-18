import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'


const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    //counter is our piece of state that will change over time 
    //but we don't want to modify directly 
    return (
        <View> 
            <Button title = "Increase" 
                onPress={() => {
                    //Don't modify a state variable directly 
                    //counter++;
                    setCounter(counter+1); // does not directly modify counter as we add to the value of counter
                }}
            />
            <Button title = "Decrease" 
                onPress={() => { 
                    //Don't modify a state variable directly 
                    //counter--;
                    setCounter(counter-1);
                 }} 
            />
            <Text> Current Count: {counter} </Text> 
        </View> 
    );
};

const styles = StyleSheet.create({});

export default CounterScreen; 