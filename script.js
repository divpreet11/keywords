//Void keyword

//Example-1
var x,y,z;    
x = void ( y = 50, z = 70 );  
console.log('x = ' + x + ' y = ' + y +' z = ' + z );  

//Example-2
void function () {
    console.log("Executed!");
  }();

// //Example-3
void function hello() {   
    var msg = function ()   
    {console.log("Welcome back!!")};   
    msg();   
 }(); 
