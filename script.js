function createArray(start, end) {
    var array = [];
    for (var i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }
  
  var arr = createArray(2, 9);
  console.log(arr); // [2,3,4,5,6,7,8,9]
  //2
  function printNumbers(a, b) {
  var result = [];
  for (var i = a; i <= b; i++) {
    for (var j = 0; j < i - a + 1; j++) {
      result.push(i);
    }
  }
  console.log(result.join(','));
}

printNumbers(1, 3);
//3
function randArray(k) {
  var array = [];
  for (var i = 0; i < k; i++) {
    var randomNumber = Math.floor(Math.random() * 500) + 1;
    array.push(randomNumber);
  }
  return array;
}

var result = randArray(5);
console.log(result);  // [399,310,232,379,40]
//4
function compact(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

var originalArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
var compactArray = compact(originalArray);
console.log(compactArray); // [1, 2, 3, 4]
//5
function separateByType(arr) {
  var numberArray = [];
  var stringArray = [];
  var arrayArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      numberArray.push(arr[i]);
    } else if (typeof arr[i] === 'string') {
      stringArray.push(arr[i]);
    } else if (Array.isArray(arr[i])) {
      arrayArray.push(arr[i]);
    }
  }

  console.log('Number Array:', numberArray);
  console.log('String Array:', stringArray);
  console.log('Array Array:', arrayArray);
}

var originalArray = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
separateByType(originalArray);
//6
function calc(a, b, op) {
  var result;

  if (op === 1) {
    result = a - b;
  } else if (op === 2) {
    result = a * b;
  } else if (op === 3) {
    result = a / b;
  } else {
    result = a + b;
  }

  return result;
}

console.log(calc(5, 3, 1));  // 2 (віднімання)
console.log(calc(5, 3, 2));  // 15 (добуток)
console.log(calc(6, 2, 3));  // 3 (ділення)
console.log(calc(5, 3, 4));  // 8 (додавання)
//7
function findUnique(arr) {
  var uniqueElements = new Set(arr);
  return uniqueElements.size === arr.length;
}

console.log(findUnique([1, 2, 3, 4, 5]));  // true
console.log(findUnique([1, 2, 2, 3, 4]));  // false
console.log(findUnique(["a", "b", "c", "d"]));  // true
console.log(findUnique(["a", "b", "c", "c", "d"]));  // false
