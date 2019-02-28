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
    randomBackground();
  });
})();

/**
 * This seems very hacky but after a few attempts this seems the tidiest way of
 * accomplishing random backgrounds without sacrificing
 * performance.
 * Whenever we need to add a new background we just add the HTML to this function as a
 * string literal and style as usual.
 * Then when it gets randomly added to the DOM the styles/animation will be applied.
 */
function randomBackground() {
  const grogDance = `<div class="background grogdance">
  <div class="hegoes left"></div>
  <div class="hegoes right"></div>
</div>`;

  const disk = `<div class="background disk"></div>`;

  const backgrounds = [grogDance, disk];
  //The number here should always match the number of backgrounds we have in this function.
  const randomVal = Math.floor(Math.random() * 2);

  const currentBackground = document.getElementById("background");

  currentBackground.innerHTML = backgrounds[randomVal];
}

randomBackground();
