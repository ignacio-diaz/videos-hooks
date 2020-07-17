import axios from 'axios';

const KEY = "AIzaSyAqoCzVniEf2X9vAXb5c6Gv1iLhfo0RMi0";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part : 'snippet',
    type: 'video',
    maxResults: 5,
    key : `${KEY}`
  }
});

