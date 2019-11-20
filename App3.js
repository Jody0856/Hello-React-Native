import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
    <View style={styles.container}>
      <Text>Hello React Native, I am Joddy</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});