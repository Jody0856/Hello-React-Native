import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App2 from './App2';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 1, backgroundColor: 'orange'}} />
      <View style={{flex: 1, backgroundColor: 'yellow'}} />
      <View style={{flex: 1, backgroundColor: 'green'}} />
      <View style={{flex: 1, backgroundColor: 'blue'}} />
      <View style={{flex: 1, backgroundColor: 'purple'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
