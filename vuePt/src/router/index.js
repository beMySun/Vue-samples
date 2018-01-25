import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import store from '@/store'

Vue.use(Router);
const Product = r => require.ensure([], () => r(require('@/page/product')), 'Product');
const Hello = r => require.ensure([], () => r(require('@/components/hello')), 'Hello');

export default new Router({
    routes: [{
        path: '/',
        component: App,
        children: [{
            path: '',
            redirect: '/product'
        }, {
            path: '/product',
            name: 'Product',
            component: Product
        }, {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }]
    }]
});

// routes: [{
//     path: '/',
//     name: 'App',
//     component: App,
//     beforeEnter: (to, from, next) => {
//         console.log('visitCounter: ' + store.state.visitCounter);
//         console.log('isFirstVisit: ' + store.state.isFirstVisit);
//         if (store.state.isFirstVisit && store.state.visitCounter === 1) {
//             store.dispatch('updateLoadingStatus', {
//                 isLoading: true
//             });
//             store.dispatch('updateFirstVisitStatus', {
//                 isFirstVisit: false
//             });
//         } else {
//             store.dispatch('updateLoadingStatus', {
//                 isLoading: false
//             });
//             if (store.state.visitCounter > 0) {
//                 window.history.go(-1);
//             }
//         }
//         store.state.visitCounter++;
//         next();
//     },
//     beforeRouteLeave: (to, from, next) => {
//         console.log(99)
//     }
// }, {
//     path: '/product',
//     name: 'Product',
//     component: Product
// }, {
//     path: '/apply',
//     name: 'Apply',
//     component: Apply
// }]
