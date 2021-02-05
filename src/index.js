import COUNTRIES from "../data/countries";

const all = (locale = "en") =>
  COUNTRIES.map((country) => ({
    name: country.translations[locale],
    alpha2: country.alpha2,
  })).sort((a, b) => a.name.localeCompare(b.name));

const nameByAlpha2 = (alpha2, locale = "en") => {
  const country = COUNTRIES.find((country) => country.alpha2 === alpha2);

  if (!country) {
    throw new Error(`A country with alpha2 "${alpha2}" not found.`);
  }

  return country.translations[locale] || country.name;
};

const alpha2ByName = (name, locale = "en") => {
  const country = COUNTRIES.find(
    (country) => country.translations[locale] === name,
  );

  if (!country) {
    throw new Error(
      `A country with name "${name}" not found for locale "${locale}".`,
    );
  }

  return country.alpha2;
};

export default {
  all,
  nameByAlpha2,
  alpha2ByName,
};
