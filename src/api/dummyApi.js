import axios from 'axios';

export default axios.get('https://dummyapi.io/data/v1/post?limit=10', {
  headers: {
    'app-id': '61705bbfcd7ce063de31cbf9',
  },
});
