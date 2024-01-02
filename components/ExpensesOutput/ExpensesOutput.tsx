import {StyleSheet, View, Text, FlatList} from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import {Styles} from "../../constants/styles";

const TMP = [
  {
    id: '1',
    description: 'qeqwe',
    amount: 59.99,
    date: new Date('2023-12-27')
  },
  {
    id: '2',
    description: 'asdfasdf',
    amount: 39.99,
    date: new Date('2023-12-20')
  },
  {
    id: '3',
    description: 'tyuityityu',
    amount: 5.99,
    date: new Date('2023-11-12')
  },
  {
    id: '4',
    description: 'tuydoruitoidrty',
    amount: 15.99,
    date: new Date('2023-10-19')
  }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={TMP} expensesPeriod={expensesPeriod}/>
      <ExpensesList expenses={TMP}/>
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