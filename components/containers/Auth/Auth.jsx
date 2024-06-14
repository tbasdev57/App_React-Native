import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Login from "./Login";
import Singup from "./Singup";

export default function Auth(props) {
  const [isLogin, setIsLogin] = useState(true);

  function changeState() {
    setIsLogin(!isLogin);
  }

  return (
    <View style={style.view}>
      <TouchableOpacity onPress={changeState}>
        <Text>Changer l'état</Text>
      </TouchableOpacity>
      <Text style={style.txt}>{isLogin ? <Login /> : <Singup />}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    backgroundColor: "royalblue",
    padding: 20,
  },
  txt: {
    fontSize: 20,
    color: "whitesmoke",
  },
});
