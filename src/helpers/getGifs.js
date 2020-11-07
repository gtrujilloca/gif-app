

  const getGifs = async(category="goku") => {
  
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=RRSsRZJ7ACR6uoDDcJxNfrRgmz7SfF0m`;
    const response = await fetch(url);
    const { data } = await response.json();

     const gifs = data.map(gif => {
      return {
        id:gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url 
      }
    });
    return gifs;
  }

  export default getGifs;