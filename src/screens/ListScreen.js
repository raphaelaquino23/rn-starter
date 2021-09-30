import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "Friend #3", age: 32 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 53 },
    { name: "Friend #6", age: 30 },
    { name: "Friend #7", age: 26 },
    { name: "Friend #8", age: 15 },
    { name: "Friend #9", age: 22 },
  ];

  //destructuring.
  const { textStyle } = styles;
  // Non-Destructured Code
  // Was able to destructure textStyle but not friend and item
  return (
    <FlatList
      // horizontal = {true} // Can also just write horizontal
      //showsHorizontalScrollIndicator = {false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}

      //Alternative code for renderItem
      //renderItem ={(element) => {}}
      // element === { item: { name: 'Friend #1'}, index: 0 }
    />
  );
};
// attempt at destructuring
//   return (
//     <FlatList
//       // horizontal = {true} // Can also just write horizontal
//       //showsHorizontalScrollIndicator = {false}
//       keyExtractor={friendName}
//       data={friends}
//       renderItem={({ item }) => {
//         const { name, age } = item;
//         return (
//           <Text style={textStyle}>
//             {name} - Age {age}
//           </Text>
//         );
//       }}

//       //Alternative code for renderItem
//       //renderItem ={(element) => {}}
//       // element === { item: { name: 'Friend #1'}, index: 0 }
//     />
//   );
// };

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
