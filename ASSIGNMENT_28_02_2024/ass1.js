/*[1]-----------*/
// function secondlargest(arr){
//     let max=arr[0];
//     let secondlar= "";
//     let third="";
//     for(let i=1;i<arr.length-1;i++){
//         if(arr[i]>max){
//             third=secondlar
//             secondlar=max;
//             max=arr[i];
//         }
//         else if (arr[i]>secondlar && arr[i]!==max){
//             third=secondlar
//             secondlar=arr[i];
//         }
//         else if (arr[i]>third&&arr[i]>secondlar&&arr[i]!==max){
//            third=arr[i]
//         }
//     }
//     return third
// }

// let a=[1,2,3,4,5,6,7,-1,-3,-2,-27];
// let out=secondlargest(a)
// console.log(out);
/*[2]--------------

function sortarr(arr){
    let temp="";
    for(let i=0;i<=arr.length;i++){
        for(let j=i+1;j<=arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
        }
        return arr
    }

let a=[1,2,3,4,5,6,7,-1,-3,-2,-27];
let out=sortarr(a)
console.log(out);-----*/
/*--[3]--------[4]------------------------
function removeDuplicates(str){
        return str.filter((item,
            index) => str.indexOf(item) === index)
        }
let a="HelloWorld"
let b=a.split("")

let out=removeDuplicates(b)
let c=out.join("")
console.log(c)
----------------------------*/
/*--[5]-------------------------*/
// let camelCase="praneethIsGoodBoy"
// let snakescase=camelCase.replace(/([a-z])([A-Z])/g,`$1_$2`).toLowerCase();
// console.log(snakescase)

/*--[6]------*/
// let snakeCase="praneeth_is_good_boy";
// let b=snakeCase.replace(/[^0-9a-zA-Z]+(.)/g,(snakeCase,chr)=> chr.toUpperCase());
// console.log(b)


/*--[7]----*/
// let a=[1,2,[[3,4],[5,6]]];
// let b=[]
// for(let i of a){
//     if(i.length>1){
//         for(let j of i){
//             if(j.length>1){
//                 for(let k of j){
//                     if(k.length>1){
//                         b.push(k)
//                     }
//                     else{
//                         b.push(k)
//                     }
//                 }

//             }
//             else{
//                 b.push(j) 
//             }
//         }
//     }
//     else{
//       b.push(i)
//     }
// }
// console.log(b)


// let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// let flatArray = nestedArray.reduce((accumulator, value) => accumulator.concat(value), []);
// console.log(flatArray);

/*[8]------*/
// let arr = [
//     34, 65, 67,
//        [
//           43, 76, 87, 23, 56, 7,
//           [
//              54, 7, 87, 23, 79, 994, 2
//           ],
//        54
//     ], 54, 4, 2
//  ];
// let greaternum=(arr,greatest="")=>{
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             return greaternum(arr[i],greatest)
//         }
//         if(arr[i]>greatest){
//          greatest=arr[i]
//         }
       
// }
// return greatest
// }
// console.log(greaternum(arr))

/*[9]-----*/
// function generatePattern(rows) {
//     let result = '';

//     for (let i = 1; i <= rows; i++) {
//         let num = i;
//         console.log(num)
//         for (let j = 1; j <= i; j++) {
//             result += num + ' ';
//             // console.log(result)
//             num += rows - j;
           
//         }
//         result += '\n';
//     }

//     return result
// }

// console.log(generatePattern(5));

/*[10]----*/

// let a = [1, 2, 3, 4, 5,6,7,8,9,2,3,5];
// for (let i = 2; i < a.length; i += 4) {
//     a.splice(i + 1, 0, 0);
// }
// console.log(a);

/*--[11]=---*/
// let str="abcdefghi"
// let rev=""
// for(let i=str.length-1;i>=0;i--){
//     rev +=str[i]
// }
// console.log(rev)

/*[12]-----*/

// let num=6
//     let n1=0;
//     let n2=1;
//     for(let i=0;i<a;i++){
//     console.log(n1)
//    n3= n1+n2;
//    n1=n2;
//    n2=n3
// }

/*[13]----*/
// function deepClone(obj) {
//     return JSON.parse(JSON.stringify(obj));
//   }
  
  
//   const originalObject = {
//     name: 'John',
//     age: 30,
//     address: {
//       city: 'New York',
//       zip: '10001'
//     },
//     hobbies: ['reading', 'traveling']
//   };
  
//   const clonedObject = deepClone(originalObject);
  
//   console.log(clonedObject);
//   console.log(originalObject === clonedObject); // Should print false
//   console.log(originalObject.address === clonedObject.address); // Should print false
//   console.log(originalObject.hobbies === clonedObject.hobbies); // Should print false

/*-[14]----*/
// let arr="ajdsgddgnadjdh"
// let b=arr.split("")
// let count={}
// b.forEach(ele=>{
//     if(count[ele]){
//     count[ele] +=1
//     }
//     else{
//         count[ele]=1
//     }
// }
// );
// console.log(count)

/*---15----*/

// let a=["abc","def","ghi"]
// let b=[]
// for(let i of a){
//     let spi=i.split("")
    
//     let c=spi[0].toUpperCase()+i.substring(1)
//     b.push(c)
// }
// console.log(b)

/*[16]----*/
// const studentsArray = [
//     { name: 'Alice', marks: 85 },
//     { name: 'Bob', marks: 92 },
//     { name: 'Charlie', marks: 78 },
//   ];
  
//   let totalMarks = 0;
  
//   for (const i of studentsArray) {
//     if (typeof i.marks === 'number') {
//       totalMarks += i.marks;
//     }
//   }
  
//   console.log('Total Marks:', totalMarks);
  
/*[20]---*/
let array1 = [1, 2, 3, 4, 5];
let array2 = [2, 3, 4,6,7,];

let mergedArray = array1.concat(array2).filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(mergedArray);








  

















