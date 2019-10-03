import http from './httpService';

export async function getCities(countryName) {
  const countryCode = await getCountryCode(countryName);
  console.log(countryCode);

  const citiesEndpoint = `/searchJSON?country=${countryCode}&cities=cities500&orderby=population&username=weknowit`;
  const response = await http.get(citiesEndpoint);
  console.log(response);

  const cities = getCityData(response.data.geonames);
  return cities;
}

async function getCountryCode(countryName) {
  const countryEndpoint = `/searchJSON?name_equals=${countryName}&featureCode=PCLI&maxRows=1&username=weknowit`;
  const response = await http.get(countryEndpoint);
  const countryCode = response.data.geonames[0].countryCode;
  return countryCode;
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
