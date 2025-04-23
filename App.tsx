import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Main from './src/Screens/HomeScreen/HomeScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>💱 Currency Converter</Text>
        <ActivityIndicator size="large" color="#1a237e" />
      </View>
    );
  }

  return <Main />;
};

export default App;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a237e',
  },
  splashText: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
