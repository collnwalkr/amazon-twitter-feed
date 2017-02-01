import Vue from 'vue'
import App from './vue/App.vue'
import axios from 'axios'

let req = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20FROM%20twitter.search.tweets%20WHERE%20q%3D%22yahoo%22%20AND%20consumer_key%3D%2208ZNcNfdoCgYTzR7qcW1HQ%22%20AND%20consumer_secret%3D%22PTMIdmhxAavwarH3r4aTnVF7iYbX6BRfykNBHIaB8%22%20AND%20access_token%3D%221181240586-JIgvJe4ev3NHdHnAqnovHINWfpo0qB2S2kZtVRI%22%20AND%20access_token_secret%3D%221nodv0LBsi7jS93e38KiW8cHOA5iUc6FT4L6De7kgk%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='

axios.get(req)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });


var app = document.createElement( 'div' );

//append all elements
document.body.appendChild( app );
app.id = 'app';
app.innerText="test123";


new Vue({
    el: '#app',
    render: h => h(App)
})
