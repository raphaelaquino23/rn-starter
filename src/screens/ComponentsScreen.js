import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Raph";

  const {textStyle, subtextStyle} = styles;
  return (
    <View>
      <Text style={textStyle}>Getting started with React Native!</Text>
      <Text style={subtextStyle}>My name is {name}</Text>
    </View>
  );
  // Non-destructured code
  // return (
  //   <View>
  //     <Text style={styles.textStyle}>Getting started with React Native!</Text>
  //     <Text style={styles.subtextStyle}>My name is {name}</Text>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subtextStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
