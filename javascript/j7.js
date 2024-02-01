let  str="P C Naga Vardhan Reddy"
let arr2=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let arr1=str.split("")
let empty=[]
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if(arr1[i]==arr2[j]){
        empty.push(arr1[i])
        }
    }
}
console.log(empty)



console.log(empty.push(