const restaurants = [
  {
    id: "v-pho",
    number: "01",
    name: "V PHO",
    type: "Vietnamese",
    address: "25a/156 Inala Ave, Inala QLD 4077",
    images: ["01-v-pho.jpeg"],
    description: "A cosy Vietnamese spot in Inala, captured through a bowl of comforting noodle soup and a refreshing drink. Add your own notes here about what you ordered, the flavours, atmosphere and what made the visit memorable."
  },
  {
    id: "harajuku",
    number: "02",
    name: "HARAJUKU GYOZA",
    type: "Japanese",
    address: "141 Queen St, Brisbane City QLD 4000",
    images: ["02-harajuku-gyoza-1.jpeg", "02-harajuku-gyoza-2.jpeg"],
    description: "Japanese food in the heart of Brisbane City. This visit featured a generous spread of crispy dishes and a striking matcha dessert. Add your personal review here."
  },
  {
    id: "sincerity",
    number: "03",
    name: "SINCERITY",
    type: "Cafe / Bakery",
    address: "5 Cremin St, Upper Mount Gravatt QLD 4122",
    images: ["03-sincerity.jpeg"],
    description: "A bakery and cafe stop with an especially photogenic pastry selection. Add your notes about the food, service, atmosphere and whether you would return."
  },
  {
    id: "nos",
    number: "04",
    name: "NOS.",
    type: "Cafe / Bakery",
    address: "109 Annerley Rd, Dutton Park QLD 4102",
    images: ["04-nos.jpeg"],
    description: "A Dutton Park cafe captured through one of its hearty, freshly made meals. Add your own description of the dish and what stood out during your visit."
  },
  {
    id: "buwok",
    number: "05",
    name: "BUWOK",
    type: "Korean Kitchen",
    address: "Shop 4/8 Gillingham St, Woolloongabba QLD 4102",
    images: ["05-buwok.jpeg"],
    description: "A Korean-inspired stop in Woolloongabba, photographed with a rich, glossy shared dish. Add your personal review and the exact dish name here."
  },
  {
    id: "hot-pot-chicken",
    number: "06",
    name: "HOT POT CHICKEN",
    type: "Hot Pot / Asian",
    address: "220 Melbourne St, South Brisbane QLD 4101",
    images: ["06-hot-pot-chicken.jpeg"],
    description: "A warming, colourful hot-pot-style meal in South Brisbane. Add your notes about spice level, ingredients, portion size and your overall experience."
  },
  {
    id: "falala",
    number: "07",
    name: "FALALALAH",
    type: "Asian Fusion",
    address: "Shop 1/193 Melbourne St, South Brisbane QLD 4101",
    images: ["07-falala.jpeg"],
    description: "A South Brisbane restaurant photographed through a bowl of noodles, vegetables and skewers. Add your own review and the dishes you tried."
  },
  {
    id: "fresh-alo",
    number: "08",
    name: "FRESH ALO",
    type: "Cafe / Dessert",
    address: "391 Montague Rd, West End QLD 4101",
    images: ["08-fresh-alo.jpeg"],
    description: "A West End stop with a pastry-forward spread. Add your own notes about the pastries, flavours, presentation and the atmosphere of the place."
  },
  {
    id: "anita",
    number: "09",
    name: "ANITA GELATO",
    type: "Gelato",
    address: "111 Boundary St, West End QLD 4101",
    images: ["09-anita.jpeg"],
    description: "A colourful gelato stop on Boundary Street. The rotating flavours make it a fun place to revisit, and this visit became one of the sweetest stops in the collection."
  },
  {
    id: "cotti",
    number: "10",
    name: "COTTI",
    type: "Drinks / Cafe",
    address: "Shop 16, Level A, 91 Queen St, Brisbane City QLD 4000",
    images: ["10-cotti.jpeg"],
    description: "A drinks stop in Brisbane City. The Cotti app offers introductory drink vouchers, with more vouchers becoming available later. Most drinks can be selected with the vouchers, although prices can vary between drinks."
  },
  {
    id: "yahoo-kitchen",
    number: "11",
    name: "YAHOO KITCHEN",
    type: "Malaysian",
    address: "Westfield Mt Gravatt, 2001/2 Cnr Logan and Kessels Rd, Upper Mount Gravatt QLD 4122",
    images: ["11-yahoo-kitchen.jpeg"],
    description: "A Malaysian food stop at Westfield Mt Gravatt. Add your personal review here with the dishes you tried, flavours, atmosphere and what made the visit memorable."
  }
];

const list = document.getElementById("restaurant-list");

function mapsUrl(address) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
}

list.innerHTML = restaurants.map(place => `
  <article class="restaurant" id="${place.id}">
    <div class="restaurant-meta">
      <div class="restaurant-number">${place.number} /</div>

      <div>
        <h3>${place.name}</h3>
        <div class="restaurant-type">${place.type}</div>
      </div>

      <div class="restaurant-details">
        <strong>VISIT</strong>
        <span>${place.address}</span>

        <a class="map-link" href="${mapsUrl(place.address)}" target="_blank" rel="noopener">
          VIEW ON GOOGLE MAPS ↗
        </a>
      </div>
    </div>

    <div class="restaurant-body"${place.images.map(img => '<img src="' + img + '" alt="' + place.name + ' food photo" loading="lazy">').join("")}
      <div class="gallery">
        ${place.images.map(img => '<img src="' + img + '" alt="' + place.name + ' food photo" loading="lazy">').join("")}
      </div>

      <div class="restaurant-copy">
        <span class="tag">${place.type}</span>

        <p>${place.description}</p>

        <p class="edit-me">
          EDIT ME — Add your personal review, favourite dish,
          atmosphere notes and anything you noticed here.
        </p>
      </div>
    </div>
  </article>
`).join("");