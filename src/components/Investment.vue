<template>
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-2">
      <h2 class="text-2xl font-bold mb-4 text-center text-blue-500">Calcular Investimento</h2>
      <form @submit.prevent="calculateInvestment" class="space-y-4">
        <div>
          <label for="initialAmount" class="block text-gray-700">Valor Inicial (P):</label>
          <input
            v-model="initialAmount"
            type="number"
            step="0.01"
            required
            class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        <div>
          <label for="rateOfReturn" class="block text-gray-700">Taxa de Retorno Anual (%):</label>
          <input
            v-model="rateOfReturn"
            type="number"
            step="0.01"
            required
            class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        <div>
          <label for="investmentTime" class="block text-gray-700">Tempo (anos):</label>
          <input
            v-model="investmentTime"
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
        <p class="text-lg font-bold">Valor Total: {{ result }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        initialAmount: 0,
        rateOfReturn: 0,
        investmentTime: 0,
        result: null
      };
    },
    methods: {
      calculateInvestment() {
        const total = this.initialAmount * Math.pow(1 + this.rateOfReturn / 100, this.investmentTime);
        this.result = total.toFixed(2);
      }
    }
  };
  </script>
  