const restaurants = [
{
number: "01",
name: "V PHO",
type: "Vietnamese",
address: "25a/156 Inala Ave, Inala QLD 4077",
description: "A cosy Vietnamese spot in Inala, known for comforting noodle dishes and a relaxed atmosphere."
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
description: "A bakery and cafe with a selection of pastries, baked goods and drinks."
},
{
number: "04",
name: "NOS.",
type: "Cafe / Bakery",
address: "109 Annerley Rd, Dutton Park QLD 4102",
description: "A Dutton Park cafe offering freshly made meals and a relaxed place to stop for food."
},
{
number: "05",
name: "BUWOK",
type: "Korean Kitchen",
address: "Shop 4/8 Gillingham St, Woolloongabba QLD 4102",
description: "A Korean-inspired restaurant in Woolloongabba with hearty dishes made for sharing."
},
{
number: "06",
name: "HOT POT CHICKEN",
type: "Hot Pot / Asian",
address: "220 Melbourne St, South Brisbane QLD 4101",
description: "A colourful and warming Asian-style meal in South Brisbane."
},
{
number: "07",
name: "FALALALAH",
type: "Asian Fusion",
address: "Shop 1/193 Melbourne St, South Brisbane QLD 4101",
description: "A South Brisbane restaurant offering Asian-inspired dishes in a lively area."
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
description: "A convenient drink stop in Brisbane City. The app offers three introductory vouchers for $3.59, followed by occasional vouchers around $4.90. Voucher prices can vary, and some drinks may cost more or less."
},
{
number: "11",
name: "YAHOO KITCHEN",
type: "Malaysian",
address: "Westfield Mt Gravatt, 2001/2 Cnr Logan and Kessels Rd, Upper Mount Gravatt QLD 4122",
description: "A Malaysian food option at Westfield Mt Gravatt, offering a taste of Malaysian-style dishes."
}
];

const placesToVisit = [
{
number: "01",
name: "BRISBANE SIGN / SOUTH BANK",
address: "South Bank Parklands, South Brisbane QLD 4101",
description: "Iconic giant colourful BRISBANE letters beside the river, surrounded by riverside walkways, parklands and skyline views."
},
{
number: "02",
name: "ROBINSON PARK",
address: "221 Fairfield Rd, Fairfield QLD 4103",
description: "A peaceful local park with plenty of green space, mature trees and relaxing surroundings. Great for a stroll or picnic."
}
];

function mapsUrl(address) {
return "https://www.google.com/maps/search/?api=1&query=" +
encodeURIComponent(address);
}

const restaurantList = document.getElementById("restaurant-list");

restaurantList.innerHTML = restaurants.map(place => `

  <article class="restaurant">

```
<div class="restaurant-meta">

  <div class="restaurant-number">
    ${place.number} /
  </div>

  <div>
    <h3>${place.name}</h3>
    <div class="restaurant-type">${place.type}</div>
  </div>

  <div class="restaurant-details">
    <strong>VISIT</strong>
    <span>${place.address}</span>

    <a class="map-link"
       href="${mapsUrl(place.address)}"
       target="_blank"
       rel="noopener">
      VIEW ON GOOGLE MAPS ↗
    </a>
  </div>

</div>

<div class="restaurant-body">

  <div></div>

  <div class="restaurant-copy">
    <span class="tag">${place.type}</span>

    <p>${place.description}</p>
  </div>

</div>
```

  </article>
`).join("");

const placesList = document.getElementById("places-list");

placesList.innerHTML = placesToVisit.map(place => `

  <article class="place-card">

```
<div class="restaurant-number">
  ${place.number} /
</div>

<h3>${place.name}</h3>

<p class="address">
  📍 ${place.address}
</p>

<p>${place.description}</p>

<br>

<a class="map-link"
   href="${mapsUrl(place.address)}"
   target="_blank"
   rel="noopener">
  VIEW ON GOOGLE MAPS ↗
</a>
```

  </article>
`).join("");
