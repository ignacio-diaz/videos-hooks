import axios from 'axios';

const KEY = "AIzaSyAa9uSa-CMsIljlSPIXk9NpxPf-WW17mpc";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part : 'snippet',
    type: 'video',
    maxResults: 5,
    key : `${KEY}`
  }
})

