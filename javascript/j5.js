/*--
function findLargest(arr){
    let largest=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
       
    }
    return largest;
}
let arr=[2,3,4,5,6,7,8];
let largest=findLargest(arr);
console.log("largest in an array:",largest);
----*/


    

// function that check str is palindrome or not 
function check_Palindrome(str){
    let j=str.length-1;
    for(let i=0 ; i<j/2; i++){
        let x=str[i];
        let y=str[j-i];
        if(x!=y){
            return false;
        }
    }
    return true;
}
function is_palindrome(str){
    let ans=check_Palindrome(str);
    if(ans==true){
        console.log("is a palindrome");
    }
    else{
        console.log("is not a palindrome");
        
    }
}
let text="cardash";
is_palindrome(text);

