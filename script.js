

// event listeners
function myFunction() {
  onEvent("button1", "click", function( ) {
    setScreen("thetomb");
  });
  onEvent("image2", "click", function( ) {
    setScreen("firescreen");
  });
  onEvent("image4", "click", function( ) {
    setScreen("earthscreen");
  });
  onEvent("image3", "click", function( ) {
    setScreen("waterscreen");
  });
  onEvent("image6", "click", function( ) {
    setScreen("airscreen");
  });
  onEvent("button2", "click", function( ) {
    setScreen("homescreen");
  });
  onEvent("button6", "click", function( ) {
    setScreen("thetomb");
  });
  onEvent("button4", "click", function( ) {
    setScreen("thetomb");
  });
  onEvent("button3", "click", function( ) {
    setScreen("thetomb");
  });
  onEvent("button5", "click", function( ) {
    setScreen("thetomb");
  });
  onEvent("button7", "click", function( ) {
    setScreen("alienfight");
  });
}
myFunction();
onEvent("image5", "mouseover", function( ) {
  setPosition("image5", 100, 130, randomNumber(10, 150), randomNumber(10, 150));
});
onEvent("image8", "mouseover", function( ) {
  setPosition("image8", 100, 150, randomNumber(150, 10), randomNumber(150, 10));
});
onEvent("button9", "click", function( ) {
  setScreen("firescreen");
});
onEvent("image7", "mouseover", function( ) {
  setPosition("image7", 100, 180, randomNumber(25, 180), randomNumber(180, 25));
});
var Lives = 6;
onEvent("alienfight", "click", function() {
  Lives = Lives - 1;
  setText("Lives#", Lives);
});
var score = 0;
function addscore() {
  score = score + 1;
  setText("Score#", score);
}
onEvent("image5", "click", function( ) {
  addscore();
});
onEvent("image7", "click", function( ) {
  addscore();
});
onEvent("button8", "click", function( ) {
  setScreen("food");
});
onEvent("image8", "click", function( ) {
  addscore();
});
if (getText("Lives#") == 0) {
  setScreen("aliendefeat");
}
if (getText("Score#") == 15) {
  hideElement("image5");
  hideElement("image8");
  hideElement("image7");
  setScreen("youwin");
}