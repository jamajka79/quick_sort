// function quick_Sort(origArray) {
// 	if (origArray.length <= 1) { 
// 		return origArray;
// 	} else {

// 		var left = [];
// 		var right = [];
// 		var newArray = [];
// 		var pivot = origArray.pop();
// 		var length = origArray.length;

// 		for (var i = 0; i < length; i++) {
// 			if (origArray[i] <= pivot) {
// 				left.push(origArray[i]);
// 			} else {
// 				right.push(origArray[i]);
// 			}
// 		}

// 		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
// 	}
// }

// var myArray = [15, 3, -7, 8, 33, -4, 11, 42, 17, -9, 2, 66, 23];

// console.log("Original array: " + myArray);
// var sortedArray = quick_Sort(myArray);
// console.log("Sorted array: " + sortedArray);

//wersja krótsza://

function quick_Sort(origArray) {
	var temp = 0;
	for (var i = 0; i < origArray.length; i++) {
	for (var j = 0; j < origArray.length; j++) {
	if (origArray[i] < origArray[j]){
	temp = origArray[i];
	origArray[i] = origArray[j];
	origArray[j] = temp;
	
	      }
	   }
	}
	return origArray;
	}
	
	var myArray = [15, 3, -7, 8, 33, -4, 11, 42, 17, -9, 2, 66, 23];
	
	console.log("Original array: " + myArray);
	console.log(quick_Sort(myArray));