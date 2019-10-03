import http from './httpService';

export async function getCities(countryName) {
  const countryCode = await getCountryCode(countryName);
  if (countryCode === 'Not found') return 'Not found';

  const citiesEndpoint = `/searchJSON?country=${countryCode}&cities=cities500&orderby=population&username=weknowit`;
  const response = await http.get(citiesEndpoint);
  console.log(response);

  const cities = getCityData(response.data.geonames);
  if (cities.length > 0) return cities;
  return 'Not found';
}

async function getCountryCode(countryName) {
  const countryEndpoint = `/searchJSON?name_equals=${countryName}&featureCode=PCLI&maxRows=1&username=weknowit`;
  const response = await http.get(countryEndpoint);
  console.log(response);
  if (response.data.geonames.length > 0) return response.data.geonames[0].countryCode;
  return 'Not found';
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
