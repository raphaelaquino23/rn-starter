import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number };
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

  switch(action.type){
    case 'change_red':
      //can also be written as 
      //return state.red + action.payload > 255 || state.red + action.payload < 0 
      // ? state 
      // : {..state, red: state.red + action.payload}
      if (state.red + action.payload > 255 || state.red + action.payload < 0){
        return state; 
      }
      return { ...state, red: state.red + action.payload };
    case 'change_green':
      if (state.red + action.payload > 255 || state.red + action.payload < 0){
        return state; 
      }
      return { ...state, green: state.green + action.payload };
    case 'change_blue':
      if (state.red + action.payload > 255 || state.red + action.payload < 0){
        return state; 
      }
      return { ...state, blue: state.blue + action.payload };
    default: 
      return state;
  }
}; 

const SquareScreen = () => {
  const[state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue:0 })
  const { red, green, blue } = state; 
 
 
  return (
    <View>
      <ColorCounter
        //by convention runMyReducer() would be dispatc()
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
