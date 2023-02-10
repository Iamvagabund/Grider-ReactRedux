import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: { 
      Authorization: 'Client-ID p3MhuZXg4PGgX4qvBcfuylR6y1jXBRMxR1eKnK0MXzY'
    },
    params: {
      query: term
    }
  })

  console.log(response);
  return response.data.results;
}

export default searchImages;