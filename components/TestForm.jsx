import { StyleSheet, Text, View, Image, Button, TextInput, Alert } from "react-native";
import { useState } from "react";
const TestForm = () => {
  const [text, setText] = useState("mellb");
  return (
    <>
      <TextInput
        style={styles.smash}
        onChangeText={setText}
        value={text}
      ></TextInput>
      <Button title="press me" onPress={() => Alert.alert('I have been pressed')}/>
      <Text> {text}</Text>
    </>
  );
};
const styles = StyleSheet.create({
  smash: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TestForm;
