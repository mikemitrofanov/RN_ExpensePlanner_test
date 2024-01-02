import {StyleSheet, Text, View} from "react-native";
import {useLayoutEffect} from "react";
import IconButton from "../components/UI/IconButton";
import {Styles} from "../constants/styles";

function ManageExpenseScreen({ route, navigation }) {
  const { params } = route;
  const isEditing = !!params?.id;
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing])
  
  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={Styles.colors.error500}
            size={36}
            onPress={() => {}}
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Styles.colors.primary800
  },
  
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Styles.colors.primary200,
    alignItems: 'center',
  }
});