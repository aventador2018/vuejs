import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vuejs-http-745be.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance