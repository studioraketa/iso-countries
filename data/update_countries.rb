SUPPORTED_LOCALES = ['en', 'es', 'fr', 'de', 'bg']
OUTPUT_FILE = File.join(__dir__, 'countries.js')

def extract_data(string_data, locale, existing)
  string_data.split("\n").reduce(existing) do |result, country_row|
    alpha2, alpha3, numeric, name = country_row.split("\t")

    if result[alpha2]
      result[alpha2] = {
        alpha3: alpha3,
        alpha2: alpha2,
        numeric: numeric,
        name: locale == 'en' ? name : result[alpha2][:name],
        translations: result[alpha2][:translations].merge({locale.to_sym => name})
      }
    else
      result[alpha2] = {
        alpha3: alpha3,
        alpha2: alpha2,
        numeric: numeric,
        name: locale == 'en' ? name : '',
        translations: {
          locale.to_sym => name
        }
      }
    end

    result
  end
end

def collect_countries_data
  SUPPORTED_LOCALES.reduce({}) do |acc, locale|
    extract_data(`isoquery --iso=3166-1 --locale=#{locale}`, locale, acc)
  end
end

def country_translations(translations)
  translations.map do |locale, value|
    "#{locale}: \"#{value}\""
  end.join(",\n")
end


def js_country_row(country)
  "{
    name: \"#{country[:name]}\",
    code: \"#{country[:code]}\",
    alpha2: \"#{country[:alpha2]}\",
    alpha3: \"#{country[:alpha3]}\",
    translations: {
      #{country_translations(country[:translations])}
    }
  },"
end

def save_countries(countries)
  file_content = <<~JAVASCRIPT
  // Updated at: #{Time.now.utc}
  const COUNTRIES = [
    #{countries.map { |_alpha2, country| js_country_row(country)}.join("\n  ")}
  ];

  export default COUNTRIES;
  JAVASCRIPT

  File.open(OUTPUT_FILE, 'w') do |file|
    file.write(file_content)
  end
end

save_countries(collect_countries_data)
