import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Routes from '../2024802010473_Tranducphuquy_Lab2/Screens/Routes';
export default function App(){
    return(
   <Routes/>
    )
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});