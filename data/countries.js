// Updated at: 2023-11-06 05:44:04 UTC
const COUNTRIES = [
  {
    name: "Aruba",
    code: "",
    alpha2: "AW",
    alpha3: "ABW",
    translations: {
      en: "Aruba",
      es: "Aruba",
      fr: "Aruba",
      de: "Aruba",
      bg: "Аруба"
    }
  },
  {
    name: "Afghanistan",
    code: "",
    alpha2: "AF",
    alpha3: "AFG",
    translations: {
      en: "Afghanistan",
      es: "Afganistán",
      fr: "Afghanistan",
      de: "Afghanistan",
      bg: "Афганистан"
    }
  },
  {
    name: "Angola",
    code: "",
    alpha2: "AO",
    alpha3: "AGO",
    translations: {
      en: "Angola",
      es: "Angola",
      fr: "Angola",
      de: "Angola",
      bg: "Ангола"
    }
  },
  {
    name: "Anguilla",
    code: "",
    alpha2: "AI",
    alpha3: "AIA",
    translations: {
      en: "Anguilla",
      es: "Anguila",
      fr: "Anguilla",
      de: "Anguilla",
      bg: "Ангила"
    }
  },
  {
    name: "Åland Islands",
    code: "",
    alpha2: "AX",
    alpha3: "ALA",
    translations: {
      en: "Åland Islands",
      es: "Islas Äland",
      fr: "Åland, Îles",
      de: "Åland-Inseln",
      bg: "Аландски острови"
    }
  },
  {
    name: "Albania",
    code: "",
    alpha2: "AL",
    alpha3: "ALB",
    translations: {
      en: "Albania",
      es: "Albania",
      fr: "Albanie",
      de: "Albanien",
      bg: "Албания"
    }
  },
  {
    name: "Andorra",
    code: "",
    alpha2: "AD",
    alpha3: "AND",
    translations: {
      en: "Andorra",
      es: "Andorra",
      fr: "Andorre",
      de: "Andorra",
      bg: "Андора"
    }
  },
  {
    name: "United Arab Emirates",
    code: "",
    alpha2: "AE",
    alpha3: "ARE",
    translations: {
      en: "United Arab Emirates",
      es: "Emiratos Árabes Unidos",
      fr: "Émirats arabes unis",
      de: "Vereinigte Arabische Emirate",
      bg: "Обединени арабски емирства"
    }
  },
  {
    name: "Argentina",
    code: "",
    alpha2: "AR",
    alpha3: "ARG",
    translations: {
      en: "Argentina",
      es: "Argentina",
      fr: "Argentine",
      de: "Argentinien",
      bg: "Аржентина"
    }
  },
  {
    name: "Armenia",
    code: "",
    alpha2: "AM",
    alpha3: "ARM",
    translations: {
      en: "Armenia",
      es: "Armenia",
      fr: "Arménie",
      de: "Armenien",
      bg: "Армения"
    }
  },
  {
    name: "American Samoa",
    code: "",
    alpha2: "AS",
    alpha3: "ASM",
    translations: {
      en: "American Samoa",
      es: "Samoa Estadounidense",
      fr: "Samoa américaines",
      de: "Amerikanisch-Samoa",
      bg: "Американска Самоа"
    }
  },
  {
    name: "Antarctica",
    code: "",
    alpha2: "AQ",
    alpha3: "ATA",
    translations: {
      en: "Antarctica",
      es: "Antártida",
      fr: "Antarctique",
      de: "Antarktis",
      bg: "Антарктика"
    }
  },
  {
    name: "French Southern Territories",
    code: "",
    alpha2: "TF",
    alpha3: "ATF",
    translations: {
      en: "French Southern Territories",
      es: "Territorios Franceses del Sur",
      fr: "Terres australes françaises",
      de: "Französische Süd- und Antarktisgebiete",
      bg: "Френски южни територии"
    }
  },
  {
    name: "Antigua and Barbuda",
    code: "",
    alpha2: "AG",
    alpha3: "ATG",
    translations: {
      en: "Antigua and Barbuda",
      es: "Antigua y Barbuda",
      fr: "Antigua-et-Barbuda",
      de: "Antigua und Barbuda",
      bg: "Антигуа и Барбуда"
    }
  },
  {
    name: "Australia",
    code: "",
    alpha2: "AU",
    alpha3: "AUS",
    translations: {
      en: "Australia",
      es: "Australia",
      fr: "Australie",
      de: "Australien",
      bg: "Австралия"
    }
  },
  {
    name: "Austria",
    code: "",
    alpha2: "AT",
    alpha3: "AUT",
    translations: {
      en: "Austria",
      es: "Austria",
      fr: "Autriche",
      de: "Österreich",
      bg: "Австрия"
    }
  },
  {
    name: "Azerbaijan",
    code: "",
    alpha2: "AZ",
    alpha3: "AZE",
    translations: {
      en: "Azerbaijan",
      es: "Azerbaiyán",
      fr: "Azerbaïdjan",
      de: "Aserbaidschan",
      bg: "Азербайджан"
    }
  },
  {
    name: "Burundi",
    code: "",
    alpha2: "BI",
    alpha3: "BDI",
    translations: {
      en: "Burundi",
      es: "Burundi",
      fr: "Burundi",
      de: "Burundi",
      bg: "Бурунди"
    }
  },
  {
    name: "Belgium",
    code: "",
    alpha2: "BE",
    alpha3: "BEL",
    translations: {
      en: "Belgium",
      es: "Bélgica",
      fr: "Belgique",
      de: "Belgien",
      bg: "Белгия"
    }
  },
  {
    name: "Benin",
    code: "",
    alpha2: "BJ",
    alpha3: "BEN",
    translations: {
      en: "Benin",
      es: "Benín",
      fr: "Bénin",
      de: "Benin",
      bg: "Бенин"
    }
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    code: "",
    alpha2: "BQ",
    alpha3: "BES",
    translations: {
      en: "Bonaire, Sint Eustatius and Saba",
      es: "Islas BES (Caribe Neerlandés)",
      fr: "Bonaire, Saint-Eustache et Saba",
      de: "Bonaire, Sint Eustatius und Saba",
      bg: "О-ви Бонер, Св. Евстатий и Саба"
    }
  },
  {
    name: "Burkina Faso",
    code: "",
    alpha2: "BF",
    alpha3: "BFA",
    translations: {
      en: "Burkina Faso",
      es: "Burquina Faso",
      fr: "Burkina Faso",
      de: "Burkina Faso",
      bg: "Буркина Фасо"
    }
  },
  {
    name: "Bangladesh",
    code: "",
    alpha2: "BD",
    alpha3: "BGD",
    translations: {
      en: "Bangladesh",
      es: "Bangladés",
      fr: "Bangladesh",
      de: "Bangladesch",
      bg: "Бангладеш"
    }
  },
  {
    name: "Bulgaria",
    code: "",
    alpha2: "BG",
    alpha3: "BGR",
    translations: {
      en: "Bulgaria",
      es: "Bulgaria",
      fr: "Bulgarie",
      de: "Bulgarien",
      bg: "България"
    }
  },
  {
    name: "Bahrain",
    code: "",
    alpha2: "BH",
    alpha3: "BHR",
    translations: {
      en: "Bahrain",
      es: "Baréin",
      fr: "Bahreïn",
      de: "Bahrain",
      bg: "Бахрейн"
    }
  },
  {
    name: "Bahamas",
    code: "",
    alpha2: "BS",
    alpha3: "BHS",
    translations: {
      en: "Bahamas",
      es: "Bahamas",
      fr: "Bahamas",
      de: "Bahamas",
      bg: "Бахами"
    }
  },
  {
    name: "Bosnia and Herzegovina",
    code: "",
    alpha2: "BA",
    alpha3: "BIH",
    translations: {
      en: "Bosnia and Herzegovina",
      es: "Bosnia y Herzegovina",
      fr: "Bosnie-Herzégovine",
      de: "Bosnien und Herzegowina",
      bg: "Босна и Херцеговина"
    }
  },
  {
    name: "Saint Barthélemy",
    code: "",
    alpha2: "BL",
    alpha3: "BLM",
    translations: {
      en: "Saint Barthélemy",
      es: "San Bartolomé",
      fr: "Saint-Barthélemy",
      de: "Saint-Barthélemy",
      bg: "Свети Вартоломей"
    }
  },
  {
    name: "Belarus",
    code: "",
    alpha2: "BY",
    alpha3: "BLR",
    translations: {
      en: "Belarus",
      es: "Bielorrusia",
      fr: "Bélarus",
      de: "Weißrussland",
      bg: "Беларус"
    }
  },
  {
    name: "Belize",
    code: "",
    alpha2: "BZ",
    alpha3: "BLZ",
    translations: {
      en: "Belize",
      es: "Belice",
      fr: "Belize",
      de: "Belize",
      bg: "Белиз"
    }
  },
  {
    name: "Bermuda",
    code: "",
    alpha2: "BM",
    alpha3: "BMU",
    translations: {
      en: "Bermuda",
      es: "Islas Bermudas",
      fr: "Bermudes",
      de: "Bermuda",
      bg: "Бермуда"
    }
  },
  {
    name: "Bolivia, Plurinational State of",
    code: "",
    alpha2: "BO",
    alpha3: "BOL",
    translations: {
      en: "Bolivia, Plurinational State of",
      es: "Bolivia, Estado plurinacional de",
      fr: "Bolivie, état plurinational de",
      de: "Bolivien, Plurinationaler Staat",
      bg: "Боливия, Многонационална държава"
    }
  },
  {
    name: "Brazil",
    code: "",
    alpha2: "BR",
    alpha3: "BRA",
    translations: {
      en: "Brazil",
      es: "Brasil",
      fr: "Brésil",
      de: "Brasilien",
      bg: "Бразилия"
    }
  },
  {
    name: "Barbados",
    code: "",
    alpha2: "BB",
    alpha3: "BRB",
    translations: {
      en: "Barbados",
      es: "Barbados",
      fr: "Barbade",
      de: "Barbados",
      bg: "Барбадос"
    }
  },
  {
    name: "Brunei Darussalam",
    code: "",
    alpha2: "BN",
    alpha3: "BRN",
    translations: {
      en: "Brunei Darussalam",
      es: "Brunei Darussalam",
      fr: "Brunéi Darussalam",
      de: "Brunei Darussalam",
      bg: "Бруней"
    }
  },
  {
    name: "Bhutan",
    code: "",
    alpha2: "BT",
    alpha3: "BTN",
    translations: {
      en: "Bhutan",
      es: "Bután",
      fr: "Bhoutan",
      de: "Bhutan",
      bg: "Бутан"
    }
  },
  {
    name: "Bouvet Island",
    code: "",
    alpha2: "BV",
    alpha3: "BVT",
    translations: {
      en: "Bouvet Island",
      es: "Isla Bouvet",
      fr: "île Bouvet",
      de: "Bouvet-Insel",
      bg: "Остров Буве"
    }
  },
  {
    name: "Botswana",
    code: "",
    alpha2: "BW",
    alpha3: "BWA",
    translations: {
      en: "Botswana",
      es: "Botsuana",
      fr: "Botswana",
      de: "Botsuana",
      bg: "Ботсуана"
    }
  },
  {
    name: "Central African Republic",
    code: "",
    alpha2: "CF",
    alpha3: "CAF",
    translations: {
      en: "Central African Republic",
      es: "República Centroafricana",
      fr: "République centrafricaine",
      de: "Zentralafrikanische Republik",
      bg: "Централноафриканска Република"
    }
  },
  {
    name: "Canada",
    code: "",
    alpha2: "CA",
    alpha3: "CAN",
    translations: {
      en: "Canada",
      es: "Canadá",
      fr: "Canada",
      de: "Kanada",
      bg: "Канада"
    }
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "",
    alpha2: "CC",
    alpha3: "CCK",
    translations: {
      en: "Cocos (Keeling) Islands",
      es: "Islas Cocos (Keeling)",
      fr: "Cocos (Keeling), Îles",
      de: "Kokos-(Keeling-)Inseln",
      bg: "Кокосови острови"
    }
  },
  {
    name: "Switzerland",
    code: "",
    alpha2: "CH",
    alpha3: "CHE",
    translations: {
      en: "Switzerland",
      es: "Suiza",
      fr: "Suisse",
      de: "Schweiz",
      bg: "Швейцария"
    }
  },
  {
    name: "Chile",
    code: "",
    alpha2: "CL",
    alpha3: "CHL",
    translations: {
      en: "Chile",
      es: "Chile",
      fr: "Chili",
      de: "Chile",
      bg: "Чили"
    }
  },
  {
    name: "China",
    code: "",
    alpha2: "CN",
    alpha3: "CHN",
    translations: {
      en: "China",
      es: "China",
      fr: "Chine",
      de: "China",
      bg: "Китай"
    }
  },
  {
    name: "Côte d'Ivoire",
    code: "",
    alpha2: "CI",
    alpha3: "CIV",
    translations: {
      en: "Côte d'Ivoire",
      es: "Costa de Marfíl",
      fr: "Côte d'Ivoire",
      de: "Côte d'Ivoire",
      bg: "Кот д'Ивоар"
    }
  },
  {
    name: "Cameroon",
    code: "",
    alpha2: "CM",
    alpha3: "CMR",
    translations: {
      en: "Cameroon",
      es: "Camerún",
      fr: "Cameroun",
      de: "Kamerun",
      bg: "Камерун"
    }
  },
  {
    name: "Congo, The Democratic Republic of the",
    code: "",
    alpha2: "CD",
    alpha3: "COD",
    translations: {
      en: "Congo, The Democratic Republic of the",
      es: "Congo, República Democrática del",
      fr: "République démocratique du Congo",
      de: "Demokratische Republik Kongo",
      bg: "Конго, Демократична република"
    }
  },
  {
    name: "Congo",
    code: "",
    alpha2: "CG",
    alpha3: "COG",
    translations: {
      en: "Congo",
      es: "Congo",
      fr: "République du Congo",
      de: "Kongo",
      bg: "Конго"
    }
  },
  {
    name: "Cook Islands",
    code: "",
    alpha2: "CK",
    alpha3: "COK",
    translations: {
      en: "Cook Islands",
      es: "Islas Cook",
      fr: "îles Cook",
      de: "Cookinseln",
      bg: "Острови Кук"
    }
  },
  {
    name: "Colombia",
    code: "",
    alpha2: "CO",
    alpha3: "COL",
    translations: {
      en: "Colombia",
      es: "Colombia",
      fr: "Colombie",
      de: "Kolumbien",
      bg: "Колумбия"
    }
  },
  {
    name: "Comoros",
    code: "",
    alpha2: "KM",
    alpha3: "COM",
    translations: {
      en: "Comoros",
      es: "Comores, Islas",
      fr: "Comores",
      de: "Komoren",
      bg: "Комори"
    }
  },
  {
    name: "Cabo Verde",
    code: "",
    alpha2: "CV",
    alpha3: "CPV",
    translations: {
      en: "Cabo Verde",
      es: "Cabo Verde",
      fr: "Cap-Vert",
      de: "Cabo Verde",
      bg: "Cabo Verde"
    }
  },
  {
    name: "Costa Rica",
    code: "",
    alpha2: "CR",
    alpha3: "CRI",
    translations: {
      en: "Costa Rica",
      es: "Costa Rica",
      fr: "Costa Rica",
      de: "Costa Rica",
      bg: "Коста Рика"
    }
  },
  {
    name: "Cuba",
    code: "",
    alpha2: "CU",
    alpha3: "CUB",
    translations: {
      en: "Cuba",
      es: "Cuba",
      fr: "Cuba",
      de: "Kuba",
      bg: "Куба"
    }
  },
  {
    name: "Curaçao",
    code: "",
    alpha2: "CW",
    alpha3: "CUW",
    translations: {
      en: "Curaçao",
      es: "Curazao",
      fr: "Curaçao",
      de: "Curaçao",
      bg: "Кюрасао"
    }
  },
  {
    name: "Christmas Island",
    code: "",
    alpha2: "CX",
    alpha3: "CXR",
    translations: {
      en: "Christmas Island",
      es: "Isla de Navidad",
      fr: "Christmas, Île",
      de: "Weihnachtsinseln",
      bg: "Коледни острови"
    }
  },
  {
    name: "Cayman Islands",
    code: "",
    alpha2: "KY",
    alpha3: "CYM",
    translations: {
      en: "Cayman Islands",
      es: "Islas Caimán",
      fr: "îles Caïmans",
      de: "Cayman-Inseln",
      bg: "Кайманови острови"
    }
  },
  {
    name: "Cyprus",
    code: "",
    alpha2: "CY",
    alpha3: "CYP",
    translations: {
      en: "Cyprus",
      es: "Chipre",
      fr: "Chypre",
      de: "Zypern",
      bg: "Кипър"
    }
  },
  {
    name: "Czechia",
    code: "",
    alpha2: "CZ",
    alpha3: "CZE",
    translations: {
      en: "Czechia",
      es: "Chequia",
      fr: "Tchéquie",
      de: "Tschechien",
      bg: "Czechia"
    }
  },
  {
    name: "Germany",
    code: "",
    alpha2: "DE",
    alpha3: "DEU",
    translations: {
      en: "Germany",
      es: "Alemania",
      fr: "Allemagne",
      de: "Deutschland",
      bg: "Германия"
    }
  },
  {
    name: "Djibouti",
    code: "",
    alpha2: "DJ",
    alpha3: "DJI",
    translations: {
      en: "Djibouti",
      es: "Yibuti",
      fr: "Djibouti",
      de: "Dschibuti",
      bg: "Джибути"
    }
  },
  {
    name: "Dominica",
    code: "",
    alpha2: "DM",
    alpha3: "DMA",
    translations: {
      en: "Dominica",
      es: "Dominica",
      fr: "Dominique",
      de: "Dominica",
      bg: "Доминика"
    }
  },
  {
    name: "Denmark",
    code: "",
    alpha2: "DK",
    alpha3: "DNK",
    translations: {
      en: "Denmark",
      es: "Dinamarca",
      fr: "Danemark",
      de: "Dänemark",
      bg: "Дания"
    }
  },
  {
    name: "Dominican Republic",
    code: "",
    alpha2: "DO",
    alpha3: "DOM",
    translations: {
      en: "Dominican Republic",
      es: "República Dominicana",
      fr: "République dominicaine",
      de: "Dominikanische Republik",
      bg: "Доминиканска република"
    }
  },
  {
    name: "Algeria",
    code: "",
    alpha2: "DZ",
    alpha3: "DZA",
    translations: {
      en: "Algeria",
      es: "Algeria",
      fr: "Algérie",
      de: "Algerien",
      bg: "Алжир"
    }
  },
  {
    name: "Ecuador",
    code: "",
    alpha2: "EC",
    alpha3: "ECU",
    translations: {
      en: "Ecuador",
      es: "Ecuador",
      fr: "Équateur",
      de: "Ecuador",
      bg: "Еквадор"
    }
  },
  {
    name: "Egypt",
    code: "",
    alpha2: "EG",
    alpha3: "EGY",
    translations: {
      en: "Egypt",
      es: "Egipto",
      fr: "Égypte",
      de: "Ägypten",
      bg: "Египет"
    }
  },
  {
    name: "Eritrea",
    code: "",
    alpha2: "ER",
    alpha3: "ERI",
    translations: {
      en: "Eritrea",
      es: "Eritrea",
      fr: "Érythrée",
      de: "Eritrea",
      bg: "Еритрея"
    }
  },
  {
    name: "Western Sahara",
    code: "",
    alpha2: "EH",
    alpha3: "ESH",
    translations: {
      en: "Western Sahara",
      es: "Sahara Occidental",
      fr: "Sahara occidental",
      de: "Westsahara",
      bg: "Западна Сахара"
    }
  },
  {
    name: "Spain",
    code: "",
    alpha2: "ES",
    alpha3: "ESP",
    translations: {
      en: "Spain",
      es: "España",
      fr: "Espagne",
      de: "Spanien",
      bg: "Испания"
    }
  },
  {
    name: "Estonia",
    code: "",
    alpha2: "EE",
    alpha3: "EST",
    translations: {
      en: "Estonia",
      es: "Estonia",
      fr: "Estonie",
      de: "Estland",
      bg: "Естония"
    }
  },
  {
    name: "Ethiopia",
    code: "",
    alpha2: "ET",
    alpha3: "ETH",
    translations: {
      en: "Ethiopia",
      es: "Etiopía",
      fr: "Éthiopie",
      de: "Äthiopien",
      bg: "Етиопия"
    }
  },
  {
    name: "Finland",
    code: "",
    alpha2: "FI",
    alpha3: "FIN",
    translations: {
      en: "Finland",
      es: "Finlandia",
      fr: "Finlande",
      de: "Finnland",
      bg: "Финландия"
    }
  },
  {
    name: "Fiji",
    code: "",
    alpha2: "FJ",
    alpha3: "FJI",
    translations: {
      en: "Fiji",
      es: "Fiyi",
      fr: "Fidji",
      de: "Fidschi",
      bg: "Фиджи"
    }
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "",
    alpha2: "FK",
    alpha3: "FLK",
    translations: {
      en: "Falkland Islands (Malvinas)",
      es: "Islas Falkland (Malvinas)",
      fr: "Malouines, Îles (Falkland)",
      de: "Falklandinseln (Malwinen)",
      bg: "Фолклендски Острови (Малвини)"
    }
  },
  {
    name: "France",
    code: "",
    alpha2: "FR",
    alpha3: "FRA",
    translations: {
      en: "France",
      es: "Francia",
      fr: "France",
      de: "Frankreich",
      bg: "Франция"
    }
  },
  {
    name: "Faroe Islands",
    code: "",
    alpha2: "FO",
    alpha3: "FRO",
    translations: {
      en: "Faroe Islands",
      es: "Islas Feroe",
      fr: "îles Féroé",
      de: "Färöer-Inseln",
      bg: "Острови Фаро"
    }
  },
  {
    name: "Micronesia, Federated States of",
    code: "",
    alpha2: "FM",
    alpha3: "FSM",
    translations: {
      en: "Micronesia, Federated States of",
      es: "Micronesia, Estados Federados de",
      fr: "Micronésie, États fédérés de",
      de: "Mikronesien, Föderierte Staaten von",
      bg: "Микронезия, Обединени щати"
    }
  },
  {
    name: "Gabon",
    code: "",
    alpha2: "GA",
    alpha3: "GAB",
    translations: {
      en: "Gabon",
      es: "Gabón",
      fr: "Gabon",
      de: "Gabun",
      bg: "Габон"
    }
  },
  {
    name: "United Kingdom",
    code: "",
    alpha2: "GB",
    alpha3: "GBR",
    translations: {
      en: "United Kingdom",
      es: "Reino Unido",
      fr: "Royaume-Uni",
      de: "Vereinigtes Königreich",
      bg: "Обединено кралство"
    }
  },
  {
    name: "Georgia",
    code: "",
    alpha2: "GE",
    alpha3: "GEO",
    translations: {
      en: "Georgia",
      es: "Georgia",
      fr: "Géorgie",
      de: "Georgien",
      bg: "Грузия"
    }
  },
  {
    name: "Guernsey",
    code: "",
    alpha2: "GG",
    alpha3: "GGY",
    translations: {
      en: "Guernsey",
      es: "Guernsey",
      fr: "Guernesey",
      de: "Guernsey",
      bg: "Гърнсей"
    }
  },
  {
    name: "Ghana",
    code: "",
    alpha2: "GH",
    alpha3: "GHA",
    translations: {
      en: "Ghana",
      es: "Ghana",
      fr: "Ghana",
      de: "Ghana",
      bg: "Гана"
    }
  },
  {
    name: "Gibraltar",
    code: "",
    alpha2: "GI",
    alpha3: "GIB",
    translations: {
      en: "Gibraltar",
      es: "Gibraltar",
      fr: "Gibraltar",
      de: "Gibraltar",
      bg: "Гибралтар"
    }
  },
  {
    name: "Guinea",
    code: "",
    alpha2: "GN",
    alpha3: "GIN",
    translations: {
      en: "Guinea",
      es: "Guinea",
      fr: "Guinée",
      de: "Guinea",
      bg: "Гвинея"
    }
  },
  {
    name: "Guadeloupe",
    code: "",
    alpha2: "GP",
    alpha3: "GLP",
    translations: {
      en: "Guadeloupe",
      es: "Guadalupe",
      fr: "Guadeloupe",
      de: "Guadeloupe",
      bg: "Гваделупа"
    }
  },
  {
    name: "Gambia",
    code: "",
    alpha2: "GM",
    alpha3: "GMB",
    translations: {
      en: "Gambia",
      es: "Gambia",
      fr: "Gambie",
      de: "Gambia",
      bg: "Гамбия"
    }
  },
  {
    name: "Guinea-Bissau",
    code: "",
    alpha2: "GW",
    alpha3: "GNB",
    translations: {
      en: "Guinea-Bissau",
      es: "Guinea-Bisáu",
      fr: "Guinée-Bissau",
      de: "Guinea-Bissau",
      bg: "Гвинея-Бисау"
    }
  },
  {
    name: "Equatorial Guinea",
    code: "",
    alpha2: "GQ",
    alpha3: "GNQ",
    translations: {
      en: "Equatorial Guinea",
      es: "Guinea Ecuatorial",
      fr: "Guinée Équatoriale",
      de: "Äquatorialguinea",
      bg: "Екваториална Гвинея"
    }
  },
  {
    name: "Greece",
    code: "",
    alpha2: "GR",
    alpha3: "GRC",
    translations: {
      en: "Greece",
      es: "Grecia",
      fr: "Grèce",
      de: "Griechenland",
      bg: "Гърция"
    }
  },
  {
    name: "Grenada",
    code: "",
    alpha2: "GD",
    alpha3: "GRD",
    translations: {
      en: "Grenada",
      es: "Granada",
      fr: "Grenade",
      de: "Grenada",
      bg: "Гренада"
    }
  },
  {
    name: "Greenland",
    code: "",
    alpha2: "GL",
    alpha3: "GRL",
    translations: {
      en: "Greenland",
      es: "Groenlandia",
      fr: "Groënland",
      de: "Grönland",
      bg: "Гренландия"
    }
  },
  {
    name: "Guatemala",
    code: "",
    alpha2: "GT",
    alpha3: "GTM",
    translations: {
      en: "Guatemala",
      es: "Guatemala",
      fr: "Guatemala",
      de: "Guatemala",
      bg: "Гватемала"
    }
  },
  {
    name: "French Guiana",
    code: "",
    alpha2: "GF",
    alpha3: "GUF",
    translations: {
      en: "French Guiana",
      es: "Guayana Francesa",
      fr: "Guyane française",
      de: "Französisch-Guyana",
      bg: "Френска Гвиана"
    }
  },
  {
    name: "Guam",
    code: "",
    alpha2: "GU",
    alpha3: "GUM",
    translations: {
      en: "Guam",
      es: "Guam",
      fr: "Guam",
      de: "Guam",
      bg: "Гуам"
    }
  },
  {
    name: "Guyana",
    code: "",
    alpha2: "GY",
    alpha3: "GUY",
    translations: {
      en: "Guyana",
      es: "Guyana",
      fr: "Guyana",
      de: "Guyana",
      bg: "Гияна"
    }
  },
  {
    name: "Hong Kong",
    code: "",
    alpha2: "HK",
    alpha3: "HKG",
    translations: {
      en: "Hong Kong",
      es: "Hong Kong",
      fr: "Hong Kong",
      de: "Hongkong",
      bg: "Хонг Конг"
    }
  },
  {
    name: "Heard Island and McDonald Islands",
    code: "",
    alpha2: "HM",
    alpha3: "HMD",
    translations: {
      en: "Heard Island and McDonald Islands",
      es: "Islas Heard y McDonald",
      fr: "îles Heard-et-MacDonald",
      de: "Heard und McDonaldinseln",
      bg: "Острови Хърд и МакДоналд"
    }
  },
  {
    name: "Honduras",
    code: "",
    alpha2: "HN",
    alpha3: "HND",
    translations: {
      en: "Honduras",
      es: "Honduras",
      fr: "Honduras",
      de: "Honduras",
      bg: "Хондурас"
    }
  },
  {
    name: "Croatia",
    code: "",
    alpha2: "HR",
    alpha3: "HRV",
    translations: {
      en: "Croatia",
      es: "Croacia",
      fr: "Croatie",
      de: "Kroatien",
      bg: "Хърватия"
    }
  },
  {
    name: "Haiti",
    code: "",
    alpha2: "HT",
    alpha3: "HTI",
    translations: {
      en: "Haiti",
      es: "Haití",
      fr: "Haïti",
      de: "Haiti",
      bg: "Хаити"
    }
  },
  {
    name: "Hungary",
    code: "",
    alpha2: "HU",
    alpha3: "HUN",
    translations: {
      en: "Hungary",
      es: "Hungría",
      fr: "Hongrie",
      de: "Ungarn",
      bg: "Унгария"
    }
  },
  {
    name: "Indonesia",
    code: "",
    alpha2: "ID",
    alpha3: "IDN",
    translations: {
      en: "Indonesia",
      es: "Indonesia",
      fr: "Indonésie",
      de: "Indonesien",
      bg: "Индонезия"
    }
  },
  {
    name: "Isle of Man",
    code: "",
    alpha2: "IM",
    alpha3: "IMN",
    translations: {
      en: "Isle of Man",
      es: "Isla de Man",
      fr: "Île de Man",
      de: "Insel Man",
      bg: "Айл ъф мен"
    }
  },
  {
    name: "India",
    code: "",
    alpha2: "IN",
    alpha3: "IND",
    translations: {
      en: "India",
      es: "India",
      fr: "Inde",
      de: "Indien",
      bg: "Индия"
    }
  },
  {
    name: "British Indian Ocean Territory",
    code: "",
    alpha2: "IO",
    alpha3: "IOT",
    translations: {
      en: "British Indian Ocean Territory",
      es: "Territorio Británico del Océano Índico",
      fr: "Territoire britannique de l'océan Indien",
      de: "Britisches Territorium im Indischen Ozean",
      bg: "Английски територии в индийския океан"
    }
  },
  {
    name: "Ireland",
    code: "",
    alpha2: "IE",
    alpha3: "IRL",
    translations: {
      en: "Ireland",
      es: "Irlanda",
      fr: "Irlande",
      de: "Irland",
      bg: "Ирландия"
    }
  },
  {
    name: "Iran, Islamic Republic of",
    code: "",
    alpha2: "IR",
    alpha3: "IRN",
    translations: {
      en: "Iran, Islamic Republic of",
      es: "Irán, República islámica de",
      fr: "Iran, République islamique d'",
      de: "Iran, Islamische Republik",
      bg: "Иран, Ислямска република"
    }
  },
  {
    name: "Iraq",
    code: "",
    alpha2: "IQ",
    alpha3: "IRQ",
    translations: {
      en: "Iraq",
      es: "Irak",
      fr: "Irak",
      de: "Irak",
      bg: "Ирак"
    }
  },
  {
    name: "Iceland",
    code: "",
    alpha2: "IS",
    alpha3: "ISL",
    translations: {
      en: "Iceland",
      es: "Islandia",
      fr: "Islande",
      de: "Island",
      bg: "Исландия"
    }
  },
  {
    name: "Israel",
    code: "",
    alpha2: "IL",
    alpha3: "ISR",
    translations: {
      en: "Israel",
      es: "Israel",
      fr: "Israël",
      de: "Israel",
      bg: "Израел"
    }
  },
  {
    name: "Italy",
    code: "",
    alpha2: "IT",
    alpha3: "ITA",
    translations: {
      en: "Italy",
      es: "Italia",
      fr: "Italie",
      de: "Italien",
      bg: "Италия"
    }
  },
  {
    name: "Jamaica",
    code: "",
    alpha2: "JM",
    alpha3: "JAM",
    translations: {
      en: "Jamaica",
      es: "Jamaica",
      fr: "Jamaïque",
      de: "Jamaika",
      bg: "Ямайка"
    }
  },
  {
    name: "Jersey",
    code: "",
    alpha2: "JE",
    alpha3: "JEY",
    translations: {
      en: "Jersey",
      es: "Jersey",
      fr: "Jersey",
      de: "Jersey",
      bg: "Джърси"
    }
  },
  {
    name: "Jordan",
    code: "",
    alpha2: "JO",
    alpha3: "JOR",
    translations: {
      en: "Jordan",
      es: "Jordania",
      fr: "Jordanie",
      de: "Jordanien",
      bg: "Йордания"
    }
  },
  {
    name: "Japan",
    code: "",
    alpha2: "JP",
    alpha3: "JPN",
    translations: {
      en: "Japan",
      es: "Japón",
      fr: "Japon",
      de: "Japan",
      bg: "Япония"
    }
  },
  {
    name: "Kazakhstan",
    code: "",
    alpha2: "KZ",
    alpha3: "KAZ",
    translations: {
      en: "Kazakhstan",
      es: "Kazajistán",
      fr: "Kazakhstan",
      de: "Kasachstan",
      bg: "Казахстан"
    }
  },
  {
    name: "Kenya",
    code: "",
    alpha2: "KE",
    alpha3: "KEN",
    translations: {
      en: "Kenya",
      es: "Kenia",
      fr: "Kenya",
      de: "Kenia",
      bg: "Кения"
    }
  },
  {
    name: "Kyrgyzstan",
    code: "",
    alpha2: "KG",
    alpha3: "KGZ",
    translations: {
      en: "Kyrgyzstan",
      es: "Kirguistán",
      fr: "Kirghizistan",
      de: "Kirgisistan",
      bg: "Киргизстан"
    }
  },
  {
    name: "Cambodia",
    code: "",
    alpha2: "KH",
    alpha3: "KHM",
    translations: {
      en: "Cambodia",
      es: "Camboya",
      fr: "Cambodge",
      de: "Kambodscha",
      bg: "Камбоджа"
    }
  },
  {
    name: "Kiribati",
    code: "",
    alpha2: "KI",
    alpha3: "KIR",
    translations: {
      en: "Kiribati",
      es: "Kiribati",
      fr: "Kiribati",
      de: "Kiribati",
      bg: "Кирибати"
    }
  },
  {
    name: "Saint Kitts and Nevis",
    code: "",
    alpha2: "KN",
    alpha3: "KNA",
    translations: {
      en: "Saint Kitts and Nevis",
      es: "San Cristóbal y Nieves",
      fr: "Saint-Christophe-et-Niévès",
      de: "St. Kitts und Nevis",
      bg: "Свети Китс и Невис"
    }
  },
  {
    name: "Korea, Republic of",
    code: "",
    alpha2: "KR",
    alpha3: "KOR",
    translations: {
      en: "Korea, Republic of",
      es: "Corea, República de",
      fr: "Corée, République de",
      de: "Korea, Republik",
      bg: "Корея, Република"
    }
  },
  {
    name: "Kuwait",
    code: "",
    alpha2: "KW",
    alpha3: "KWT",
    translations: {
      en: "Kuwait",
      es: "Kuwait",
      fr: "Koweït",
      de: "Kuwait",
      bg: "Кувейт"
    }
  },
  {
    name: "Lao People's Democratic Republic",
    code: "",
    alpha2: "LA",
    alpha3: "LAO",
    translations: {
      en: "Lao People's Democratic Republic",
      es: "República Democrática Popular de Lao",
      fr: "Lao, République démocratique populaire",
      de: "Laos, Demokratische Volksrepublik",
      bg: "Демократична република на народа на Лао"
    }
  },
  {
    name: "Lebanon",
    code: "",
    alpha2: "LB",
    alpha3: "LBN",
    translations: {
      en: "Lebanon",
      es: "Líbano",
      fr: "Liban",
      de: "Libanon",
      bg: "Лебанон"
    }
  },
  {
    name: "Liberia",
    code: "",
    alpha2: "LR",
    alpha3: "LBR",
    translations: {
      en: "Liberia",
      es: "Liberia",
      fr: "Libéria",
      de: "Liberia",
      bg: "Либерия"
    }
  },
  {
    name: "Libya",
    code: "",
    alpha2: "LY",
    alpha3: "LBY",
    translations: {
      en: "Libya",
      es: "Libia",
      fr: "Libye",
      de: "Libyen",
      bg: "Либия"
    }
  },
  {
    name: "Saint Lucia",
    code: "",
    alpha2: "LC",
    alpha3: "LCA",
    translations: {
      en: "Saint Lucia",
      es: "Santa Lucía",
      fr: "Sainte-Lucie",
      de: "St. Lucia",
      bg: "Санта Лучия"
    }
  },
  {
    name: "Liechtenstein",
    code: "",
    alpha2: "LI",
    alpha3: "LIE",
    translations: {
      en: "Liechtenstein",
      es: "Liechtenstein",
      fr: "Liechtenstein",
      de: "Liechtenstein",
      bg: "Лихтенщайн"
    }
  },
  {
    name: "Sri Lanka",
    code: "",
    alpha2: "LK",
    alpha3: "LKA",
    translations: {
      en: "Sri Lanka",
      es: "Sri Lanka",
      fr: "Sri Lanka",
      de: "Sri Lanka",
      bg: "Шри Ланка"
    }
  },
  {
    name: "Lesotho",
    code: "",
    alpha2: "LS",
    alpha3: "LSO",
    translations: {
      en: "Lesotho",
      es: "Lesoto",
      fr: "Lesotho",
      de: "Lesotho",
      bg: "Лесото"
    }
  },
  {
    name: "Lithuania",
    code: "",
    alpha2: "LT",
    alpha3: "LTU",
    translations: {
      en: "Lithuania",
      es: "Lituania",
      fr: "Lituanie",
      de: "Litauen",
      bg: "Литва"
    }
  },
  {
    name: "Luxembourg",
    code: "",
    alpha2: "LU",
    alpha3: "LUX",
    translations: {
      en: "Luxembourg",
      es: "Luxemburgo",
      fr: "Luxembourg",
      de: "Luxemburg",
      bg: "Люксембург"
    }
  },
  {
    name: "Latvia",
    code: "",
    alpha2: "LV",
    alpha3: "LVA",
    translations: {
      en: "Latvia",
      es: "Letonia",
      fr: "Lettonie",
      de: "Lettland",
      bg: "Латвия"
    }
  },
  {
    name: "Macao",
    code: "",
    alpha2: "MO",
    alpha3: "MAC",
    translations: {
      en: "Macao",
      es: "Macao",
      fr: "Macau",
      de: "Macao",
      bg: "Макао"
    }
  },
  {
    name: "Saint Martin (French part)",
    code: "",
    alpha2: "MF",
    alpha3: "MAF",
    translations: {
      en: "Saint Martin (French part)",
      es: "San Martín (zona francesa)",
      fr: "Saint-Martin (partie française)",
      de: "Saint Martin (Französischer Teil)",
      bg: "Свети Мартин (френска част)"
    }
  },
  {
    name: "Morocco",
    code: "",
    alpha2: "MA",
    alpha3: "MAR",
    translations: {
      en: "Morocco",
      es: "Marruecos",
      fr: "Maroc",
      de: "Marokko",
      bg: "Мароко"
    }
  },
  {
    name: "Monaco",
    code: "",
    alpha2: "MC",
    alpha3: "MCO",
    translations: {
      en: "Monaco",
      es: "Mónaco",
      fr: "Monaco",
      de: "Monaco",
      bg: "Монако"
    }
  },
  {
    name: "Moldova, Republic of",
    code: "",
    alpha2: "MD",
    alpha3: "MDA",
    translations: {
      en: "Moldova, Republic of",
      es: "Moldavia, República de",
      fr: "Moldova, République de",
      de: "Moldau, Republik",
      bg: "Молдова, Република"
    }
  },
  {
    name: "Madagascar",
    code: "",
    alpha2: "MG",
    alpha3: "MDG",
    translations: {
      en: "Madagascar",
      es: "Madagascar",
      fr: "Madagascar",
      de: "Madagaskar",
      bg: "Мадагаскар"
    }
  },
  {
    name: "Maldives",
    code: "",
    alpha2: "MV",
    alpha3: "MDV",
    translations: {
      en: "Maldives",
      es: "Islas Maldivas",
      fr: "Maldives",
      de: "Malediven",
      bg: "Малдиви"
    }
  },
  {
    name: "Mexico",
    code: "",
    alpha2: "MX",
    alpha3: "MEX",
    translations: {
      en: "Mexico",
      es: "México",
      fr: "Mexique",
      de: "Mexiko",
      bg: "Мексико"
    }
  },
  {
    name: "Marshall Islands",
    code: "",
    alpha2: "MH",
    alpha3: "MHL",
    translations: {
      en: "Marshall Islands",
      es: "Islas Marshall",
      fr: "Îles Marshall",
      de: "Marshallinseln",
      bg: "Маршалски острови"
    }
  },
  {
    name: "North Macedonia",
    code: "",
    alpha2: "MK",
    alpha3: "MKD",
    translations: {
      en: "North Macedonia",
      es: "Macedonia del Norte",
      fr: "Macédoine du Nord",
      de: "Nordmazedonien",
      bg: "North Macedonia"
    }
  },
  {
    name: "Mali",
    code: "",
    alpha2: "ML",
    alpha3: "MLI",
    translations: {
      en: "Mali",
      es: "Mali",
      fr: "Mali",
      de: "Mali",
      bg: "Мали"
    }
  },
  {
    name: "Malta",
    code: "",
    alpha2: "MT",
    alpha3: "MLT",
    translations: {
      en: "Malta",
      es: "Malta",
      fr: "Malte",
      de: "Malta",
      bg: "Малта"
    }
  },
  {
    name: "Myanmar",
    code: "",
    alpha2: "MM",
    alpha3: "MMR",
    translations: {
      en: "Myanmar",
      es: "Birmania",
      fr: "Birmanie",
      de: "Myanmar",
      bg: "Мянмар"
    }
  },
  {
    name: "Montenegro",
    code: "",
    alpha2: "ME",
    alpha3: "MNE",
    translations: {
      en: "Montenegro",
      es: "Montenegro",
      fr: "Monténégro",
      de: "Montenegro",
      bg: "Черна гора"
    }
  },
  {
    name: "Mongolia",
    code: "",
    alpha2: "MN",
    alpha3: "MNG",
    translations: {
      en: "Mongolia",
      es: "Mongolia",
      fr: "Mongolie",
      de: "Mongolei",
      bg: "Монголия"
    }
  },
  {
    name: "Northern Mariana Islands",
    code: "",
    alpha2: "MP",
    alpha3: "MNP",
    translations: {
      en: "Northern Mariana Islands",
      es: "Islas Marianas del Norte",
      fr: "Îles Mariannes du Nord",
      de: "Nördliche Marianen",
      bg: "Северни марианови Острови"
    }
  },
  {
    name: "Mozambique",
    code: "",
    alpha2: "MZ",
    alpha3: "MOZ",
    translations: {
      en: "Mozambique",
      es: "Mozambique",
      fr: "Mozambique",
      de: "Mosambik",
      bg: "Мозамбик"
    }
  },
  {
    name: "Mauritania",
    code: "",
    alpha2: "MR",
    alpha3: "MRT",
    translations: {
      en: "Mauritania",
      es: "Mauritania",
      fr: "Mauritanie",
      de: "Mauretanien",
      bg: "Мавритания"
    }
  },
  {
    name: "Montserrat",
    code: "",
    alpha2: "MS",
    alpha3: "MSR",
    translations: {
      en: "Montserrat",
      es: "Montserrat",
      fr: "Montserrat",
      de: "Montserrat",
      bg: "Монсерат"
    }
  },
  {
    name: "Martinique",
    code: "",
    alpha2: "MQ",
    alpha3: "MTQ",
    translations: {
      en: "Martinique",
      es: "Martinica",
      fr: "Martinique",
      de: "Martinique",
      bg: "Мартиника"
    }
  },
  {
    name: "Mauritius",
    code: "",
    alpha2: "MU",
    alpha3: "MUS",
    translations: {
      en: "Mauritius",
      es: "Mauricio",
      fr: "Maurice",
      de: "Mauritius",
      bg: "Мавриций"
    }
  },
  {
    name: "Malawi",
    code: "",
    alpha2: "MW",
    alpha3: "MWI",
    translations: {
      en: "Malawi",
      es: "Malaui",
      fr: "Malawi",
      de: "Malawi",
      bg: "Малави"
    }
  },
  {
    name: "Malaysia",
    code: "",
    alpha2: "MY",
    alpha3: "MYS",
    translations: {
      en: "Malaysia",
      es: "Malasia",
      fr: "Malaisie",
      de: "Malaysia",
      bg: "Малайзия"
    }
  },
  {
    name: "Mayotte",
    code: "",
    alpha2: "YT",
    alpha3: "MYT",
    translations: {
      en: "Mayotte",
      es: "Mayotte",
      fr: "Mayotte",
      de: "Mayotte",
      bg: "Майот"
    }
  },
  {
    name: "Namibia",
    code: "",
    alpha2: "NA",
    alpha3: "NAM",
    translations: {
      en: "Namibia",
      es: "Namibia",
      fr: "Namibie",
      de: "Namibia",
      bg: "Намибия"
    }
  },
  {
    name: "New Caledonia",
    code: "",
    alpha2: "NC",
    alpha3: "NCL",
    translations: {
      en: "New Caledonia",
      es: "Nueva Caledonia",
      fr: "Nouvelle-Calédonie",
      de: "Neukaledonien",
      bg: "Нова Каледония"
    }
  },
  {
    name: "Niger",
    code: "",
    alpha2: "NE",
    alpha3: "NER",
    translations: {
      en: "Niger",
      es: "Niger",
      fr: "Niger",
      de: "Niger",
      bg: "Нигер"
    }
  },
  {
    name: "Norfolk Island",
    code: "",
    alpha2: "NF",
    alpha3: "NFK",
    translations: {
      en: "Norfolk Island",
      es: "Isla Norfolk",
      fr: "île Norfolk",
      de: "Norfolkinsel",
      bg: "Остров Норфолк"
    }
  },
  {
    name: "Nigeria",
    code: "",
    alpha2: "NG",
    alpha3: "NGA",
    translations: {
      en: "Nigeria",
      es: "Nigeria",
      fr: "Nigeria",
      de: "Nigeria",
      bg: "Нигерия"
    }
  },
  {
    name: "Nicaragua",
    code: "",
    alpha2: "NI",
    alpha3: "NIC",
    translations: {
      en: "Nicaragua",
      es: "Nicaragua",
      fr: "Nicaragua",
      de: "Nicaragua",
      bg: "Никарагуа"
    }
  },
  {
    name: "Niue",
    code: "",
    alpha2: "NU",
    alpha3: "NIU",
    translations: {
      en: "Niue",
      es: "Niue",
      fr: "Nioue",
      de: "Niue",
      bg: "Нию"
    }
  },
  {
    name: "Netherlands",
    code: "",
    alpha2: "NL",
    alpha3: "NLD",
    translations: {
      en: "Netherlands",
      es: "Países Bajos",
      fr: "Pays-Bas",
      de: "Niederlande",
      bg: "Холандия"
    }
  },
  {
    name: "Norway",
    code: "",
    alpha2: "NO",
    alpha3: "NOR",
    translations: {
      en: "Norway",
      es: "Noruega",
      fr: "Norvège",
      de: "Norwegen",
      bg: "Норвегия"
    }
  },
  {
    name: "Nepal",
    code: "",
    alpha2: "NP",
    alpha3: "NPL",
    translations: {
      en: "Nepal",
      es: "Nepal",
      fr: "Népal",
      de: "Nepal",
      bg: "Непал"
    }
  },
  {
    name: "Nauru",
    code: "",
    alpha2: "NR",
    alpha3: "NRU",
    translations: {
      en: "Nauru",
      es: "Nauru",
      fr: "Nauru",
      de: "Nauru",
      bg: "Науру"
    }
  },
  {
    name: "New Zealand",
    code: "",
    alpha2: "NZ",
    alpha3: "NZL",
    translations: {
      en: "New Zealand",
      es: "Nueva Zelanda",
      fr: "Nouvelle-Zélande",
      de: "Neuseeland",
      bg: "Нова Зеландия"
    }
  },
  {
    name: "Oman",
    code: "",
    alpha2: "OM",
    alpha3: "OMN",
    translations: {
      en: "Oman",
      es: "Omán",
      fr: "Oman",
      de: "Oman",
      bg: "Оман"
    }
  },
  {
    name: "Pakistan",
    code: "",
    alpha2: "PK",
    alpha3: "PAK",
    translations: {
      en: "Pakistan",
      es: "Pakistán",
      fr: "Pakistan",
      de: "Pakistan",
      bg: "Пакистан"
    }
  },
  {
    name: "Panama",
    code: "",
    alpha2: "PA",
    alpha3: "PAN",
    translations: {
      en: "Panama",
      es: "Panamá",
      fr: "Panama",
      de: "Panama",
      bg: "Панама"
    }
  },
  {
    name: "Pitcairn",
    code: "",
    alpha2: "PN",
    alpha3: "PCN",
    translations: {
      en: "Pitcairn",
      es: "Pitcairn",
      fr: "Îles Pitcairn",
      de: "Pitcairn",
      bg: "Питкеърн"
    }
  },
  {
    name: "Peru",
    code: "",
    alpha2: "PE",
    alpha3: "PER",
    translations: {
      en: "Peru",
      es: "Perú",
      fr: "Pérou",
      de: "Peru",
      bg: "Перу"
    }
  },
  {
    name: "Philippines",
    code: "",
    alpha2: "PH",
    alpha3: "PHL",
    translations: {
      en: "Philippines",
      es: "Filipinas",
      fr: "Philippines",
      de: "Philippinen",
      bg: "Филипини"
    }
  },
  {
    name: "Palau",
    code: "",
    alpha2: "PW",
    alpha3: "PLW",
    translations: {
      en: "Palau",
      es: "Palaos",
      fr: "Palaos",
      de: "Palau",
      bg: "Палау"
    }
  },
  {
    name: "Papua New Guinea",
    code: "",
    alpha2: "PG",
    alpha3: "PNG",
    translations: {
      en: "Papua New Guinea",
      es: "Papúa Nueva Guinea",
      fr: "Papouasie-Nouvelle-Guinée",
      de: "Papua-Neuguinea",
      bg: "Папуа Нова Гвинея"
    }
  },
  {
    name: "Poland",
    code: "",
    alpha2: "PL",
    alpha3: "POL",
    translations: {
      en: "Poland",
      es: "Polonia",
      fr: "Pologne",
      de: "Polen",
      bg: "Полша"
    }
  },
  {
    name: "Puerto Rico",
    code: "",
    alpha2: "PR",
    alpha3: "PRI",
    translations: {
      en: "Puerto Rico",
      es: "Puerto Rico",
      fr: "Porto Rico",
      de: "Puerto Rico",
      bg: "Пуерто Рико"
    }
  },
  {
    name: "Korea, Democratic People's Republic of",
    code: "",
    alpha2: "KP",
    alpha3: "PRK",
    translations: {
      en: "Korea, Democratic People's Republic of",
      es: "Corea, República Democrática Popular de",
      fr: "Corée, République populaire démocratique de",
      de: "Korea, Demokratische Volksrepublik",
      bg: "Корея, Демократична народна република"
    }
  },
  {
    name: "Portugal",
    code: "",
    alpha2: "PT",
    alpha3: "PRT",
    translations: {
      en: "Portugal",
      es: "Portugal",
      fr: "Portugal",
      de: "Portugal",
      bg: "Португалия"
    }
  },
  {
    name: "Paraguay",
    code: "",
    alpha2: "PY",
    alpha3: "PRY",
    translations: {
      en: "Paraguay",
      es: "Paraguay",
      fr: "Paraguay",
      de: "Paraguay",
      bg: "Парагвай"
    }
  },
  {
    name: "French Polynesia",
    code: "",
    alpha2: "PF",
    alpha3: "PYF",
    translations: {
      en: "French Polynesia",
      es: "Polinesia Francesa",
      fr: "Polynésie française",
      de: "Französisch-Polynesien",
      bg: "Френска Полинезия"
    }
  },
  {
    name: "Qatar",
    code: "",
    alpha2: "QA",
    alpha3: "QAT",
    translations: {
      en: "Qatar",
      es: "Catar",
      fr: "Qatar",
      de: "Katar",
      bg: "Катар"
    }
  },
  {
    name: "Réunion",
    code: "",
    alpha2: "RE",
    alpha3: "REU",
    translations: {
      en: "Réunion",
      es: "Reunión",
      fr: "Réunion, Île de la",
      de: "Réunion",
      bg: "Риюниън"
    }
  },
  {
    name: "Romania",
    code: "",
    alpha2: "RO",
    alpha3: "ROU",
    translations: {
      en: "Romania",
      es: "Rumanía",
      fr: "Roumanie",
      de: "Rumänien",
      bg: "Румъния"
    }
  },
  {
    name: "Russian Federation",
    code: "",
    alpha2: "RU",
    alpha3: "RUS",
    translations: {
      en: "Russian Federation",
      es: "Federación Rusa",
      fr: "Russie, Fédération de",
      de: "Russische Föderation",
      bg: "Руска федерация"
    }
  },
  {
    name: "Rwanda",
    code: "",
    alpha2: "RW",
    alpha3: "RWA",
    translations: {
      en: "Rwanda",
      es: "Ruanda",
      fr: "Rwanda",
      de: "Ruanda",
      bg: "Руанда"
    }
  },
  {
    name: "Saudi Arabia",
    code: "",
    alpha2: "SA",
    alpha3: "SAU",
    translations: {
      en: "Saudi Arabia",
      es: "Arabia Saudí",
      fr: "Arabie saoudite",
      de: "Saudi-Arabien",
      bg: "Саудитска Арабия"
    }
  },
  {
    name: "Sudan",
    code: "",
    alpha2: "SD",
    alpha3: "SDN",
    translations: {
      en: "Sudan",
      es: "Sudán",
      fr: "Soudan",
      de: "Sudan",
      bg: "Судан"
    }
  },
  {
    name: "Senegal",
    code: "",
    alpha2: "SN",
    alpha3: "SEN",
    translations: {
      en: "Senegal",
      es: "Senegal",
      fr: "Sénégal",
      de: "Senegal",
      bg: "Сенегал"
    }
  },
  {
    name: "Singapore",
    code: "",
    alpha2: "SG",
    alpha3: "SGP",
    translations: {
      en: "Singapore",
      es: "Singapur",
      fr: "Singapour",
      de: "Singapur",
      bg: "Сингапур"
    }
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "",
    alpha2: "GS",
    alpha3: "SGS",
    translations: {
      en: "South Georgia and the South Sandwich Islands",
      es: "Islas Georgias del Sur y Sándwich del Sur",
      fr: "Géorgie du Sud et les îles Sandwich du Sud",
      de: "South Georgia und die Südlichen Sandwichinseln",
      bg: "Южна Джорджия и Южни Сандвичеви острови"
    }
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    code: "",
    alpha2: "SH",
    alpha3: "SHN",
    translations: {
      en: "Saint Helena, Ascension and Tristan da Cunha",
      es: "Santa Elena, Ascensión y Tristán de Acuña",
      fr: "Sainte-Hélène, Ascension et Tristan da Cunha",
      de: "St. Helena, Ascension und Tristan da Cunha",
      bg: "Света Елена, Възнесение и Тристан да Куня"
    }
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "",
    alpha2: "SJ",
    alpha3: "SJM",
    translations: {
      en: "Svalbard and Jan Mayen",
      es: "Svalbard y Jan Mayen",
      fr: "Svalbard et île Jan Mayen",
      de: "Svalbard und Jan Mayen",
      bg: "Свалбард и Ян Майен"
    }
  },
  {
    name: "Solomon Islands",
    code: "",
    alpha2: "SB",
    alpha3: "SLB",
    translations: {
      en: "Solomon Islands",
      es: "Islas Salomón",
      fr: "Salomon, Îles",
      de: "Salomoninseln",
      bg: "Соломонови острови"
    }
  },
  {
    name: "Sierra Leone",
    code: "",
    alpha2: "SL",
    alpha3: "SLE",
    translations: {
      en: "Sierra Leone",
      es: "Sierra Leona",
      fr: "Sierra Leone",
      de: "Sierra Leone",
      bg: "Сиера Леоне"
    }
  },
  {
    name: "El Salvador",
    code: "",
    alpha2: "SV",
    alpha3: "SLV",
    translations: {
      en: "El Salvador",
      es: "El Salvador",
      fr: "Salvador",
      de: "El Salvador",
      bg: "Ел Салвадор"
    }
  },
  {
    name: "San Marino",
    code: "",
    alpha2: "SM",
    alpha3: "SMR",
    translations: {
      en: "San Marino",
      es: "San Marino",
      fr: "Saint-Marin",
      de: "San Marino",
      bg: "Сан Марино"
    }
  },
  {
    name: "Somalia",
    code: "",
    alpha2: "SO",
    alpha3: "SOM",
    translations: {
      en: "Somalia",
      es: "Somalia",
      fr: "Somalie",
      de: "Somalia",
      bg: "Сомалия"
    }
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "",
    alpha2: "PM",
    alpha3: "SPM",
    translations: {
      en: "Saint Pierre and Miquelon",
      es: "San Pedro y Miquelon",
      fr: "Saint-Pierre-et-Miquelon",
      de: "St. Pierre und Miquelon",
      bg: "Свети Пиер и Микелон"
    }
  },
  {
    name: "Serbia",
    code: "",
    alpha2: "RS",
    alpha3: "SRB",
    translations: {
      en: "Serbia",
      es: "Serbia",
      fr: "Serbie",
      de: "Serbien",
      bg: "Сърбия"
    }
  },
  {
    name: "South Sudan",
    code: "",
    alpha2: "SS",
    alpha3: "SSD",
    translations: {
      en: "South Sudan",
      es: "Sudán del Sur",
      fr: "Soudan du Sud",
      de: "Südsudan",
      bg: "Южен Судан"
    }
  },
  {
    name: "Sao Tome and Principe",
    code: "",
    alpha2: "ST",
    alpha3: "STP",
    translations: {
      en: "Sao Tome and Principe",
      es: "Santo Tomé y Príncipe",
      fr: "Sao Tomé-et-Principe",
      de: "São Tomé und Príncipe",
      bg: "Сао Томе и Принсипи"
    }
  },
  {
    name: "Suriname",
    code: "",
    alpha2: "SR",
    alpha3: "SUR",
    translations: {
      en: "Suriname",
      es: "Surinám",
      fr: "Surinam",
      de: "Suriname",
      bg: "Суринам"
    }
  },
  {
    name: "Slovakia",
    code: "",
    alpha2: "SK",
    alpha3: "SVK",
    translations: {
      en: "Slovakia",
      es: "Eslovaquia",
      fr: "Slovaquie",
      de: "Slowakei",
      bg: "Словакия"
    }
  },
  {
    name: "Slovenia",
    code: "",
    alpha2: "SI",
    alpha3: "SVN",
    translations: {
      en: "Slovenia",
      es: "Eslovenia",
      fr: "Slovénie",
      de: "Slowenien",
      bg: "Словения"
    }
  },
  {
    name: "Sweden",
    code: "",
    alpha2: "SE",
    alpha3: "SWE",
    translations: {
      en: "Sweden",
      es: "Suecia",
      fr: "Suède",
      de: "Schweden",
      bg: "Швеция"
    }
  },
  {
    name: "Eswatini",
    code: "",
    alpha2: "SZ",
    alpha3: "SWZ",
    translations: {
      en: "Eswatini",
      es: "Suazilandia",
      fr: "Eswatini",
      de: "Eswatini",
      bg: "Eswatini"
    }
  },
  {
    name: "Sint Maarten (Dutch part)",
    code: "",
    alpha2: "SX",
    alpha3: "SXM",
    translations: {
      en: "Sint Maarten (Dutch part)",
      es: "Isla de San Martín (zona holandsea)",
      fr: "Saint-Martin (partie néerlandaise)",
      de: "Saint-Martin (Niederländischer Teil)",
      bg: "Синт Мартен (холандска част)"
    }
  },
  {
    name: "Seychelles",
    code: "",
    alpha2: "SC",
    alpha3: "SYC",
    translations: {
      en: "Seychelles",
      es: "Seychelles",
      fr: "Seychelles",
      de: "Seychellen",
      bg: "Сейшели"
    }
  },
  {
    name: "Syrian Arab Republic",
    code: "",
    alpha2: "SY",
    alpha3: "SYR",
    translations: {
      en: "Syrian Arab Republic",
      es: "República árabe de Siria",
      fr: "Syrienne, République arabe",
      de: "Syrien, Arabische Republik",
      bg: "Сирийска арабска република"
    }
  },
  {
    name: "Turks and Caicos Islands",
    code: "",
    alpha2: "TC",
    alpha3: "TCA",
    translations: {
      en: "Turks and Caicos Islands",
      es: "Islas Turcas y Caicos",
      fr: "îles Turques-et-Caïques",
      de: "Turks- und Caicosinseln",
      bg: "Острови Тюрк и Кайкос"
    }
  },
  {
    name: "Chad",
    code: "",
    alpha2: "TD",
    alpha3: "TCD",
    translations: {
      en: "Chad",
      es: "Chad",
      fr: "Tchad",
      de: "Tschad",
      bg: "Чад"
    }
  },
  {
    name: "Togo",
    code: "",
    alpha2: "TG",
    alpha3: "TGO",
    translations: {
      en: "Togo",
      es: "Togo",
      fr: "Togo",
      de: "Togo",
      bg: "Того"
    }
  },
  {
    name: "Thailand",
    code: "",
    alpha2: "TH",
    alpha3: "THA",
    translations: {
      en: "Thailand",
      es: "Tailandia",
      fr: "Thaïlande",
      de: "Thailand",
      bg: "Тайланд"
    }
  },
  {
    name: "Tajikistan",
    code: "",
    alpha2: "TJ",
    alpha3: "TJK",
    translations: {
      en: "Tajikistan",
      es: "Tayikistán",
      fr: "Tadjikistan",
      de: "Tadschikistan",
      bg: "Таджикистан"
    }
  },
  {
    name: "Tokelau",
    code: "",
    alpha2: "TK",
    alpha3: "TKL",
    translations: {
      en: "Tokelau",
      es: "Tokelau",
      fr: "Tokelau",
      de: "Tokelau",
      bg: "Токелау"
    }
  },
  {
    name: "Turkmenistan",
    code: "",
    alpha2: "TM",
    alpha3: "TKM",
    translations: {
      en: "Turkmenistan",
      es: "Turkmenistán",
      fr: "Turkménistan",
      de: "Turkmenistan",
      bg: "Туркменистан"
    }
  },
  {
    name: "Timor-Leste",
    code: "",
    alpha2: "TL",
    alpha3: "TLS",
    translations: {
      en: "Timor-Leste",
      es: "Timor Oriental",
      fr: "Timor oriental",
      de: "Timor-Leste",
      bg: "Тимор-Лест"
    }
  },
  {
    name: "Tonga",
    code: "",
    alpha2: "TO",
    alpha3: "TON",
    translations: {
      en: "Tonga",
      es: "Tonga",
      fr: "Tonga",
      de: "Tonga",
      bg: "Тонга"
    }
  },
  {
    name: "Trinidad and Tobago",
    code: "",
    alpha2: "TT",
    alpha3: "TTO",
    translations: {
      en: "Trinidad and Tobago",
      es: "Trinidad y Tobago",
      fr: "Trinité-et-Tobago",
      de: "Trinidad und Tobago",
      bg: "Тринидад и Тобаго"
    }
  },
  {
    name: "Tunisia",
    code: "",
    alpha2: "TN",
    alpha3: "TUN",
    translations: {
      en: "Tunisia",
      es: "Tunez",
      fr: "Tunisie",
      de: "Tunesien",
      bg: "Тунис"
    }
  },
  {
    name: "Turkey",
    code: "",
    alpha2: "TR",
    alpha3: "TUR",
    translations: {
      en: "Turkey",
      es: "Turquía",
      fr: "Turquie",
      de: "Türkei",
      bg: "Турция"
    }
  },
  {
    name: "Tuvalu",
    code: "",
    alpha2: "TV",
    alpha3: "TUV",
    translations: {
      en: "Tuvalu",
      es: "Tuvalu",
      fr: "Tuvalu",
      de: "Tuvalu",
      bg: "Тувалу"
    }
  },
  {
    name: "Taiwan, Province of China",
    code: "",
    alpha2: "TW",
    alpha3: "TWN",
    translations: {
      en: "Taiwan, Province of China",
      es: "Taiwán, Provincia de China",
      fr: "Taïwan, province de Chine",
      de: "Taiwan, Chinesische Provinz",
      bg: "Тайван, Китайска провинция"
    }
  },
  {
    name: "Tanzania, United Republic of",
    code: "",
    alpha2: "TZ",
    alpha3: "TZA",
    translations: {
      en: "Tanzania, United Republic of",
      es: "Tanzania, República unida de",
      fr: "Tanzanie, République unie de",
      de: "Tansania, Vereinigte Republik",
      bg: "Танзания, Обединена република"
    }
  },
  {
    name: "Uganda",
    code: "",
    alpha2: "UG",
    alpha3: "UGA",
    translations: {
      en: "Uganda",
      es: "Uganda",
      fr: "Ouganda",
      de: "Uganda",
      bg: "Уганда"
    }
  },
  {
    name: "Ukraine",
    code: "",
    alpha2: "UA",
    alpha3: "UKR",
    translations: {
      en: "Ukraine",
      es: "Ucrania",
      fr: "Ukraine",
      de: "Ukraine",
      bg: "Украйна"
    }
  },
  {
    name: "United States Minor Outlying Islands",
    code: "",
    alpha2: "UM",
    alpha3: "UMI",
    translations: {
      en: "United States Minor Outlying Islands",
      es: "Islas Ultramarinas Menores de Estados Unidos",
      fr: "Îles mineures éloignées des États-Unis",
      de: "United States Minor Outlying Islands",
      bg: "Обединени малки острови по крайбрежието на САЩ"
    }
  },
  {
    name: "Uruguay",
    code: "",
    alpha2: "UY",
    alpha3: "URY",
    translations: {
      en: "Uruguay",
      es: "Uruguay",
      fr: "Uruguay",
      de: "Uruguay",
      bg: "Уругвай"
    }
  },
  {
    name: "United States",
    code: "",
    alpha2: "US",
    alpha3: "USA",
    translations: {
      en: "United States",
      es: "Estados Unidos",
      fr: "États-Unis",
      de: "Vereinigte Staaten",
      bg: "Съединени щати"
    }
  },
  {
    name: "Uzbekistan",
    code: "",
    alpha2: "UZ",
    alpha3: "UZB",
    translations: {
      en: "Uzbekistan",
      es: "Uzbekistán",
      fr: "Ouzbékistan",
      de: "Usbekistan",
      bg: "Узбекистан"
    }
  },
  {
    name: "Holy See (Vatican City State)",
    code: "",
    alpha2: "VA",
    alpha3: "VAT",
    translations: {
      en: "Holy See (Vatican City State)",
      es: "Santa Sede (Ciudad Estado del Vaticano)",
      fr: "Saint-Siège (état de la cité du Vatican)",
      de: "Heiliger Stuhl (Staat Vatikanstadt)",
      bg: "Ватикана"
    }
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "",
    alpha2: "VC",
    alpha3: "VCT",
    translations: {
      en: "Saint Vincent and the Grenadines",
      es: "San Vicente y las Granadinas",
      fr: "Saint-Vincent-et-les-Grenadines",
      de: "St. Vincent und die Grenadinen",
      bg: "Свети Винсент и Гренадин"
    }
  },
  {
    name: "Venezuela, Bolivarian Republic of",
    code: "",
    alpha2: "VE",
    alpha3: "VEN",
    translations: {
      en: "Venezuela, Bolivarian Republic of",
      es: "Venezuela, República Bolivariana de",
      fr: "Vénézuela, république bolivarienne du",
      de: "Venezuela, Bolivarische Republik",
      bg: "Венецуела, Боливарска република"
    }
  },
  {
    name: "Virgin Islands, British",
    code: "",
    alpha2: "VG",
    alpha3: "VGB",
    translations: {
      en: "Virgin Islands, British",
      es: "Islas Vírgenes, Británicas",
      fr: "Îles Vierges britanniques",
      de: "Britische Jungferninseln",
      bg: "Вирджински острови, Британски"
    }
  },
  {
    name: "Virgin Islands, U.S.",
    code: "",
    alpha2: "VI",
    alpha3: "VIR",
    translations: {
      en: "Virgin Islands, U.S.",
      es: "Islas Vírgenes, de EEUU",
      fr: "Îles Vierges des États-Unis",
      de: "Amerikanische Jungferninseln",
      bg: "Вирджински острови, САЩ"
    }
  },
  {
    name: "Viet Nam",
    code: "",
    alpha2: "VN",
    alpha3: "VNM",
    translations: {
      en: "Viet Nam",
      es: "Vietnam",
      fr: "Viêt Nam",
      de: "Vietnam",
      bg: "Виетнам"
    }
  },
  {
    name: "Vanuatu",
    code: "",
    alpha2: "VU",
    alpha3: "VUT",
    translations: {
      en: "Vanuatu",
      es: "Vanuatu",
      fr: "Vanuatu",
      de: "Vanuatu",
      bg: "Вануату"
    }
  },
  {
    name: "Wallis and Futuna",
    code: "",
    alpha2: "WF",
    alpha3: "WLF",
    translations: {
      en: "Wallis and Futuna",
      es: "Wallis y Futuna",
      fr: "Wallis et Futuna",
      de: "Wallis und Futuna",
      bg: "Острови Уолис и Футуна"
    }
  },
  {
    name: "Samoa",
    code: "",
    alpha2: "WS",
    alpha3: "WSM",
    translations: {
      en: "Samoa",
      es: "Samoa",
      fr: "Samoa",
      de: "Samoa",
      bg: "Самоа"
    }
  },
  {
    name: "Yemen",
    code: "",
    alpha2: "YE",
    alpha3: "YEM",
    translations: {
      en: "Yemen",
      es: "Yemen",
      fr: "Yémen",
      de: "Jemen",
      bg: "Йемен"
    }
  },
  {
    name: "South Africa",
    code: "",
    alpha2: "ZA",
    alpha3: "ZAF",
    translations: {
      en: "South Africa",
      es: "Sudáfrica",
      fr: "Afrique du Sud",
      de: "Südafrika",
      bg: "Южна Африка"
    }
  },
  {
    name: "Zambia",
    code: "",
    alpha2: "ZM",
    alpha3: "ZMB",
    translations: {
      en: "Zambia",
      es: "Zambia",
      fr: "Zambie",
      de: "Sambia",
      bg: "Замбия"
    }
  },
  {
    name: "Zimbabwe",
    code: "",
    alpha2: "ZW",
    alpha3: "ZWE",
    translations: {
      en: "Zimbabwe",
      es: "Zimbabue",
      fr: "Zimbabwe",
      de: "Simbabwe",
      bg: "Зимбабве"
    }
  },
];

export default COUNTRIES;
