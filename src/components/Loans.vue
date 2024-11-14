<template>
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-2">
      <h2 class="text-2xl font-bold mb-4 text-center text-blue-500">Calcular Empréstimo</h2>
      <form @submit.prevent="calculateLoan" class="space-y-4">
        <div>
          <label for="loanAmount" class="block text-gray-700">Valor do Empréstimo (P):</label>
          <input
            v-model="loanAmount"
            type="number"
            step="0.01"
            required
            class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        <div>
          <label for="interestRate" class="block text-gray-700">Taxa de Juros (%):</label>
          <input
            v-model="interestRate"
            type="number"
            step="0.01"
            required
            class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        <div>
          <label for="loanTerm" class="block text-gray-700">Prazo (meses):</label>
          <input
            v-model="loanTerm"
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
        <p class="text-lg font-bold">Parcela Mensal: {{ result }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loanAmount: 0,
        interestRate: 0,
        loanTerm: 0,
        result: null
      };
    },
    methods: {
      calculateLoan() {
        const monthlyInterestRate = this.interestRate / 100 / 12;
        const months = this.loanTerm;
        const payment = this.loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -months));
        this.result = payment.toFixed(2);
      }
    }
  };
  </script>
  