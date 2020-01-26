import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b8f510cd5c24e48798e9294a2cef6b4f23fe32cc7adb0bab2b90fd04b82f111a'
    }
});