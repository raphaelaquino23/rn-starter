import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { withOrientation } from "react-navigation";

const BoxScreen = () => {
  return (
    <View style = {styles.parentStyle}>
      <View style = {styles.viewOneStyle}>
        <Text>Child 1</Text>
      </View>
      <View style = {styles.viewTwoParent}>
        <View style = {styles.viewTwoStyle}>
          <Text>Child 2</Text>
        </View>
      </View>
      <View style = {styles.viewThreeStyle}>
        <Text>Child 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewOneStyle:{
      backgroundColor: 'red',
      height: 50,
      width: 50,
    },
    viewTwoStyle:{
      backgroundColor: 'green',
      height: 50,
      width: 50,
    },
    viewTwoParent:{
      height: 100,
      justifyContent: 'flex-end', 
    },
    viewThreeStyle: {
      backgroundColor: 'purple',
      height: 50,
      width: 50,
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
    }
});

export default BoxScreen;
