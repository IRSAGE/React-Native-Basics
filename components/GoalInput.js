import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.inputText}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default GoalInput;
