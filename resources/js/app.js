require('./bootstrap');
window.Vue = require('vue');
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import VueRouter from 'vue-router'
Vue.use(ElementUI, {locale})
Vue.use(VueRouter)
import moment from 'moment'
Object.defineProperty(Vue.prototype, '$moment', {
    get(){
        return this.$root.moment
    }
})
const routes = [
    {
        path: '/',
        component: resolve => require(["./components/Dashboard/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-dashboard',
                component: resolve => require(["./components/Dashboard/BorrowView.vue"], resolve),
            },
        ]
    },
    {
        path: '/category',
        component: resolve => require(["./components/category/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-category',
                component: resolve => require(["./components/category/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-category',
                component: resolve => require(["./components/category/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-category',
                component: resolve => require(["./components/category/create.vue"], resolve),
            },
        ]
    },{
        path: '/authors',
        component: resolve => require(["./components/author/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-author',
                component: resolve => require(["./components/author/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-author',
                component: resolve => require(["./components/author/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-author',
                component: resolve => require(["./components/author/create.vue"], resolve),
            },
        ]
    },{
        path: '/books',
        component: resolve => require(["./components/book/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-book',
                component: resolve => require(["./components/book/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-book',
                component: resolve => require(["./components/book/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-book',
                component: resolve => require(["./components/book/create.vue"], resolve),
            },
        ]
    },{
        path: '/borrows',
        component: resolve => require(["./components/borrow/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-borrow',
                component: resolve => require(["./components/borrow/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-borrow',
                component: resolve => require(["./components/borrow/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-borrow',
                component: resolve => require(["./components/borrow/create.vue"], resolve),
            },
        ]
    },{
        path: '/users',
        component: resolve => require(["./components/user/index.vue"], resolve),
        children: [
            {
                path: '',
                name: 'view-user',
                component: resolve => require(["./components/user/view.vue"], resolve),
            },
            {
                path: 'create',
                name: 'create-user',
                component: resolve => require(["./components/user/create.vue"], resolve),
            },
            {
                path: 'edit/:id',
                name: 'edit-user',
                component: resolve => require(["./components/user/create.vue"], resolve),
            },
        ]
    },
];
const router = new VueRouter({
    base: 'home',
    mode: 'history',
    routes
});
$(window).on('load', function () {
    new Vue({
        data(){
            return {

                validate: {
                    required: [
                        {required: true}
                    ]
                },
                moment,
                now: '',
                store: {
                    state: {
                        user: {

                        },
                        loading: false,
                    },
                    mutations: {
                        handleLoading(state, data){
                            state.loading = data
                        }
                    },
                    dispatch(mutation, data = {}){ //$root.store.dispatch
                        this.mutations[mutation](this.state, data)
                    }
                }
            }
        },
        mounted(){
            var vm = this
            var x = setInterval(function () {
                vm.now = new Date().getTime()
            }, 1000);
            axios.get('/api/user').then(function (response) {
                vm.store.state.user = response.data
            })
        },
        router,
        render: h => h(require('./components/App.vue').default)
    }).$mount('#app')
});