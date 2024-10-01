import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Markdown from 'react-native-markdown-display';

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

const ExpenseChart2 = () => {
    const [exData, setExData] = useState([]);
    const [shop, setshop] = useState(0);
    const [travel, settravel] = useState(0);
    const [food, setfood] = useState(0);
    const [reg, setreg] = useState(0);
    const [loading, setLoading] = useState(false); // State to manage loading
    const [showComponent, setShowComponent] = useState(false);

    const handlePress = async () => {
        setLoading(true);
        axios.post()
        setTimeout(() => {
            setLoading(false);
            setShowComponent(true);
        }, 2000); // Simulate 2 seconds loading time
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
                <Text>{shop} {travel} {reg} {food}</Text>

                <Pressable
                    onPress={handlePress}
                    style={{ paddingHorizontal: 20, paddingVertical: 30, backgroundColor: "#000", borderRadius: 20, alignItems: "center" }}>
                    <Text style={{ color: "#fff", fontSize: 20 }}>Make Your Personalised Budget</Text>
                </Pressable>

                {loading && (
                    <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
                )}

                {showComponent && (
                    <View style={styles.personalizedBudget}>
                        {/* <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>
                            Your Personalized Budget:
                        </Text>
                        <Text style={styles.budgetText}>Travel: ₹{travel}</Text>
                        <Text style={styles.budgetText}>Shopping: ₹{shop}</Text>
                        <Text style={styles.budgetText}>Food: ₹{food}</Text>
                        <Text style={styles.budgetText}>Regular Expense: ₹{reg}</Text> */}
                        <Markdown>"Based on your current spending, here's a possible optimized budget for the
                            remaining month:

                            * **Remaining Budget:** ₹39,000 (₹45,000 - ₹6,000)
                            * **Daily Budget (25 days):** ₹1,560 (₹39,000 / 25)
                            * **Adjust spending** in Shopping and Travel categories to stay within the daily
                            budget.
                            * **Maintain Grocery spending.**
                            * **Track expenses daily** to ensure you stay within your budget."</Markdown>
                    </View>
                )}
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
    personalizedBudget: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    budgetText: {
        fontSize: 16,
        color: '#333',
        marginTop: 10,
    },
});

export default ExpenseChart2;
