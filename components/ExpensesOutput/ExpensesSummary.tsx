import {StyleSheet, Text, View} from "react-native";
import {Styles} from "../../constants/styles";

function ExpensesSummary({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensesPeriod}</Text>
      <Text style={styles.sum}>${expenses.reduce((acc, item) => acc + item.amount, 0).toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Styles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  period: {
    fontSize: 12,
    color: Styles.colors.primary400,
  },
  
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Styles.colors.primary500
  }
})