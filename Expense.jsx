// import React, { useState } from 'react';
// import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import DropdownComponent from './Dropdown';
// import DropdownComponent2 from './Dropdown2';
// import BottomNavBar from './BottomNavbar';
// import FileUploadComponent from './Fileupload';

// export default function ExpenseInput() {
//   const [amount, setAmount] = useState('');

//   const handlePress = (value) => {
//     setAmount(amount + value);
//   };

//   const handleClear = () => {
//     setAmount('');
//   };

//   const handleSubmit = () => {
//     // Handle submit logic here
//     console.log("Amount Submitted: ", amount);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.topNav}>
//         {/* <TouchableOpacity style={styles.topButton}>
//           <Text style={styles.topButtonText}>Cash</Text>
//         </TouchableOpacity> */}
//         <DropdownComponent style={styles.topButton}/>
//         {/* <TouchableOpacity style={styles.topButton}>
//           <Text style={styles.topButtonText}>Shopping</Text>
//         </TouchableOpacity> */}
//         <DropdownComponent2 style={styles.topButton}/>
//       </View>

//       <Text style={styles.title}>Expenses</Text>

//       <TextInput
//         style={styles.amountInput}
//         value={`Rs ₹{amount}`}
//         placeholder="0.00"
//         placeholderTextColor="gray"
//         editable={false}
//       />

//       <Text style={styles.addCommentText}>Add comment...</Text>

//       <View style={styles.grid}>
//         {['1', '2', '3', '4', '5', '6', '7', '8', '9', '₹', '0', '.'].map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.gridButton}
//             onPress={() => handlePress(item)}
//           >
//             <Text style={styles.gridButtonText}>{item}</Text>
//           </TouchableOpacity>
//         ))}

//         <TouchableOpacity style={[styles.gridButton, styles.specialButton]} onPress={handleClear}>
//           <Text style={{color:"#fff"}}>Clear X</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={[styles.gridButton, styles.specialButton]} onPress={handleSubmit}>
//           <Text style={{color:"#fff"}}>Done ✓</Text>
//         </TouchableOpacity>
//       </View>
//       <FileUploadComponent/>
//       <BottomNavBar/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   topNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 30,
//   },
//   topButton: {
//     backgroundColor: '#e7e7e7',
//     padding: 10,
//     borderRadius: 10,
//   },
//   topButtonText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   title: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   amountInput: {
//     fontSize: 48,
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   addCommentText: {
//     textAlign: 'center',
//     color: 'gray',
//     marginBottom: 20,
//   },
//   grid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   gridButton: {
//     width: '28%',
//     padding: 20,
//     margin: 5,
//     backgroundColor: '#e7e7e7',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   gridButtonText: {
//     fontSize: 24,
//     color: '#000',
//   },
//   specialButton: {
//     backgroundColor: '#000',
//     color: '#fff',
//   },
// });



import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DropdownComponent from './Dropdown';
import DropdownComponent2 from './Dropdown2';
import BottomNavBar from './BottomNavbar';
import FileUploadComponent from './Fileupload';
import axios from 'axios';

export default function ExpenseInput() {
  const [amount, setAmount] = useState('');
  const [data, setdata] = useState('');
  const [comment, setComment] = useState('');
  const [mode, setMode] = useState('Cash'); // Default to Cash
  const [category, setCategory] = useState('Travel ✈️'); // Default to Travel
  const [receipt, setReceipt] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handlePress = (value) => {
    setAmount(prevAmount => prevAmount + value);
  };

  const handleClear = () => {
    setAmount('');
    setComment('');
    setMode('Cash'); // Reset to default
    setCategory('Travel ✈️'); // Reset to default
    setReceipt('');
  };

  const handleSubmit = async () => {
    if (!amount || !mode || !category) {
      Alert.alert("Error", "Please fill in all required fields: Amount, Mode, Category, and Receipt.");
      return;
    }

    const expenseData = {
      comment,
      mode,
      amount: parseFloat(amount),
      category,
      receipt,
    };


    setExpenses(prevExpenses => [...prevExpenses, expenseData]);
    // console.log(expenses)
    console.log("hi", expenses)
    try {
      // const response = await axios.post('http://localhost:8000/api/createx', expenses);\
      const response = await axios.post('http://192.168.246.194:8000/api/createx', expenses[0]);
      setdata(response.data);
      console.log("res", data);
      setAmount('');
      setComment('');
      setMode('Cash'); // Reset to default
      setCategory('Travel ✈️'); // Reset to default
      setReceipt('');
      setExpenses([])
    } catch (err) {
      console.log(err);
      setError('Error fetching data');
    }

    Alert.alert('Success', 'Expense added successfully!');
    handleClear();

  };

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <DropdownComponent selectedValue={mode} onValueChange={setMode} />
        <DropdownComponent2 selectedValue={category} onValueChange={setCategory} />
      </View>

      <Text style={styles.title}>Expenses</Text>

      <TextInput
        style={styles.amountInput}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
        placeholderTextColor="gray"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.commentInput}
        value={comment}
        onChangeText={setComment}
        placeholder="Add comment..."
        placeholderTextColor="gray"
      />

      <View style={styles.grid}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '₹', '0', '.'].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridButton}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.gridButtonText}>{item}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={[styles.gridButton, styles.specialButton]} onPress={handleClear}>
          <Text style={{ color: "#fff" }}>Clear X</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.gridButton, styles.specialButton]} onPress={handleSubmit}>
          <Text style={{ color: "#fff" }}>Done ✓</Text>
        </TouchableOpacity>
      </View>

      <FileUploadComponent onFileUpload={setReceipt} />

      <BottomNavBar />

      <View style={styles.expensesList}>
        <Text style={styles.title}>Submitted Expenses</Text>
        {expenses.map((expense, index) => (
          <View key={index} style={styles.expenseItem}>
            <Text>Amount: Rs {expense.amount}</Text>
            <Text>Comment: {expense.comment}</Text>
            <Text>Mode: {expense.mode}</Text>
            <Text>Category: {expense.category}</Text>
            <Text>Receipt: {expense.receipt}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  topButton: {
    backgroundColor: '#e7e7e7',
    padding: 10,
    borderRadius: 10,
  },
  topButtonText: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  amountInput: {
    fontSize: 48,
    textAlign: 'center',
    marginVertical: 10,
  },
  commentInput: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  gridButton: {
    width: '28%',
    padding: 20,
    margin: 5,
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridButtonText: {
    fontSize: 24,
    color: '#000',
  },
  specialButton: {
    backgroundColor: '#000',
    color: '#fff',
  },
  expensesList: {
    marginTop: 20,
  },
  expenseItem: {
    padding: 10,
    backgroundColor: '#e7e7e7',
    borderRadius: 5,
    marginBottom: 10,
  },
});

