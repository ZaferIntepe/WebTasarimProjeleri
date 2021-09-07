//  function getData(Data) { // Promise Objesi Döndüren Fonsiyonumuz Olumlu Sonu.
//      return new Promise(function(resolve, reject) {
//          setTimeout(function() {
//              resolve("Olumlu Sonuç");
//          }, 10000)
//      });
//  }
//  console.log(getData("Merhaba"));
///////////////////////////////////
// function getData(Data) { // Promise Objesi Döndüren Fonsiyonumuz Olumsuz Sonuç
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             reject("Olumlumsuz Sonuç");
//         }, 10000)
//     });
// }
// console.log(getData("Merhaba"));
///////////////////////////////////
// function getData(Data) { // Promise Objesi Döndüren Fonsiyonumuz
//     return new Promise(function(reolve, reject) {
//         setTimeout(function() {
//             reolve("Olumlu Sonuç");
//         }, 10000)
//     });
// }
// getData("Merhaba").then(function(response) {
//     console.log(response);
// });
///////////////////////////////////
// function getData(Data) { // Promise Objesi Döndüren Fonsiyonumuz
//     return new Promise(function(reolve, reject) {
//         setTimeout(function() {
//             reject("Olumlumsuz Sonuç");
//         }, 10000)
//     });
// }
// getData("Merhaba").catch(function(err) {
//     console.log(err);
// });
//////////////////Örnek/////////////
// function getData(data) {
//     return new Promise(function(resolve, rejet) {
//         setTimeout(function() {
//             if (typeof data === "string") {
//                 // Olumlu
//                 resolve(data)
//             } else {
//                 rejet(new Error("Lütfen String Bir Değer Giriniz."));
//             }
//         }, 5000);
//     });
// }
// getData(24).then(function(response) {
//     console.log("Gelen Değer: " + response);
// }).catch(function(err) {
//     console.error(err);
// });
//////////////////////////////////////////
// function getData(data) {
//     return new Promise(function(resolve, rejet) {
//         setTimeout(function() {
//             if (typeof data === "string") {
//                 // Olumlu
//                 resolve(data)
//             } else {
//                 rejet(new Error("Lütfen String Bir Değer Giriniz."));
//             }
//         }, 5000);
//     });
// }
// getData(24)
//     .then(response => console.log("Gelen Değer: " + response))
//     .catch(err => console.error(err));
//////////////////////////////////////////
function addTwo(number) {
	return new Promise((resolve , reject) => {
		setTimeout(function(){
			if (typeof number === "number") {
				resolve(number + 2);
			}
			else{
				reject(new Error("Lütfen Bir Sayı Giriniz..."));
			}
		} , 3000);
	});
}
addTwo("10")
.then(response => {
	console.log(response);
	return response + 2;
}).then(response2 => 
	console.log(response2))
.catch(err => console.error(err));
// 1 tane catch Kullanabiliriz sadece 