import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import './config/flexible.js'
import {
    LoadingPlugin,
    AlertPlugin
} from 'vux'

Vue.config.productionTip = false;
Vue.use(LoadingPlugin);
Vue.use(AlertPlugin);

router.beforeEach(function(to, from, next) {
    Vue.$vux.loading.show();
    next();
});

router.afterEach(function(to) {
    Vue.$vux.loading.hide();
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
