<template>
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-2">
      <h2 class="text-2xl font-bold mb-4 text-center text-blue-500">Converter Moeda</h2>
      <form @submit.prevent="convertCurrency" class="space-y-4">
        <div>
          <label for="amount" class="block text-gray-700">Quantidade:</label>
          <input
            v-model="amount"
            type="number"
            step="0.01"
            required
            class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        <div>
          <label for="exchangeRate" class="block text-gray-700">Taxa de Câmbio:</label>
          <input
            v-model="exchangeRate"
            type="number"
            step="0.01"
            required
            class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Calcular
        </button>
      </form>
  
      <div v-if="result !== null" class="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
        <p class="text-lg font-bold">Valor Convertido: {{ result }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        amount: 0,
        exchangeRate: 0,
        result: null
      };
    },
    methods: {
      convertCurrency() {
        const convertedAmount = this.amount * this.exchangeRate;
        this.result = convertedAmount.toFixed(2);
      }
    }
  };
  </script>
  