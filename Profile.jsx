import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNavBar from './BottomNavbar';

const Profile = () => {
  const transactions = [
    { id: '1', type: 'Received Money', amount: '-₹1,000', date: 'Sep 30', status: 'example@gmail.com' },
    { id: '2', type: 'Send Money', amount: '-₹450', date: 'Sep 29', status: 'user123@okaxis' },
    { id: '3', type: 'Received Money', amount: '+₹2,200', date: 'Sep 28', status: 'user456@upi' },
    { id: '4', type: 'Pay Bill', amount: '-₹350', date: 'Sep 27', status: 'user789@ybl' },
    { id: '5', type: 'Send Money', amount: '+₹800', date: 'Sep 26', status: 'example@bank' },
    { id: '6', type: 'Received Money', amount: '₹1,500', date: 'Sep 25', status: 'payer123@upi' },
    { id: '7', type: 'Pay Bill', amount: '-₹200', date: 'Sep 24', status: 'payer456@okhdfc' },
    { id: '8', type: 'Send Money', amount: '+₹300', date: 'Sep 23', status: 'payer789@okicici' },
    { id: '9', type: 'Received Money', amount: '+₹900', date: 'Sep 22', status: 'payer987@ybl' },
    { id: '10', type: 'Pay Bill', amount: '₹-120', date: 'Sep 21', status: 'payer654@upi' },
  ];

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionIcon}>
        <Icon name={item.amount.startsWith('+') ? 'arrow-upward' : 'arrow-downward'} size={24} color={item.amount.startsWith('+') ? 'green' : 'red'} />
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionType}>{item.type}</Text>
        <Text style={styles.transactionStatus}>{item.status}</Text>
      </View>
      <View style={styles.transactionAmount}>
        <Text style={{ color: item.amount.startsWith('+') ? 'green' : 'red' }}>{item.amount}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profilePic} />
          <Text style={styles.profileName}>Ridoy Rock</Text>
        </View>
        <Icon name="menu" size={30} color="black" />
      </View>

      {/* Card Section */}
      {/* <View containerStyle={styles.cardContainer}> */}
      {/* <View style={styles.cardHeader}>
          <Text style={styles.bankName}>Dhakabank</Text>
          <Text style={styles.cardAmount}>₹1260.50</Text>
        </View>
        <Text style={styles.cardDate}>2020</Text> */}
      <Image
        style={styles.cardContainer}
        source={require("./assets/card.png")}
      />
      {/* </View> */}

      {/* Limits Section */}
      <View style={styles.limitsSection}>
        <Card containerStyle={[styles.limitCard, { backgroundColor: '#FF6E6E' }]}>
          <Text style={styles.limitLabel}>Current Limit</Text>
          <Text style={styles.limitValue}>₹ 10,000</Text>
        </Card>
        <Card containerStyle={[styles.limitCard, { backgroundColor: '#4E90FF' }]}>
          <Text style={styles.limitLabel}>Payment Due</Text>
          <Text style={styles.limitValue}>₹ 3,380</Text>
        </Card>
      </View>

      {/* Transactions Section */}
      <Text style={styles.sectionTitle}>Transactions</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={item => item.id}
        style={styles.transactionList}
      />

      <BottomNavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardContainer: {
    borderRadius: 10,
    // padding: 20,
    // marginBottom: 20,
    width: 360,
    objectFit: "contain"
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDate: {
    fontSize: 14,
    color: '#777',
    marginTop: 10,
  },
  limitsSection: {
    flexDirection: 'row',
    justifyContent: 'gap',
    width: 320,
    marginBottom: 20,
  },
  limitCard: {
    width: '48%',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  limitLabel: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  limitValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionList: {
    flexGrow: 0,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  transactionIcon: {
    width: 30,
    alignItems: 'center',
  },
  transactionDetails: {
    flex: 1,
    paddingHorizontal: 10,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionStatus: {
    fontSize: 14,
    color: '#888',
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  transactionDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});

export default Profile;