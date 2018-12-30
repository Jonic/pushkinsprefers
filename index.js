(function randomColour() {
  const links = document.querySelectorAll(".catalog_listing li");
  let classes = [
    "catalog_listing_lime",
    "catalog_listing_pink",
    "catalog_listing_pink_two"
  ];

  for (i = 0; i < links.length; i++) {
    //Generate random number
    let randomVal = Math.floor(Math.random() * 3);

    //Replace default class with random class from array
    links[i].classList.replace("catalog_listing_color", classes[randomVal]);
  }
})();

(function interactWithPushkins() {
  const push = document.getElementById("pushkins_animation");
  push.addEventListener("click", function() {
    console.log(
      "You have discovered the secret pushkins prod functionality. Come back for more later."
    );
  });
  //console.log(push);
})();
