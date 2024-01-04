import {StyleSheet, Text, TextInput, View} from "react-native";
import {useLayoutEffect} from "react";
import uuid from 'react-native-uuid';
import IconButton from "../components/UI/IconButton";
import {Styles} from "../constants/styles";
import Button from "../components/UI/Button";
import {useDispatch, useSelector} from "react-redux";
import expensesReducer, {addExpense, deleteExpense, updateExpense} from "../store/slices/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import {useCreateExpenseMutation, useDeleteExpenseMutation, useUpdateExpenseMutation} from "../store/services/expenses";

export type confirmHandlerParams = {amount: number, date: Date, description: string}

function ManageExpenseScreen({ route, navigation }) {
  const { params } = route;
  const isEditing = !!params?._id;
  const dispatch = useDispatch();
  const expenses = useSelector(store => store.expensesReducer.expenses);
  const editingExpense = isEditing ? {
    amount: params.amount,
    date: new Date(params.date),
    description: params.description,
  } : undefined;
  
  const [createExpense] = useCreateExpenseMutation();
  const [updateExpense] = useUpdateExpenseMutation();
  const [deleteExpense] = useDeleteExpenseMutation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing])
  
  const closeModal = () => navigation.goBack();
  
  const cancelHandler = () => {
    closeModal();
  }
  
  const confirmHandler = async (data: confirmHandlerParams) => {
    const obj = { ...data };
    if (!isEditing) await createExpense(obj);
    else await updateExpense({ id: params?._id, ...data });
    
    // dispatch(isEditing ? updateExpense(obj) : (obj));
    closeModal();
  }
  
  const deleteHandler = async () => {
    await deleteExpense({ id: params?._id });
    // dispatch(deleteExpense(params?.id));
    closeModal();
  }
  
  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onConfirm={confirmHandler}
        isEditing={isEditing}
        defaultValues={editingExpense}
      />
      
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={Styles.colors.error500}
            size={36}
            onPress={deleteHandler}
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
  },
});