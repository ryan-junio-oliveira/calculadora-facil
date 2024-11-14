<template>
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-2">
      <h2 class="text-2xl font-bold mb-4 text-center text-blue-500">Rentabilidade da Poupança</h2>
      <form @submit.prevent="calculateSavings" class="space-y-4">
        <div>
          <label for="initialAmount" class="block text-gray-700">Valor Inicial:</label>
          <input
            v-model="initialAmount"
            type="number"
            step="0.01"
            required
            class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        <div>
          <label for="annualRate" class="block text-gray-700">Taxa Anual (%):</label>
          <input
            v-model="annualRate"
            type="number"
            step="0.01"
            required
            class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        <div>
          <label for="years" class="block text-gray-700">Tempo (anos):</label>
          <input
            v-model="years"
            type="number"
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
        <p class="text-lg font-bold">Rentabilidade Total: {{ result }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        initialAmount: 0,
        annualRate: 0,
        years: 0,
        result: null
      };
    },
    methods: {
      calculateSavings() {
        const total = this.initialAmount * Math.pow(1 + this.annualRate / 100, this.years);
        this.result = total.toFixed(2);
      }
    }
  };
  </script>
  