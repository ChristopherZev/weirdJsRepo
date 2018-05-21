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
/*Async Exmaple, Event Queue */
//long running function
function wait3sec(){
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
console.log('finished exeution');
