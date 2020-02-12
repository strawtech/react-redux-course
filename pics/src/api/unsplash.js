import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 613d619e5153a32904bfc506bfbb7eb6c70c1bfb7f9f4bae9f24fe9d77136556'
    }    
});