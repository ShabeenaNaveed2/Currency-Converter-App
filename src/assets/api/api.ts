import axios from 'axios';

export const getExchangeRate = async (from: string, to: string): Promise<number> => {
  try {
    const url = `https://v6.exchangerate-api.com/v6/094c107e64f3eb7a2335e087/latest/${from}`;
    const response = await axios.get(url);

    console.log('API response:', response.data);

    if (
      !response.data ||
      !response.data.conversion_rates ||
      typeof response.data.conversion_rates[to] !== 'number'
    ) {
      throw new Error('Invalid response from exchangerate-api.com');
    }

    return response.data.conversion_rates[to];
  } catch (error: any) {
    console.error('API Error:', error.message || error);
    throw new Error('Failed to fetch exchange rate.');
  }
};
