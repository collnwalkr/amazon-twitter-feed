import axios from 'axios'

let url = 'http://192.168.0.5:3000/'

let tweetPromise = axios.get(url)

export default tweetPromise