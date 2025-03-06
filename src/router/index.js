// router/index.js

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        { path: '/', name: 'main', component: () => import('../components/Main.vue') },
        { path: '/helloworld', name: 'helloworld', component: () => import('../components/HelloWorld.vue') },
    ],
});
export default router;
