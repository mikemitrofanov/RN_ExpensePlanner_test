import {ActivityIndicator, StyleSheet, View} from "react-native";
import {Styles} from "../../constants/styles";

function Loading() {
  return (
    <View style={styles.container}  >
      <ActivityIndicator size="large" color="white"/>
    </View>
  )
}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: Styles.colors.primary700,
  }
})