import {FlatList, Text} from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item => item._id)}
      renderItem={(itemData) => <ExpenseItem expense={itemData.item} /> }
    />
  )
}

export default ExpensesList;