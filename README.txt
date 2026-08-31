const restaurants = [
  ["01", "V PHO", "Vietnamese", "25a/156 Inala Ave, Inala QLD 4077", "A cosy Vietnamese spot in Inala. Great for comforting Vietnamese food."],
  ["02", "HARAJUKU GYOZA", "Japanese", "141 Queen St, Brisbane City QLD 4000", "Japanese food in the heart of Brisbane City."],
  ["03", "SINCERITY", "Cafe / Bakery", "5 Cremin St, Upper Mount Gravatt QLD 4122", "A bakery and cafe with a selection of pastries and baked goods."],
  ["04", "NOS.", "Cafe / Bakery", "109 Annerley Rd, Dutton Park QLD 4102", "A Dutton Park cafe with freshly made meals."],
  ["05", "BUWOK", "Korean Kitchen", "Shop 4/8 Gillingham St, Woolloongabba QLD 4102", "A Korean-inspired food spot in Woolloongabba."],
  ["06", "HOT POT CHICKEN", "Hot Pot / Asian", "220 Melbourne St, South Brisbane QLD 4101", "A warming Asian-style meal in South Brisbane."],
  ["07", "FALALALAH", "Asian Fusion", "Shop 1/193 Melbourne St, South Brisbane QLD 4101", "An Asian fusion restaurant in South Brisbane."],
  ["08", "FRESH ALO", "Cafe / Dessert", "391 Montague Rd, West End QLD 4101", "A West End cafe and dessert stop."],
  ["09", "ANITA GELATO", "Gelato", "111 Boundary St, West End QLD 4101", "A colourful gelato stop on Boundary Street."],
  ["10", "COTTI", "Drinks", "Shop 16, Level A, 91 Queen St, Brisbane City QLD 4000", "A convenient drink stop with app vouchers."],
  ["11", "YAHOO KITCHEN", "Malaysian", "Westfield Mt Gravatt, 2001/2 Cnr Logan and Kessels Rd, Upper Mount Gravatt QLD 4122", "A Malaysian food option at Westfield Mt Gravatt."],
  ["12", "SEMI SEMI", "Sandwich Shop", "G4/115 Boundary St, West End QLD 4101", "An underrated sandwich shop in West End."],
  ["13", "OLLI ITALIANO", "Italian", "Shop 2/53 Lytton Rd, East Brisbane QLD 4169", "A cosy Italian spot."],
  ["14", "TERRIFIC NOODLES", "Noodles", "Level 1 Shop 6/341 Mains Rd, Sunnybank QLD 4109", "A hidden noodle shop in Sunnybank."],
  ["15", "NEW ZEALAND NATURAL", "NZ Ice Cream & Shakes", "Shop 31BE, Little Stanley St, Parkland QLD 4101", "Authentic New Zealand ice cream and shakes."],
  ["16", "GOJIP", "Korean", "Shop 36, Level 1/11-21 Kingston Rd, Underwood QLD 4119", "A Korean food stop in Underwood."],
  ["17", "JMT", "Japanese / Korean", "9b Edmondstone St, South Brisbane QLD 4101", "A Japanese-Korean restaurant in South Brisbane."],
  ["18", "SEOUL GARDEN", "Korean", "Market Square, Shop 9, Level 2/341 Mains Rd, Sunnybank QLD 4109", "A Korean food spot in Sunnybank."],
  ["19", "MOMO TO", "Japanese", "Westfield Mt Gravatt, Shop 1377 Kessels Rd, Upper Mount Gravatt QLD 4122", "Japanese food featuring sushi and delicious udon."]
];

const places = [
  ["01", "BRISBANE SIGN", "South Bank, South Brisbane QLD 4101", "A fun place to stop and see the iconic Brisbane sign."],
  ["02", "ROBINSON PARK", "Robinson Park, Brisbane QLD", "A peaceful green space to relax and enjoy nature."],
  ["03", "PRISON ISLAND", "162 Alfred St, Fortitude Valley QLD 4006", "A fun stop with friends."],
  ["04", "WHEEL OF BRISBANE", "Russell St, South Brisbane QLD 4101", "A Ferris wheel with great views of Brisbane and student discounts."],
  ["05", "BURNETT LANE", "Burnett Lane, Brisbane City QLD 4000", "A cool street with street art and cute cafes."],
  ["06", "SOUTH BANK PARKLANDS", "Clem Jones Promenade, South Brisbane QLD 4101", "An endless road of beauty and green nature."],
  ["07", "QUEENSLAND ART GALLERY", "Stanley Pl, South Brisbane QLD 4101", "A free option for art explorers."],
  ["08", "SHORNCLIFFE WATERFRONT", "Park Parade, Shorncliffe QLD 4017", "A beautiful stroll with amazing fish and chips."]
];

function mapsUrl(address) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
}

const restaurantList = document.getElementById("restaurant-list");

restaurants.forEach(function(place) {
  restaurantList.innerHTML +=
    '<article class="restaurant">' +
      '<div class="restaurant-top">' +
        '<div class="number">' + place[0] + ' /</div>' +
        '<div>' +
          '<h3>' + place[1] + '</h3>' +
          '<div class="type">' + place[2] + '</div>' +
        '</div>' +
        '<div class="details">' +
          '<strong>VISIT</strong>' +
          '<span>' + place[3] + '</span>' +
          '<a class="map" href="' + mapsUrl(place[3]) + '" target="_blank">VIEW ON GOOGLE MAPS ↗</a>' +
        '</div>' +
      '</div>' +
      '<p class="description">' + place[4] + '</p>' +
    '</article>';
});

const placesList = document.getElementById("places-list");

places.forEach(function(place) {
  placesList.innerHTML +=
    '<article class="place">' +
      '<div class="number">' + place[0] + ' /</div>' +
      '<h3>' + place[1] + '</h3>' +
      '<p class="address">📍 ' + place[2] + '</p>' +
      '<p class="place-description">' + place[3] + '</p>' +
      '<br>' +
      '<a class="map" href="' + mapsUrl(place[2]) + '" target="_blank">VIEW ON GOOGLE MAPS ↗</a>' +
    '</article>';
});
