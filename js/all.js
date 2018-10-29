// var a =10; b=20;

//   function hello(){
//       var a = 7;
//       var b= 9;
//       console.log(a);
//       console.log(b);
//   }
 
//   console.log(a);
//   console.log(b);  

//  hello();



//  console.log(res1);
//  var a =10;
//  var b =20;

//  function add(){
//      console.log(a);
//      console.log(b);

//         function innerAdd(){
//             var res =(a+b);
//         }

//         console.log(res);
//         innerAdd();
//  }
//  add();
//  var res1 =10;



// let x="hello";
// if(true){
//     x="world";
//     var y="hai";
//     console.log(x);
//     console.log(y);  
// }

// console.log(x);
// console.log(y);  

// function myFunction(){
//     document.getElementById('hello').setAttribute("style","background-color:green; color:red; text-align:center;text-transform:uppercase;text-decoration:line-through;width:1400px;height:50px;");
// }

var firstDiv = document.createElement('div');  
var heading = document.createElement('h1');
var content = document.createTextNode('hello world');

var x = firstDiv.appendChild(heading);
var res = x.appendChild(content);
console.log(res);

function myFunction(){
        document.getElementById('hello').appendChild(res);
    }





 