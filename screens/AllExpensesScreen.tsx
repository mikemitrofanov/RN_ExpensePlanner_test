import {StyleSheet, Text, View} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {ExpenseInterface} from "../store/slices/expenses";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

function AllExpensesScreen() {
  const expenses: Array<ExpenseInterface> = useSelector((state: RootState) => state.expensesReducer.expenses);
  
  return (
    <ExpensesOutput expenses={expenses} expensesPeriod='total'/>
  )
}
export default AllExpensesScreen;

const styles = StyleSheet.create({

});