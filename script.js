const restaurants = [
{
number: "01",
name: "V PHO",
type: "Vietnamese",
address: "25a/156 Inala Ave, Inala QLD 4077",
description: "A cosy Vietnamese spot in Inala, captured through comforting noodle soup and a refreshing drink."
},
{
number: "02",
name: "HARAJUKU GYOZA",
type: "Japanese",
address: "141 Queen St, Brisbane City QLD 4000",
description: "Japanese food in the heart of Brisbane City, with gyoza and a variety of dishes and drinks."
},
{
number: "03",
name: "SINCERITY",
type: "Cafe / Bakery",
address: "5 Cremin St, Upper Mount Gravatt QLD 4122",
description: "A bakery and cafe stop with a selection of pastries and baked goods."
},
{
number: "04",
name: "NOS.",
type: "Cafe / Bakery",
address: "109 Annerley Rd, Dutton Park QLD 4102",
description: "A Dutton Park cafe with freshly made meals and a relaxed atmosphere."
},
{
number: "05",
name: "BUWOK",
type: "Korean Kitchen",
address: "Shop 4/8 Gillingham St, Woolloongabba QLD 4102",
description: "A Korean-inspired stop in Woolloongabba with rich, hearty dishes."
},
{
number: "06",
name: "HOT POT CHICKEN",
type: "Hot Pot / Asian",
address: "220 Melbourne St, South Brisbane QLD 4101",
description: "A warming and colourful Asian-style meal in South Brisbane."
},
{
number: "07",
name: "FALALALAH",
type: "Asian Fusion",
address: "Shop 1/193 Melbourne St, South Brisbane QLD 4101",
description: "A South Brisbane restaurant with noodles, vegetables and skewers."
},
{
number: "08",
name: "FRESH ALO",
type: "Cafe / Dessert",
address: "391 Montague Rd, West End QLD 4101",
description: "A West End stop with pastries, desserts and cafe-style food."
},
{
number: "09",
name: "ANITA GELATO",
type: "Gelato",
address: "111 Boundary St, West End QLD 4101",
description: "A colourful gelato stop on Boundary Street with a rotating selection of flavours."
},
{
number: "10",
name: "COTTI",
type: "Drinks",
address: "Shop 16, Level A, 91 Queen St, Brisbane City QLD 4000",
description: "A drink stop where the app offers three introductory vouchers for $3.59, followed by occasional vouchers around $4.90. Voucher prices can vary by drink."
},
{
number: "11",
name: "YAHOO KITCHEN",
type: "Malaysian",
address: "Westfield Mt Gravatt, 2001/2 Cnr Logan and Kessels Rd, Upper Mount Gravatt QLD 4122",
description: "A Malaysian food option at Westfield Mt Gravatt."
},
{
number: "12",
name: "SEMI SEMI",
type: "Sandwich Shop",
address: "G4/115 Boundary St, West End QLD 4101",
description: "An underrated sandwich shop in West End."
},
{
number: "13",
name: "OLLI ITALIANO",
type: "Italian",
address: "Shop 2/53 Lytton Rd, East Brisbane QLD 4169",
description: "A cosy Italian spot."
},
{
number: "14",
name: "TERRIFIC NOODLES",
type: "Noodles",
address: "Level 1 Shop 6/341 Mains Rd, Sunnybank QLD 4109",
description: "A hidden noodle shop in Sunnybank."
},
{
number: "15",
name: "NEW ZEALAND NATURAL",
type: "NZ Ice Cream & Shakes",
address: "Shop 31BE, Little Stanley St, Parkland QLD 4101",
description: "Authentic New Zealand ice cream and shakes."
},
{
number: "16",
name: "GOJIP",
type: "Korean",
address: "Shop 36, Level 1/11-21 Kingston Rd, Underwood QLD 4119",
description: "A Korean food stop in Underwood."
},
{
number: "17",
name: "JMT",
type: "Japanese / Korean",
address: "9b Edmondstone St, South Brisbane QLD 4101",
description: "A Japanese-Korean restaurant in South Brisbane."
},
{
number: "18",
name: "SEOUL GARDEN",
type: "Korean",
address: "Market Square, Shop 9, Level 2/341 Mains Rd, Sunnybank QLD 4109",
description: "A Korean food stop in Sunnybank."
},
{
number: "19",
name: "MOMO TO",
type: "Japanese",
address: "Westfield Mt Gravatt, Shop 1377 Kessels Rd, Upper Mount Gravatt QLD 4122",
description: "Japanese food featuring sushi and delicious udon."
}
];

const placesToVisit = [
{
number: "01",
name: "BRISBANE SIGN",
address: "South Bank, South Brisbane QLD 4101",
description: "The iconic Brisbane sign is a fun place to stop for photos and enjoy the South Bank area."
},
{
number: "02",
name: "ROBINSON PARK",
address: "Robinson Park, Brisbane QLD",
description: "A peaceful green space to relax, walk around and enjoy nature."
},
{
number: "03",
name: "PRISON ISLAND",
address: "162 Alfred St, Fortitude Valley QLD 4006",
description: "A fun stop with friends."
},
{
number: "04",
name: "WHEEL OF BRISBANE",
address: "Russell St, South Brisbane QLD 4101",
description: "A Ferris wheel with great views of Brisbane. There are also discounts available for students."
},
{
number: "05",
name: "BURNETT LANE",
address: "Burnett Lane, Brisbane City QLD 4000",
description: "A cool city laneway filled with street art and cute cafes."
},
{
number: "06",
name: "SOUTH BANK PARKLANDS",
address: "Clem Jones Promenade, South Brisbane QLD 4101",
description: "An endless road of beauty and green nature along the river."
},
{
number: "07",
name: "QUEENSLAND ART GALLERY",
address: "Stanley Pl, South Brisbane QLD 4101",
description: "A free option for art explorers, with plenty of art and exhibitions to discover."
},
{
number: "08",
name: "SHORNCLIFFE WATERFRONT",
address: "Park Parade, Shorncliffe QLD 4017",
description: "A beautiful waterfront stroll with amazing fish and chips."
}
];

function mapsUrl(address) {
return "https://www.google.com/maps/search/?api=1&query=" +
encodeURIComponent(address);
}

document.getElementById("restaurant-list").innerHTML =
restaurants.map(place => ` <article class="restaurant">

```
  <div class="restaurant-top">

    <div class="number">
      ${place.number} /
    </div>

    <div>
      <h3>${place.name}</h3>
      <div class="type">${place.type}</div>
    </div>

    <div class="details">
      <strong>VISIT</strong>
      <span>${place.address}</span>

      <a
        class="map"
        href="${mapsUrl(place.address)}"
        target="_blank"
        rel="noopener">
        VIEW ON GOOGLE MAPS ↗
      </a>
    </div>

  </div>

  <p class="description">
    ${place.description}
  </p>

</article>
```

`).join("");

document.getElementById("places-list").innerHTML =
placesToVisit.map(place => ` <article class="place">

```
  <div class="number">
    ${place.number} /
  </div>

  <h3>${place.name}</h3>

  <p class="address">
    📍 ${place.address}
  </p>

  <p class="place-description">
    ${place.description}
  </p>

  <br>

  <a
    class="map"
    href="${mapsUrl(place.address)}"
    target="_blank"
    rel="noopener">
    VIEW ON GOOGLE MAPS ↗
  </a>

</article>
```

`).join("");
