export const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/CartView.vue')
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../views/CheckoutView.vue')
    },
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('../views/OrdersView.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/RegisterView.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/UserView.vue')
    },
    {
        path: '/product/:storeId/:productId',
        name: 'Detail',
        component: () => import('../views/DetailView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFoundView.vue')
    },
]