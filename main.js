// PROBLEM 1
// var letterCapitalize = function(string) {
// 	var stringArray = string.split(" ");
// 	for (var i=0; i<stringArray.length; i++) {
// 	stringArray[i] = stringArray[i].charAt(0).toUpperCase()+stringArray[i].slice(1);
// 	console.log(stringArray[i].charAt(0).toUpperCase());
// 	console.log(stringArray[i].slice(1));
// 	};
// 	return stringArray.join(" ");
// };
// console.log(letterCapitalize("how are you"));

// PROBLEM 2
var WordCount = function(string) {
	var stringArray = string.split(" ");
	return stringArray.length;
};
console.log(WordCount("this exercise is bananas!"));