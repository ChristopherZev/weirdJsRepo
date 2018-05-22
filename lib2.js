//This line would collide with the first librabry and set the value to items
//of lib 2.
//var libName = 'Lib2';


//This line set the object or set of functions that define the library or framework
//checking global name space of gloabl object to see if there something of the
//same name so it does not collide or override it
window.libName = window.libName || 'Lib 2';
