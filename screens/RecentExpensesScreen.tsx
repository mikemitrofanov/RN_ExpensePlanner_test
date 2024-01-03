import {StyleSheet, Text, View} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {ExpenseInterface} from "../store/slices/expenses";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {getDateMinusDays} from "../util/date";

function RecentExpensesScreen() {
  const expenses: Array<ExpenseInterface> = useSelector((state: RootState) => state.expensesReducer.expenses);
  const recent = expenses.filter((item) => {
    const today = new Date();
    const oneWeekAgo = getDateMinusDays(today, 7 );
    return item.date > oneWeekAgo;
  })
  
  return (
    <ExpensesOutput expenses={recent} expensesPeriod='Last 7 days'/>
  )
}

export default RecentExpensesScreen;

const styles = StyleSheet.create({

});