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

const nameByAlpha3 = (alpha3, locale = "en") => {
  const country = COUNTRIES.find((country) => country.alpha3 === alpha3);

  if (!country) {
    throw new Error(`A country with alpha3 "${alpha3}" not found.`);
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

const alpha3ByName = (name, locale = "en") => {
  const country = COUNTRIES.find(
    (country) => country.translations[locale] === name,
  );

  if (!country) {
    throw new Error(
      `A country with name "${name}" not found for locale "${locale}".`,
    );
  }

  return country.alpha3;
};

const flagEmojiByName = (name, locale = "en") => {
  try {
    const alpha2 = alpha2ByName(name, locale);

    return flagEmojiByAlpha2(alpha2);
  } catch (error) {
    console.error(error);
  }
};

const flagEmojiByAlpha2 = (alpha2) => {
  const codePoints = alpha2
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoints);
};

export default {
  all,
  nameByAlpha2,
  nameByAlpha3,
  alpha2ByName,
  alpha3ByName,
  flagEmojiByName,
  flagEmojiByAlpha2,
};
