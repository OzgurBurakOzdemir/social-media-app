import axios from 'axios'

const url = 'http://localhost:5000posts'

export const fetchPosts = () => axios.get(url)