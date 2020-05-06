import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID x13FS9S-mEzhLl8OZOUMi316mboZl_POALcE3T_SRL0'
    }
});