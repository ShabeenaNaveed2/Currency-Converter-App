import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { currencyData } from './currencyData';

interface Props {
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export const CurrencyPicker: React.FC<Props> = ({ selectedValue, onValueChange }) => {
  return (
    <View style={styles.pickerWrapper}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
        {Object.entries(currencyData).map(([code, { flag }]) => (
          <Picker.Item
            key={code}
            label={`${flag} ${code}`}
            value={code}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 5,
    backgroundColor: '#fff',
  },
});
