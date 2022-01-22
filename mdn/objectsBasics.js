// Object basics1
const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
}

// Put your code here
console.log(cat.name);
console.log(cat.greeting());
let color="black";
cat.color=color
console.log(cat.color)

// objects basics2
const favBand={
  name:"The Beatles",
  nationality:"UK",
  genre:"rock",
  members:4,
  formed:1960,
  split: 1970,
  albums:[
        {name:"let it be", released:"1970"},
        {name:"abbey road", released:"1969"},
        {name:"the beatles", released:"1968"}]
};

let bandInfo;
bandInfo=`My fav band is ${favBand.name}. They are from ${favBand.nationality} and were active from ${favBand.formed}-${favBand.split}. The type of music they sung was ${favBand.genre}. 
          They have released ${favBand.albums[0].name} on ${favBand.albums[0].released}. `
console.log(bandInfo)


// ------------------
// objects basic 4
// update task one with new greeting.
const cat1 = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  }
}

const cat2 = {
  name : 'Simmons',
  breed : "exotic shorthair",
  color : 'grey',
  greeting: function() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  }
}

cat1.greeting();
cat2.greeting();

// -----------------
// objects basic 4
// update task one with new greeting.
// updated to constructor to make it reusable for new instances .

function Cat1 (name){
  this.name =name;
  this.breed = 'Cymric';
  this.color = 'white';
  this.greeting= function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}
// Bertie cat
const Bertie= new Cat1 ("Bertie");
Bertie.name;
Bertie.breed;
Bertie.color;
Bertie.greeting;

// cat2
const Cat2= new Cat1 ("Simmons");
Cat2.name;
Cat2.breed="exotic shorthair";
Cat2.color="yellow";
Cat2.greeting;

console.log(Bertie.greeting())
console.log(Cat2.greeting())
