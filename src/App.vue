<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Header / Navbar -->
    <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <router-link to="/" class="hover:text-blue-500 p-2" active-class="text-blue-500">
                Juros Simples
              </router-link>
            </li>
            <li>
              <router-link to="/juros-compostos" class="hover:text-blue-500 p-2" active-class="text-blue-500">
                Juros Compostos
              </router-link>
            </li>
            <li>
              <router-link to="/desconto" class="hover:text-blue-500 p-2" active-class="text-blue-500">
                Desconto
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <nav v-if="isMenuOpen" class="bg-blue-500 text-white md:hidden">
      <div class="container mx-auto p-4 space-y-2">
        <router-link to="/juros-simples" class="block hover:bg-blue-400 p-2 rounded" active-class="bg-blue-700">
          Juros Simples
        </router-link>
        <router-link to="/juros-compostos" class="block hover:bg-blue-400 p-2 rounded" active-class="bg-blue-700">
          Juros Compostos
        </router-link>
        <router-link to="/desconto" class="block hover:bg-blue-400 p-2 rounded" active-class="bg-blue-700">
          Desconto
        </router-link>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto flex-grow p-6">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4 text-center">
      <div class="container mx-auto">
        <p>&copy; 2024 Calculadora Financeira. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados */

main{
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

footer{
  bottom: 0;
  position: fixed;
  width: 100%;
}

nav{
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
}
</style>
