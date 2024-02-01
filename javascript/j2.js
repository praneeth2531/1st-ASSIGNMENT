/* to check number is postive or negetive or zero....
let num=-1;
if(num>0){
    console.log("the number is postive")
}
else if(num<0)
{
    console.log("the number is -ve");
}
else
{
    console.log("the number is zero")
}

---------------------------------------------------------------*/

/*--(2) to check if a year is leap year------
 let year=1800
 // leap year if perfectly divisible by 400
if (year % 400 == 0) {
    console.log("year is a leap year.");
 }
 // not a leap year if divisible by 100
 // but not divisible by 400
 else if (year % 100 == 0) {
    console.log("year is not a leap year.");
 }
 // leap year if not divisible by 100
 // but divisible by 4
 else if (year % 4 == 0) {
    console.log("year is a leap year.");
 }
 // all other years are not leap years
 else {
    console.log("year is not a leap year.");
 }
 -------------------------------------------*/
 /*----to find largest in 3 numbers---
 let a=10;
 let b=36;
 let c=5;

if(a>=b && a>=c){
    console.log("a is largest");
}
else if(b>=a && b>=c){
    console.log("b is largest"); 
}
else{
    console.log("c is largest");
}
-------------------------------------------*/


//---using switch statement---


let trafficLightColor = "green";

switch (trafficLightColor) {
  case "red":
    console.log("Stop!The color is red.");
    break;
  case "yellow":
    console.log("slow down! The color  is yellow");
    break;
  case "green":
    console.log("Go! The color is green");
    break;
  default:
    console.log("Invalid traffic light color. Please check the light.");
}