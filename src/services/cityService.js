import http from './httpService';

const apiEndpoint = '/searchJSON?name_equals=';
const suffix = '&username=weknowit';

function cityUrl(cityName) {
  return apiEndpoint + cityName + suffix;
}

export async function getCity(cityName) {
  if (!cityName) return;
  return await http.get(cityUrl(cityName));
}
