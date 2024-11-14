import { createRouter, createWebHistory } from 'vue-router';
import SimpleInterest from '../components/SimpleInterest.vue';
import Discounts from '../components/Discounts.vue';
import CompoundInterest from '../components/CompoundInterest.vue'
import Investment from '../components/Investment.vue';
import Loans from '../components/Loans.vue';
import SavingYield from '../components/SavingsYield.vue';
import ConversorCurrency from '../components/ConversorCurrency.vue';
import Tax from '../components/Tax.vue';

const routes = [
    { path: '/', component: SimpleInterest },
    { path: '/juros-compostos', component: CompoundInterest },
    { path: '/desconto', component: Discounts },
    { path: '/investimento', component: Investment },
    { path: '/emprestimo', component: Loans },
    { path: '/rentabilidade-poupanca', component: SavingYield },
    { path: '/conversor-moeda', component: ConversorCurrency },
    { path: '/impostos', component: Tax },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
