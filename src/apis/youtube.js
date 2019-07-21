import axios from 'axios';


const KEY = 'AIzaSyD8LXNTU4t3G0BgqUDQ4AY11cMpNA8h8mY';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 7,
        key: KEY
    }
});
