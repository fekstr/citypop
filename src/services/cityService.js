import http from './httpService';

const apiEndpoint = '/searchJSON?name_equals=';
const suffix = '&username=weknowit';

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
  const uniqueCities = cities.filter(
    (city, index) =>
      index ===
      cities.findIndex(
        c =>
          c.name === city.name &&
          c.population === city.population &&
          c.country === city.country &&
          c.province === city.province
      )
  );

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
      id: i,
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
