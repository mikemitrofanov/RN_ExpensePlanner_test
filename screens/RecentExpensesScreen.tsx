import {StyleSheet, Text, View} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {ExpenseInterface} from "../store/slices/expenses";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {getDateMinusDays} from "../util/date";
import {useGetExpensesQuery} from "../store/services/expenses";

function RecentExpensesScreen() {
  // const expenses: Array<ExpenseInterface> = useSelector((state: RootState) => state.expensesReducer.expenses);
  const { data, error, isLoading } = useGetExpensesQuery();
  if (isLoading) return <Text>Loading</Text>
  
  const recent = data.filter((item) => {
    const today = new Date();
    const oneWeekAgo = getDateMinusDays(today, 7 );
    return new Date(item.date) > oneWeekAgo;
  })
  
  return (
    <ExpensesOutput expenses={recent} expensesPeriod='Last 7 days'/>
  )
}

export default RecentExpensesScreen;

const styles = StyleSheet.create({

});