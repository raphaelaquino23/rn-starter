import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//How do we pass data such as {color, onIncrease, and onDecrease}?
//^ Do we do so in a constructor?
//How do we know when the class is being called?

class ColorCounter extends React.Component {
  render() {
    const { onIncrease, onDecrease, color } = this.props; //props that are sent from  funcCounter
    return (
      <View>
        <Text>{color}</Text>
        <Button onPress={onIncrease} title={`Increase ${color}`} />
        <Button onPress={onDecrease} title={`Decrease ${color}`} />
      </View>
    ); // If no arguments no need for => arrow operator
  }
}

// const funcCounter = ({ color, onIncrease, onDecrease }) => {
//   return (
//     <View>
//       <Text>{color}</Text>
//       <ColorCounter onIncrease={onIncrease} onDecrease={onDecrease} />
//     </View>
//   );
// };

const styles = StyleSheet.create({});

export default ColorCounter;
