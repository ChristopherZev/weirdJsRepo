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

/* Scope Chain testing

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
