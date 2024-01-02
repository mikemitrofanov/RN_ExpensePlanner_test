import {StyleSheet, Text, View} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpensesScreen() {
  return (
    <ExpensesOutput expensesPeriod='total'/>
  )
}
export default AllExpensesScreen;

const styles = StyleSheet.create({

});