import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#e8f0fe',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
      color: '#1a237e',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 15,
      marginVertical: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    flag: {
      fontSize: 28,
      marginRight: 8,
    },
    symbol: {
      fontSize: 24,
      fontWeight: 'bold',
      marginRight: 8,
    },
    input: {
      flex: 1,
      fontSize: 20,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      padding: 4,
    },
    convertedAmount: {
      fontSize: 22,
      fontWeight: '600',
      color: '#388e3c',
    },
    arrow: {
      fontSize: 24,
      textAlign: 'center',
      marginVertical: 10,
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
    },
  });
  