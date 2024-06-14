import { Text, View } from "react-native";

export default function Profil(props) {
  return (
    <View>
      <Text>
        {props.name} {props.firstName}
      </Text>
    </View>
  );
}
