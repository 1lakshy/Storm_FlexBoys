// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Expo icons for the dropdown arrow

// export default function DropdownComponent2() {
//   const [visible, setVisible] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('Travel ✈️');

//   const handleSelect = (option) => {
//     setSelectedOption(option);
//     setVisible(false);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.dropdown} onPress={() => setVisible(!visible)}>
//         <Text style={styles.text}>{selectedOption}</Text>
//         <Ionicons name={visible ? "chevron-up" : "chevron-down"} size={20} color="black" />
//       </TouchableOpacity>

//       {visible && (
//         <View style={styles.dropdownContent}>
//           <TouchableOpacity style={styles.option} onPress={() => handleSelect('Travel ✈️')}>
//             <Text style={styles.optionText}>Travel ✈️</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.option} onPress={() => handleSelect('Shopping 🛍️')}>
//             <Text style={styles.optionText}>Shopping 🛍️</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.option} onPress={() => handleSelect('Food 🍽️')}>
//             <Text style={styles.optionText}>Food 🍽️</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.option} onPress={() => handleSelect('Regular Expense 💵')}>
//             <Text style={styles.optionText}>Regular Expense 💵</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// }

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DropdownComponent2({ selectedValue, onValueChange }) {
  const [visible, setVisible] = useState(false);

  const handleSelect = (option) => {
    onValueChange(option); // Call the parent's callback with the selected option
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={() => setVisible(!visible)}>
        <Text style={styles.text}>{selectedValue}</Text>
        <Ionicons name={visible ? "chevron-up" : "chevron-down"} size={20} color="black" />
      </TouchableOpacity>

      {visible && (
        <View style={styles.dropdownContent}>
          <TouchableOpacity style={styles.option} onPress={() => handleSelect('Travel ✈️')}>
            <Text style={styles.optionText}>Travel ✈️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleSelect('Shopping 🛍️')}>
            <Text style={styles.optionText}>Shopping 🛍️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleSelect('Food 🍽️')}>
            <Text style={styles.optionText}>Food 🍽️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleSelect('Regular Expense 💵')}>
            <Text style={styles.optionText}>Regular Expense 💵</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#E0F0FF', // Light blue background color
    borderRadius: 20,
    width: 200,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  dropdownContent: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 60,
    width: 200,
    borderRadius: 10,
    elevation: 5,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
