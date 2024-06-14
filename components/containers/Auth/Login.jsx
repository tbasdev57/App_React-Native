//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// create a component
const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  function handleEmail(event) {
    setEmailInput(event.target.value);
  }

  function handlePassword(e) {
    setPasswordInput(e.target.value);
  }

  function connect() {
    alert(`Connection avec succes, Email: ${emailInput}`);
  }

  return (
    <View style={styles.container}>
      <Text>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"royalblue"}
        value={emailInput}
        onChange={handleEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor={"royalblue"}
        value={passwordInput}
        onChange={handlePassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={connect}>
        <Text>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },

  input: {
    backgroundColor: "#DEDEDE",
    padding: 7,
  },
});

//make this component available to the app
export default Login;
