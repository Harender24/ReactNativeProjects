import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import HeaderComponent from './components/HeaderComponent';
import CarsList from './components/CarsList';
export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <CarsList />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
