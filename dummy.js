/**
 * Created by dhiraj.kumar on 7/04/2017.
 */

"use strict";

var base =1000;

var base =300;
function getSalary(addBonus){
    var bonus= 500;
    var bonus= 500;
  
    return base + bonus;
}

console.log(getSalary());

var baseobj={};


    var version ='version1';
    baseobj.version = version;


console.log(version);
console.log(baseobj.version);

module.exports = baseobj

function doset(i){
    setTimeout(() => {
        console.log(i)},0);
}
//
// var sum =[];
// for(var i = 0;i<10;i++){
//   //doset(i);
// function(j){
//     sum.push(function(){
//         return j;
//     }) 
// }(i)
//   
//    
// }

//console.log(sum[1](),sum[2](),sum[3]());

var person ={
    name :'dhiraj',
    getName : function(){
        console.log(this.name);
       
     
       return  () =>{
           return this.name
       };
    }
}

console.log(person.getName()());