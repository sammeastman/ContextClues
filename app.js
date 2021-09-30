$(document).ready(function () {
  var friends = ["Zack", "Eli", "Will", "Eileen", "Eve"];
  var locationName = [
    "top of Vulcan", //i mean like on his head, let's goooooO
    "Marty's patio",
    "the Shampoo Aisle",
    "Master P's house",
    "Red Mountain Express", // the most dangerous place on earth
    "the Cookout Drive-thru", // ***5 hours later***
    "Shelby County Fair",
    "the middle of Kansas", //can't think of a worse place to be
    "What's On 2nd", // i actually like this place
    "the Guitar Center lessons room", //ok this might be a little worse honestly
  ];
  var weapons = [
    "Inflatable screwdriver", //inflatable? absolutely terrifying
    "novelty hammerhead shark doll", //feeding off of the shelby county state fair location
    "iron drumsticks", 
    "14 bowling balls", // probably easy to avoid tbh
    "flamethrower Axe", //do not get within 100 feet of anyone weilding this!
    "poisonous spork", 
    "fake bug that explodes", //it can be literally any bug and there are billions of bugs
    "compact disc blade",
    "stingray bees", //yes flying stingrays with unbelievable agility and stealth, possibly robotic
    "literal lava cake", //but how would you transport it?
    "cluster scissors", //don't really know what i mean by this but i'm keeping it
    "hyperspeed wine cork", // mazel tov!!!!!!!!
    "million pound book",
    "lazer lime",
    "invisible quicksand", //easily the scariest one 
    "supersonic hatchet", //purely psychological and also very sharp
    "David Carrigans Tesla", 
    "Shipt card blade", //still tax exempt
    "very normal gun", //gotta balance it out...
    "spykids 2", //was going to be like, "spykids 2 watch" but the movie itself as a weapon? dang
  ];

  //creating the cascading list of accusations and making a for loop so that they increase to 100

  for (var i = 1; i <= 100; i++) {
    var $h3 = $("<h3>Accusation " + i + "</h3>"); 
    $($h3).appendTo("main");
    $($h3).click(wildAlert(i)); //jquery won me over!!!!!
  }

  //creating the alert, defining what the alert will say, making it clickable 

  function wildAlert(i) {
    var friend = friends[i % 5];
    var location = locationName[i % 10];
    var weapon = weapons[i % 20];
    function doubleTrouble() {
      alert(
        "Accusation " +
          i +
          ": I saw " +
          friend +
          " with the " +
          weapon +
          " in " +
          location +
          "!"
      );
    }
    return doubleTrouble;
  }
});
