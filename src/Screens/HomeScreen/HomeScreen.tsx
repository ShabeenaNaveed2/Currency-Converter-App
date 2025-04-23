import React from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet, ActivityIndicator } from 'react-native';
import { CurrencyPicker } from './components/currencyPicker';
import { currencyData } from './components/currencyData';
import { getExchangeRate } from '../../assets/api/api';

type CurrencyCode = keyof typeof currencyData;

const Main = () => {
  const [amount, setAmount] = React.useState<string>('1');
  const [fromCurrency, setFromCurrency] = React.useState<CurrencyCode>('USD');
  const [toCurrency, setToCurrency] = React.useState<CurrencyCode>('INR');
  const [convertedAmount, setConvertedAmount] = React.useState<string>('0');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchRate = async () => {
      const parsed = parseFloat(amount);
      if (isNaN(parsed) || parsed <= 0) return;

      setLoading(true);
      setError(null);

      try {
        const rate = await getExchangeRate(fromCurrency, toCurrency);
        setConvertedAmount((rate * parsed).toFixed(2));
      } catch (err: any) {
        setError('Could not fetch exchange rate. Please try again later.');
        setConvertedAmount('0');
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>💸 Currency Converter</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.flag}>{currencyData[fromCurrency].flag}</Text>
          <Text style={styles.symbol}>{currencyData[fromCurrency].symbol}</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter amount"
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        <CurrencyPicker selectedValue={fromCurrency} onValueChange={val => setFromCurrency(val as CurrencyCode)} />
      </View>

      <Text style={styles.arrow}>⬇️</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.flag}>{currencyData[toCurrency].flag}</Text>
          <Text style={styles.symbol}>{currencyData[toCurrency].symbol}</Text>
          {loading ? (
            <ActivityIndicator size="small" color="#007AFF" style={{ marginLeft: 10 }} />
          ) : (
            <Text style={styles.convertedAmount}>{convertedAmount}</Text>
          )}
        </View>
        <CurrencyPicker selectedValue={toCurrency} onValueChange={val => setToCurrency(val as CurrencyCode)} />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
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
