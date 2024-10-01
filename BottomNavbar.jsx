import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure you install react-native-vector-icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState('stats');
  const navigation = useNavigation(); // Initialize navigation

  const handleTabPress = (tabName, routeName) => {
    setActiveTab(tabName);
    navigation.navigate(routeName); // Navigate to the corresponding screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleTabPress('home', 'Home')}
        style={styles.iconWrapper}
      >
        <Icon
          name="home-outline"
          size={30}
          color={activeTab === 'home' ? '#000' : '#ccc'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleTabPress('apps', 'Personalised')}
        style={styles.iconWrapper}
      >
        <Icon
          name="apps-outline"
          size={30}
          color={activeTab === 'apps' ? '#000' : '#ccc'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleTabPress('stats', 'Expense')}
        style={styles.iconWrapper}
      >
        <Icon
          name="stats-chart-outline"
          size={30}
          color={activeTab === 'stats' ? '#000' : '#ccc'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleTabPress('profile', 'Profile')}
        style={styles.iconWrapper}
      >
        <Icon
          name="person-outline"
          size={30}
          color={activeTab === 'profile' ? '#000' : '#ccc'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%', // Adjust to full screen width
  },
  iconWrapper: {
    alignItems: 'center',
  },
});

export default BottomNavBar;
