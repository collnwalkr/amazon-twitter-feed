import Vue from 'vue'
import App from './vue/App.vue'
import inject from './js/inject'

inject()

new Vue({
    el: '#app',
    components: { App },
    render: h => h(App)
})
