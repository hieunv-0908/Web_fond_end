let arr1 = ["", false, 0, 5, 10, "Hello world"];
let arr2 = ["", false, 0, undefined, null];
let arr3 = [NaN, "test", 4];
let arr4 = ["JavaScript", 0, null, true, 7, " "];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i]) {

//     } else {
//         arr1.splice(i, 1);
//     }

// }
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i]) {

//     } else {
//         arr2.splice(i, 1);
//     }

// }
// for (let i = 0; i < arr3.length; i++) {
//     if (arr3[i]) {

//     } else {
//         arr3.splice(i, 1);
//     }

// }
// for (let i = 0; i < arr4.length; i++) {
//     if (arr4[i]) {

//     } else {
//         arr4.splice(i, 1);
//     }

// }

arr1 = arr1.filter(Boolean);
arr2 = arr2.filter(Boolean);
arr3 = arr3.filter(Boolean);
arr4 = arr4.filter(Boolean);


alert(arr1);
alert(arr2);
alert(arr3);
alert(arr4);
