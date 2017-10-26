//command a + command + opt + l => clean up


function AnimalMaker(name) {
  return {
    speak: function() {
      console.log('my name is ', name);
    },
    name: name
  };
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];

// for(var i = 0; i < animalNames.length; i++) {
//   farm[i] = AnimalMaker(animalNames[i]);
// }

for(var i = 0; i < animalNames.length; i++) {
  var animal = AnimalMaker(animalNames[i]);
  farm.push(animal);
}



// farm.push(AnimalMaker(animalNames[i]));

for(var j = 0; j < farm.length; j++) {
  farm[i].speak();
}