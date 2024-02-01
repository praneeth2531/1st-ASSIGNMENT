/*
let a="5"
let b=Number(a)
console.log(typeof(b))
console.log(b)
...*/

let camelCaseString="GreeksForGeeks"
console.log(camelCaseString.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase());


/*
function toFindSmallest(arr){
let smallest= Infinity;
let secondSmallest= Infinity;
for( let i=0; i<arr.length; i++){
    if(arr[i]<smallest){
        secondSmallest=smallest;
        smallest=arr[i]
    }
    else if(arr[i]< secondSmallest && arr[i] !== smallest){
        secondSmallest=arr[i];
    }
}
return secondSmallest;

}

const numbers =[1,2,3,4,5,6,7,8,9];
const secondSmallest=toFindSmallest(numbers);
console.log("second smallest number in array:",secondSmallest);

/*------

function findSecondSmallest(arr) {

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            // Current element is smaller than the smallest
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            // Current element is smaller than the second smallest
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

// Example usage
let numbers = [5, 2, 8, 1, 6];
let secondSmallest = findSecondSmallest(numbers);
console.log("Second Smallest Number:", secondSmallest);
...*/

/*
let arr=[1,2,3,4,5,6,7,8,9];
for(let i =0; i<arr.length; i++){
    console.log(arr[i]);
}

*/
let a=2;
for(i=1; i<=10; i++){
    let b= a * i;
    console.log(`${a} X ${i} =${b}`);
}
