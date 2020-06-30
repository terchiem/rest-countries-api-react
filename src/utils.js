/** Format integer into string with commas */
export function addCommas(num) {
  let numStr = num.toString();
  let insertIdx = numStr.length - 3;

  // insert commas from end of number to start
  while (insertIdx > 0) {
    if (numStr[insertIdx - 1] !== '-') {
      numStr = numStr.slice(0, insertIdx) + ',' + numStr.slice(insertIdx);
    }

    insertIdx -= 3;
  }

  return numStr;
}

/** Utility function to normalize API countries */
export function formatCountries(countries) {
  const countriesObj = {};

  for (let c of countries) {
    countriesObj[c.alpha3Code] = {
      name: c.name,
      code: c.alpha3Code,
      nativeName: c.nativeName,
      population: c.population,
      region: c.region,
      subregion: c.subregion,
      capital: c.capital,
      topLevelDomain: c.topLevelDomain,
      currencies: c.currencies,
      languages: c.languages.map(l => l.name),
      borders: c.borders,
      flag: c.flag
    }
  }

  return countriesObj
}