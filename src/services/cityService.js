import http from './httpService';

const apiEndpoint = '/searchJSON?name_equals=';
const suffix = '&orderby=population&username=weknowit';

function cityUrl(cityName) {
  return apiEndpoint + cityName + suffix;
}

export async function getCities(cityName) {
  if (!cityName) return;
  const response = await http.get(cityUrl(cityName));
  console.log(response);
  const cities = getCityData(response.data.geonames);
  return cities;
}

export async function getCityById(geonameId) {
  if (!geonameId) return;
  const apiEndpoint = `/getJSON?geonameId=${geonameId}&username=weknowit`;
  const response = await http.get(apiEndpoint);
  const data = getCityData([response.data]);
  return data[0];
}

function findCities(geonames) {
  // Removes non-city results
  let cities = [];
  const regex = /city/;

  let fclName;
  for (let i = 0; i < geonames.length; i++) {
    fclName = geonames[i].fclName;
    if (fclName.match(regex)) {
      cities.push(geonames[i]);
    }
  }

  return cities;
}

function removeDuplicateCities(cities) {
  const uniqueCities = cities.filter((city, index) => index === cities.findIndex(c => c.geonameId === city.geonameId));

  console.log(uniqueCities);

  return uniqueCities;
}

function getCityData(geonames) {
  // Extracts wanted information
  const cities = [];

  const citiesFullInfo = findCities(geonames);
  console.log(citiesFullInfo);

  let city;
  for (let i = 0; i < citiesFullInfo.length; i++) {
    city = {
      geonameId: citiesFullInfo[i].geonameId,
      name: citiesFullInfo[i].name,
      population: citiesFullInfo[i].population,
      country: citiesFullInfo[i].countryName,
      province: citiesFullInfo[i].adminName1,
    };
    cities.push(city);
  }

  const uniqueCities = removeDuplicateCities(cities);

  return uniqueCities;
}
