Vue.component('product', ProductComponent);
Vue.component('hello', HelloComponent);
Vue.component('registration', RegistrationComponent);
Vue.component('login', LoginComponent);
Vue.component('cart-item', CartItemComponent);
Vue.component('cart', CartComponent);
Vue.component('home-page', HomePageComponent);
Vue.component('product-page', ProductPageComponent);
Vue.component('nav-menu', MenuComponent);
Vue.component('cart-page', CartPageComponent);
Vue.component('logreg-page', LogRegPageComponent);
Vue.component('admin-page', AdminPageComponent);
Vue.component('search', SearchComponent);

const http = axios; // using axios 3rd party XHR/REST lib

const router = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: HomePageComponent },
    { path: '/products', component: ProductPageComponent },
    { path: '/cart', component: CartPageComponent },
    { path: '/logreg', component: LogRegPageComponent },
    { path: '/admin', component: AdminPageComponent }
    
  ]
});

// the app
let app = new Vue({
  el: "#app",
  router // add the router to the app
});