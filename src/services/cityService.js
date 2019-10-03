import http from './httpService';

export async function getCities(cityName) {
  if (!cityName) return;

  const cityEndpoint = `/searchJSON?name_equals=${cityName}&cities=cities500&orderby=population&username=weknowit`;

  const response = await http.get(cityEndpoint);
  console.log(response);
  const cities = getCityData(response.data.geonames);
  console.log(cities);
  if (cities.length > 0) return cities;
  return 'Not found';
}

export async function getCityById(geonameId) {
  if (!geonameId) return;
  const cityEndpoint = `/getJSON?geonameId=${geonameId}&username=weknowit`;
  const response = await http.get(cityEndpoint);
  console.log(response);
  const data = getCityData([response.data]);
  return data[0];
}

function getCityData(geonames) {
  // Extracts wanted information
  const cities = [];

  let city;
  for (let i = 0; i < geonames.length; i++) {
    city = {
      geonameId: geonames[i].geonameId,
      name: geonames[i].name,
      population: geonames[i].population,
      country: geonames[i].countryName,
      province: geonames[i].adminName1,
    };
    cities.push(city);
  }

  return cities;
}
