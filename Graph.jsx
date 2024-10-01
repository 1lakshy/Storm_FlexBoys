import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import axios from 'axios';

const expenses = [
  { day: 24, percentage: 0, color: '#f68e88' },
  { day: 25, percentage: 0, color: '#c4d7ee' },
  { day: 26, percentage: 0, color: '#f3e3b2' },
  { day: 27, percentage: 0, color: '#a3e9b4' },
  { day: 28, percentage: 0, color: '#c7b4ee' },
  { day: 29, percentage: 0, color: '#e3eec2' },
  { day: 30, percentage: 67, color: '#f2b4b9' },
  { day: 1, percentage: 35, color: '#f5d1a6' },
];
const link = `192.168.246.194`
const ExpenseChart = () => {
  const [exData, setExData] = useState([]);
  const [sum, setsum] = useState(0);
  const [shop, setshop] = useState(0);
  const [travel, settravel] = useState(0);
  const [food, setfood] = useState(0);
  const [reg, setreg] = useState(0);
  const [hasTravelExceeded, setHasTravelExceeded] = useState(false); // State to track if the API has been hit
  // const [expenses, setexpenses] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.246.194:8000/api/getex`);
        setExData(response.data); // Ensure you're setting the data correctly

        // Reset the category amounts before recalculating
        setfood(0);
        setreg(0);
        setshop(0);
        settravel(0);

        // Calculate amounts based on categories
        response.data.forEach((e) => {
          switch (e.category) {
            case 'Travel ✈️':
              settravel((prev) => prev + e.amount);
              break;
            case 'Shopping 🛍️':
              setshop((prev) => prev + e.amount);
              break;
            case 'Food 🍽️':
              setfood((prev) => prev + e.amount);
              break;
            case 'Regular Expense 💵':
              setreg((prev) => prev + e.amount);
              break;
            default:
              break;
          }
        });
        // Check if travel exceeds 10,000 and if the API request hasn't been made yet
        if ((travel > 10000) && !hasTravelExceeded) {
          // Hit the API request once
          await axios.post(`http://192.168.246.194:8000/api/send-reminder`, {
            userName: "Lakshy Sharma",
            phoneNumber: "+917021620659",
          });

          // Set the state to ensure the API is hit only once
          console.log("MESSAGE SENT BECAUSE EXCEEDED")
          setHasTravelExceeded(true);
        }
      } catch (err) {
        console.log(err); // Handle error
      }
    };

    const timeOut = setTimeout(() => {
      fetchData();
    }, 10000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [travel, hasTravelExceeded]);

  const colorMapping = {
    'Travel ✈️': '#c7b4ee',
    'Shopping 🛍️': '#a3e9b4',
    'Food 🍽️': '#f68e88',
    'Regular Expense 💵': '#e0e0e0', // Default color
    // Add more categories and their colors as needed
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.chartContainer}>
        {expenses.map((item, index) => (
          <View key={index} style={styles.barContainer}>
            <View
              style={[
                styles.bar,
                { height: item.percentage * 3, backgroundColor: item.color },
              ]}
            />
            <Text style={styles.dayText}>{item.day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Day: ₹52</Text>
        <Text style={styles.summaryText}>Week: ₹403</Text>
        <Text style={styles.summaryText}>Month: ₹1,612</Text>
      </View>

      <ScrollView style={styles.expenseDetails}>
        <Pressable><Text>{shop} {travel} {reg} {food}</Text></Pressable>

        {exData.map((expense) => (
          <View key={expense._id} style={styles.expenseItem}>
            <View style={[styles.icon, { backgroundColor: colorMapping[expense.category] || '#e0e0e0' }]} />
            <Text style={styles.expenseText}>{expense.category}</Text>
            <Text style={styles.expenseAmount}>
              ₹{expense.amount.toFixed(2)} {/* Format amount to 2 decimal places */}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  barContainer: {
    alignItems: 'center',
  },
  bar: {
    width: 25,
    borderRadius: 5,
  },
  dayText: {
    marginTop: 5,
    fontSize: 14,
    color: '#777',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#333',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
  },
  expenseDetails: {
    marginTop: 20,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  expenseText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  expenseAmount: {
    fontSize: 16,
    color: '#333',
  },
});

export default ExpenseChart;
