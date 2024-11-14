import { createRouter, createWebHistory } from 'vue-router';
import SimpleInterest from '../components/SimpleInterest.vue';
import Discounts from '../components/Discounts.vue';
import CompoundInterest from '../components/CompoundInterest.vue'

const routes = [
    { path: '/', component: SimpleInterest },
    { path: '/juros-compostos', component: CompoundInterest },
    { path: '/desconto', component: Discounts },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
