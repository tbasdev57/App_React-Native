// Créer deux composant: Login.jsx et Signup.jsx (Un texte qui affiche connection ou inscription).
// Dans Auth.jsx:
// Créer une variable d'état: isLogin. Avec la valeur initial de true.

// Rendre conditionnelement par rapport a isLogin, le composant Login ou Signup.

// On aura un bouton, qui permet de basculer d'un composant a l'autre.
// On aura un TouchableOpacity, va executer un fonction qui change la variable isLogin a true ou false.

//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Singup = () => {
  return (
    <View style={styles.container}>
      <Text>Inscription</Text>
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
});

//make this component available to the app
export default Singup;
