<template>
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-2">
      <h2 class="text-2xl font-bold mb-4 text-center text-blue-500">Calcular descontos</h2>
      <form @submit.prevent="calculateDiscount" class="space-y-4">
        <div>
          <label for="originalValue" class="block text-gray-700">Valor Inicial:</label>
          <input
            v-model="originalValue"
            type="number"
            step="0.01"
            required
            class="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
  
        <div>
          <label for="discountRate" class="block text-gray-700">Desconto (%):</label>
          <input
            v-model="discountRate"
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
        <p class="text-lg font-bold">Valor descontado: {{ result }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        originalValue: 0,
        discountRate: 0,
        result: null
      };
    },
    methods: {
      calculateDiscount() {
        const discountedValue = this.originalValue - (this.originalValue * this.discountRate) / 100;
        this.result = discountedValue.toFixed(2);
      }
    }
  };
  </script>
  