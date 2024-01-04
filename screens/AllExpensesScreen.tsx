import {StyleSheet, Text, View} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {ExpenseInterface} from "../store/slices/expenses";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import { useGetExpensesQuery } from '../store/services/expenses';

function AllExpensesScreen() {
  // const expenses: Array<ExpenseInterface> = useSelector((state: RootState) => state.expensesReducer.expenses);
  const { data, error, isLoading } = useGetExpensesQuery();
  if (isLoading) return <Text>Loading</Text>
  
  return (
    <ExpensesOutput expenses={data} expensesPeriod='total'/>
  )
}
export default AllExpensesScreen;

const styles = StyleSheet.create({

});