$(document).ready(function() {
  var blanks = ["sharp claws", "large spiders", "typos", "seats at IHOP"];

  blanks.forEach(function(blank) {
    var blankString = blank.split();
      console.log(blank);
      $("ul#things").append("<li>" + blankString + "</li>");
  });
});
