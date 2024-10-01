import { Button, StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ExpenseChart from './Graph';
import BottomNavBar from './BottomNavbar';

const HomeScreen = () => {
  return (
    <>
    <View >
    <View style={{height:100,width:500,flexDirection:"row",alignItems:"center",gap:40}}>
{/* top nav */}
<Entypo name="menu" size={24} color="black" style={{margin:20}} />
<View style={{width:180,fontSize:20,fontWeight:"bold",paddingHorizontal:50}}>
<Text style={{fontWeight:900,fontSize:20}}>₹ 45,000</Text>
<Text>Total Balance</Text>
</View>

<Ionicons name="notifications-outline" size={24} color="black" style={{margin:20}} />
    </View>
    <View style={{flexDirection:"row",gap:10}}>
        {/* sub top nav */}

    <View style={{width:250,height:50,backgroundColor:"#f5f5f5",borderRadius:20,flexDirection:"row",alignItems:"center",marginLeft:20}}>
        <View style={{width:125,backgroundColor:"#000",height:50,borderRadius:20 ,alignItems:"center",justifyContent:"center"}}><Text style={{color:"white"}}>Expenses</Text> 
        </View>
        <Text style={{marginLeft:20}}>Income</Text>
    </View>
    <Pressable style={{width:100,height:50,backgroundColor:"#f5f5f5",borderRadius:20,flexDirection:"row",alignItems:"center",paddingLeft:20}}><Text>Sep</Text></Pressable>
    </View>

  

<ExpenseChart/>

    <View>
    {/*expences  */}
    </View>
    </View>
<BottomNavBar/>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})