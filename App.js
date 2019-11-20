import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App2 from './App2';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native, I am Joddy</Text>
      
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