import Vue from 'vue'
import App from './vue/App.vue'

var app = document.createElement( 'div' );
//append all elements
document.body.appendChild( app );
app.id = 'app';

new Vue({
    el: '#app',
    components: { App },
    render: h => h(App)
})
