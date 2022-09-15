// // implementation of toUpperCase()

// // const myUpperCase = (str) => {
// //   let result = "";
// //   for (let i = 0; i < str.length; i++) {
// //     const code = str.charCodeAt(i);
// //     if (code >= 97 && code <= 122) {
// //       result += String.fromCharCode(code - 32);
// //     } else {
// //       result += str[i];
// //     }
// //   }
// //   return result;
// // };

// // const capitalize = (str) => {
// //     if (str === "") return "";
    
// //     str = str.split(" ");

// //     for (let i = 0; i < str.length; i++) {
// //         str[i] = myUpperCase(str[i][0]) + str[i].slice(1).toLowerCase();
// //     }

// //     return str.join(" ");
// // };


// console.log(capitalize("hello world"));
// console.log(capitalize("hello world, i am a javascript developer"));
// console.log(capitalize("a FiRSt LiTTlE TESt"));