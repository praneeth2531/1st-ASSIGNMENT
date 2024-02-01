

/*--- largest number in array

let arr = [1, 345, 567, 2345, 32, 36, 40, 34, 25];
var max=arr[0];
for(let i=1; i<arr.length; i++)
{
    if (arr[i]>max) {
        max=arr[i];
    }
   }
  console.log(max);  ---*/    


  function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  // Example usage:
  const array = [5, 2, 10, 8, 3];
  const secondLargest = findSecondLargest(array);
  console.log("Second largest element:", secondLargest);
  

const arr = [12, 35, 10, 35, 10, 34, 1]; 
console.log(findSecondLargest(arr));