import {StyleSheet, View, Text, FlatList, AppState} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {Styles} from "../../constants/styles";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {ExpenseInterface} from "../../store/slices/expenses";

function ExpensesOutput({expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod}/>
      <ExpensesList expenses={expenses}/>
    </View>
  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: Styles.colors.primary700,
  }
});