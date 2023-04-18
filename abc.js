// function getCountOfDigits(str) {
//     return str.replace(/[^0-9]/g, '').length;
//   }
  
//   console.log(getCountOfDigits('12hello34')); 

// function test(arr){
//     let num=[];
//     let char=[];

//     for(var i=0;i<arr.length;i++){
//         if(arr[i]%1===0){
//             num.push(arr[i])
            
//         }
//         else{
//             char.push(arr[i])
//         }
//     }
//     console.log(num);
//     console.log(char);
// }
// arr=[1,2,'a',3,4,5,6,'b']
// test(arr)

var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);