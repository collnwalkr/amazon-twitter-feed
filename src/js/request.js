import axios from 'axios'

let url = 'https://collinwalker.guru/api/'

let tweetPromise = axios.get(url)

export default tweetPromise