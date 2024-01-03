import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import {Styles} from "./constants/styles";
import IconButton from "./components/UI/IconButton";
import { store } from './store/store';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Styles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: Styles.colors.primary500 },
        tabBarActiveTintColor: Styles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon='add'
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate('ManageExpenses')}
          />
        )
      })}
    >
      <BottomTab.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => <Ionicons name="hourglass" color={color} size={size} />
        }}
      />
      
      <BottomTab.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => <Ionicons name="calendar" color={color} size={size} />
        }}
      />
    </BottomTab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Styles.colors.primary500 },
              headerTintColor: 'white'
            }}
          >
            <Stack.Screen
              name="TabsExpenses"
              component={TabsNavigation}
              options={{
                headerShown: false
              }}
            />
            
            <Stack.Screen
              name="ManageExpenses"
              options={{
                presentation: 'modal'
              }}
              component={ManageExpenseScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
