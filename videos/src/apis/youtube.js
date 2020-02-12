import axios from 'axios';

const KEY = 'AIzaSyDQDs3N51-pHN0JvFELeJBC-eXXgnYIvlo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
    }
});