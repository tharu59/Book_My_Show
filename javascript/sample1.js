// strings-non-primitive dt

// var data ="hey tharunkumar, Welcome to JAVASCRIPT";

// console.log("DATA:",data);

// console.log("lower case: ",data.toLocaleLowerCase());
// console.log("upper case:",data.toUpperCase());

// // slice
// console.log("slice :",data.slice(0,7));//(index,index-1) && index always starts from 0

// // length
// console.log("length : ",data.length);

// // replace
// console.log("replace: ",data.replace("hey","hai"));

// // includes
// console.log(data.includes("to"));


// //  string --> int
// var var1="5159";
// console.log(var1);
// console.log(parseInt(var1));

// // int --> string
// var var2= 9441;
// console.log(var2);
// console.log(var2.toString());
// console.log(var2.toLocaleString());

// // split operator
// var demo ="good morning";
// console.log(demo);
// console.log(demo.split(" "));

// objects
// var obj1 = {
//     name : "tharun",
//     age: 21
// };
// console.log(obj1);
// console.log(obj1.name);
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

// adding new values to object
// obj1.newkey = "designation";
// obj1.value = "SE";
// console.log(obj1);

// arrays (map, find, filter, reduce)
// promises
// async & await
// Try & catch
// obj with multiple concepts
// function (normal/named func, anonymous func, arrow func)
// classes

// ------------------------

// Array and 

// var num1 =10;
// var num2 = 2;
// var sum = num1 + num2;
// document.write(sum);
// ----------------------------------------
// 1. Named Function
// 2. Anonymous Function
// 3. Arrow Function

// const gfg = () => { 
// 	console.log( "coding" );
// } 




// Arrow with parameters----------------
// const gfg = ( x, y, z ) => { 
// 	document.write( x + y + z ) 
// } 

// gfg( 10, 20, 30 ); 


// Array methodology/Methods-------------------------------
// var array =[1, 2, 3, 4, 5];
// document.write("current array : " + array) + "<br/> ";

// 1.map
// var newArray = array.map((data) => data+2);
// document.write("<br/>  newarray => withmap =>  ", newArray);


// 2.Filter 

// const newArray2 = array.filter((data) => data<= 3 );
// document.write("<br/> filter =>", newArray2);

// 3.Find
// var newArray3 = array.find((data)=> data<2 );
// document.write("<br> find: =>",newArray3); 

// 4.reduce
// var newArray4 = array.reduce((data, index)=> {
//     return data+index;
// })
// document.write("<br/>",newArray4);

// var totalSum = array.reduce((accumulation, currentValue)=> {
//     return accumulation + currentValue;
// }, 0)
// document.write("<br/>", totalSum);
// example for this is cart in flipkart or amazon i.e., total
// flipkart cart example-----------------------
// var FlipkartCart = [
//     {
//         price : 200,
//         quantity : 2
//     },
//     {
//         price : 400,
//         quantity : 1
//     },
//     {
//         price : 100,
//         quantity : 4
//     },
//     {
//         price : 1200,
//         quantity : 2
//     },
//     {
//         price : 500,
//         quantity : 2
//     }
// ]

// var totalCost = FlipkartCart.reduce((accumulator, currentValue) =>{
//     return accumulator + currentValue.price * currentValue.quantity;
// }, 0)
// document.write(totalCost);

// promises----------------------------
    // syntax:  var myPromise = new Promise(() => {})
    // syntax:  var myPromise = new Promise(function () {})

// var myPromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//             resolve("success");
//         }, 7000);
       
//         setTimeout(function(){
//             reject("Error occured");
//         },5000)
//     });

// myPromise
//     .then((data) => {document.write(data)})
//     .catch((err) => {document.write(err)});

// Async-Await in js-----------------------
