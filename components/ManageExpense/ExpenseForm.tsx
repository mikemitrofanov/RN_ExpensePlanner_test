import {StyleSheet, View, Text, Alert} from "react-native";
import Input from "./Input";
import {useState} from "react";
import Button from "../UI/Button";
import {confirmHandlerParams} from "../../screens/ManageExpenseScreen";
import {ExpenseInterface} from "../../store/slices/expenses";
import {Styles} from "../../constants/styles";

type FormState = {
  amount: string,
  date: string,
  description: string
}

type FormParams = {
  onCancel: () => void,
  onConfirm: (data: confirmHandlerParams) => void,
  isEditing: boolean,
  defaultValues: ExpenseInterface | undefined
}

function ExpenseForm({ onCancel, onConfirm, isEditing, defaultValues} : FormParams) {
  const [data, setData] = useState<FormState>({
    amount: defaultValues?.amount.toString() ?? '',
    date: defaultValues?.date.toISOString().slice(0, 10) ?? '',
    description: defaultValues?.description ?? ''
  });
  
  const [errors, setErrors] = useState({
    amountValid: true,
    dateValid: true,
    descriptionValid: true,
  });
  
  const changeInputHandler = (key: keyof FormState, text: string) => {
    setData((prevState) => ({...prevState, [key]: text}));
    setErrors((prevState => ({...prevState, [`${key}Valid`]: true})))
  }
  
  const submitHandler = () => {
    const submitDate = {
      amount: +data.amount,
      date: new Date(data.date),
      description: data.description
    };
    
    const amountValid = !isNaN(submitDate.amount) && submitDate.amount > 0;
    const dateValid = submitDate.date.toString() !== 'Invalid Date';
    const descriptionValid = submitDate.description.trim().length > 0;
    
    if (amountValid && dateValid && descriptionValid) onConfirm(submitDate);
    else setErrors({ amountValid, dateValid, descriptionValid });
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={[styles.rowContainer, styles.rowInputsContainer]}>
        <Input
          label='Amount'
          isValid={errors.amountValid}
          containerStyle={{
            flex: 1,
          }}
          config={{
            keyboardType: 'decimal-pad',
            value: data.amount,
            onChangeText: (text) => changeInputHandler('amount', text)
          }}
        />
        
        <Input
          label='Date'
          isValid={errors.dateValid}
          containerStyle={{
            flex: 1,
          }}
          config={{
            keyboardType: 'default',
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            value: data.date,
            onChangeText: (text) => changeInputHandler('date', text)
          }}
        />
      </View>
      
      <Input
        label='Description'
        isValid={errors.descriptionValid}
        config={{
          multiline: true,
          onChangeText: (text) => changeInputHandler('description', text),
          value: data. description,
          autoCorrect: false,
          style: {
            textAlignVertical: 'top',
            minHeight: 100
          }
        }}
      />
  
      {(!errors.dateValid || !errors.amountValid || !errors.descriptionValid) && (
        <Text style={styles.errorText}>Invalid input values</Text>
      )}
      
      <View style={styles.buttonsContainer}>
        <Button mode={'flat'} onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
    </View>
  )
}

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  
  rowContainer: {
    flexDirection: 'row'
  },
  
  rowInputsContainer: {
    justifyContent: 'space-between'
  },
  
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  
  errorText: {
    textAlign: 'center',
    color: Styles.colors.error500,
    margin: 8
  }
})