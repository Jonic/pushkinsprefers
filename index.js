(function randomColour() {
  const catalog = document.getElementById("catalog");
  const links = catalog.getElementsByTagName("ul");

  let classes = [
    "catalog_listing_lime",
    "catalog_listing_pink",
    "catalog_listing_pink_two"
  ];

  //Generate random number
  let randomVal = Math.floor(Math.random() * 2);

  for (i = 0; i < links.length; i++) {
    //Replace default class with random class from array
    links[i].classList.replace("catalog_listing", classes[randomVal]);
  }
})();
