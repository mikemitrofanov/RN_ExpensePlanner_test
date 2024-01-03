import {StyleSheet, View, Text, TextInput} from "react-native";
import {KeyboardTypeOptions, TextInputProps} from "react-native/Libraries/Components/TextInput/TextInput";
import {Styles} from "../../constants/styles";
import {StyleProp} from "react-native/Libraries/StyleSheet/StyleSheet";
import {ViewStyle} from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type InputParams = {
  config: TextInputProps,
  containerStyle: StyleProp<ViewStyle>,
  label: string,
  isValid: boolean
}

function Input({config = {}, containerStyle = {}, label = '', isValid = true}: InputParams) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, !isValid && styles.labelInvalid]}>{label}</Text>
      <TextInput {...config} style={[styles.textInput, !isValid && styles.invalidInput, config.style ?? {}]} />
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  
  label: {
    fontSize: 12,
    color: Styles.colors.primary100,
    marginBottom: 4
  },
  
  textInput: {
    backgroundColor: Styles.colors.primary100,
    color: Styles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  
  labelInvalid: {
    color: Styles.colors.error500,
  },
  invalidInput: {
    backgroundColor: Styles.colors.error50,
  }
})