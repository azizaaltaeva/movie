const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'c407b00d474ff35c95edc2adb8b0de46',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;