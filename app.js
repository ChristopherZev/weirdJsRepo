/* Variable Enviroments

function b(){
  var myVar;
  console.log(myVar);
}
function a(){
  var myVar = 2;
  console.log(myVar);
  b();
}
console.log(myVar);
var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
/* un,1,2,un,1*/
/*-----------------------------------------------------------*/
/* Scope Chain testing Outer reference

function a(){

  function b(){
    console.log(myVar);

    function c(){
      console.log(myVar2);
    }
    c();
  }
  b();
}

var myVar = 1;
var myVar2 = 99;
a();
*/
/*-----------------------------------------------------------*/
/*Async Example, Event Queue */
//long running function
/*function wait3sec(){
  var ms = 3000 + new Date().getTime();
  while(new Date() < ms){}
  console.log('finished function');
}
function clickHandler() {
  console.log('click event!');
}
//listen for the click event
document.addEventListener('click',clickHandler);

wait3sec();
console.log('finished exeution');*/

/*-----------------------------------------------------------*/
/*Operators Coercion example */
/*var a = 1 + '2';
console.log(a);

console.log(1<2<3);
//vs   both are true
console.log(3<2<1);

var a = 0;
var b = false;
//With == it will be equal, with === it will not
if(a===b){
  console.log('They are equal!');
} else {
  console.log('Nope, not equal');
}*/
/*-----------------------------------------------------------*/
/*Existance and booleans example
//Coercion to check for existance
var a;
//goes to internet and looks for a value
a = 0;

if(a || a===0){
  console.log('Something is there');
}*/
/*-----------------------------------------------------------*/
/*Default values example
function greet(name) {
  // in the or name is set to undefined by execution context, name is
  //Then coerece to false, the other side of the or the "string" is coereced
  // to true leading name = true, So if a parameter is passed like greet('Chris')
  // then it will output the parameter, if not the default value
  name = name || '<Default value,Name here>'
  console.log('Hello ' + name);
}
greet('Chris');
greet();*/
/*-----------------------------------------------------------*/
/*Lib and framework collision example
console.log(libName);*/

/*-----------------------------------------------------------*/
/*Object and prop example
var person = new Object();
person["firstname"] = "Chris";
person["lastname"] = "Zev";

var firstNameProp = "firstname";
console.log(person);
console.log(person[firstNameProp]);

console.log(person.firstname);
console.log(person.lastname);

person.food = new Object();
person.food.country = "Japan";
person.food.type = "Fish";
person.food.name = "Sushi";

//You can call like:
console.log(person.food.country);
console.log(person["food"]["country"]);*/

/*-----------------------------------------------------------*/
/*Obj Obj literal example

var person = {
  firstname: "Chris",
  lastname: "Zev",
  food: {
    country:"Japan",
    type:"Fish",
    name:"Sushi"
  }
};

function greet(person) {
  console.log("Hi "+ person.firstname);
}
console.log(person);
greet(person);
//Adding an object literal at time of calling function
//It displays Hi John
greet({
  firstname: "John",
  lastname: "Smith"
});
//Add a new property to the person via dot notation and use it
//to define as an object using obj literal
person.address = {
  street: "Lincoln Street",
  housenum: "123"
}
console.log(person.address);
console.log(person.address.housenum);*/

/*-----------------------------------------------------------*/
/*Fake namespaces in JS example*/
var greet = "Hello";
var greet = "Hola";
console.log(greet);//If this line were run, Hola would display due to collision

//containing objects, for use to avoid collision
//Might want to set the english containing object to have an object in it
// to add more layers to the container object
var english = {
  greetings: {
    basic: "Hello Basic"
  }

};
var spanish = {};

english.greet = "Hello";
spanish.greet = "Hola";

console.log(english);
console.log(english.greet);

console.log(english.greetings);
console.log(english.greetings.basic);
