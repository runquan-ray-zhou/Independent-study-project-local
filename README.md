# Independent Learning Project - Reduce



## Introduction

`Reduce` is an native `Array Method` and a `Higher Order Function` in Javascript. As an array method, when called on an array, reduce iterates over the elements in the array and reduce them into a single value, hence the name 'reduce'.  Every time it iterates over an element in the array, a callback function is called, and a variety of operations are executed on the parameters to get the desired result.  The reduce method is useful because of its versatility and ability to reduce the amount of coding. 

## Method Description

### I. Syntax

Part of the 'Higher Order Function' class, the reduce method takes in two parameters, a `callback function` and an `initialValue`.

```js

array.reduce(callbackFn, initialValue)

```

### II. Parameters

```js

array.reduce((accumulator, currentValue, currentIndex, array), initialValue)

```
<br> 1. `initialValue`. This is `optional`.  If supplied, its value will be assigned to the first `accumulator` value in the callback function.  If not supplied, the first element of the array will be assigned as the initial `accumulator` parameter.

- The `callback function` have 4 parameters.

 <br> 2. `accumulator` is the return value from the previous iteration. This is `required`.
 <br> 3. `currentValue` is the current element reduce is iterating over on. This is `required`.
 <br> 4. `currentIndex` is the index of the element reduce is iterating over on. This is `optional`.
 <br> 5. `array` is the current array. This is `optional`.

- These five values make up the parameters to the reduce method.

### III. The Reducing Process

The reduce method has many use cases, and one common application is to obtain the total sum of all elements in an array.  The following describes this process.

![example2](https://blog.khanacademy.org/wp-content/uploads/engblog/lets-reduce/visualization.gif)

1. The `initialValue` is declared and assigned the value of `0`.

```js
const initialValue = 0;
```

2. An array of numbers is initialized and assigned to the variable `values`.

```js
const values = [3, 5, 1, 4, 2];
```
3. The `reduce` method is initialized and applied on the array `values`.  In the following line of code, `reduce` has 2 parameters: `callbackFn` and the `initialValue`.  This `callbackFn` has 2 parameters: `accumulator` represented as `acc`, and `currentValue` represented as `item`.  The return from the `callbackFn` is the result of adding the `accumulator` to the `currentValue`.

```js
const total = values.reduce((acc, item) => { return acc + item }, initialValue);
```

4. On the first iteration of the array, because `initialValue` was assigned the value of 0, `acc` is assigned the value of 0.  `item` is assigned the value of the first element in the array, which is the number 3.  The `callbackFn` is then called, and 0 (the current `accumulator` value) is added to 3(the current element), resulting in 3.  This value will be return as the `accumulator` or `acc` for the next iteration.

```js
values.reduce((acc, item) => { return 0 + 3 }, 0); //Return 3
```

5. On the next iteration of the array, `acc` will be assigned the returned value from the previous iteration, which is the number 3. The callback function is then called, and 3 (the current `accumulator` value) is added to 5(the current element), resulting in 8.  This value will be return as the `accumulator` or `acc` for the next iteration.

```js       
values.reduce((acc, item) => { return 3 + 5 }, 0); //Return 8
```

6. Repeat step 5 until all elements of the `values` array have been iterated over on.  The final value returned will be assigned to the variable `total`, which is the number 15.

```js       
values.reduce((acc, item) => { return 8 + 1 }, 0); //Return 9
//Next iteration
values.reduce((acc, item) => { return 9 + 4 }, 0); //Return 13
//Next iteration
values.reduce((acc, item) => { return 13 + 2 }, 0); //Return 15
//All elements have been called on. 
```

7. Final return value returned from the reduce method is assigned to the variable `total`.

```js
const total = 15
```

## Big O Evaluation

### Time Complexity

The time complexity of the reduce method is linear, `O(n)`, where `n` is the length of the array. For each element in the array, the method iterates over it only once. The reduce method is similar to a `for...of` loop. As the size of `n` increases, representing the length of the array, the number of operations also increases at the same rate, resulting in a linear relationship.

```js
function reduce(array, callbackFn, initialValue) {
  let accumulator = initialValue; // 1 operation
  for (let currentValue of array) { // a 'for of' loop over the entire length of the array --> n operations
    accumulator = callbackFn(accumulator, currentValue); // 1 operation
  }
  return accumulator;// 1 operation
}

// n + 3
// Dropping the constants ---> O(n)
```
- ***Beware!!! Time complexity will change based on the callback function. If a callback function with an inefficient time complexity is passed to reduce, it will greatly affect the efficiency of the reducing process.***

### Space Complexity

The space complexity of the reduce method is constant, `O(1)`, because only the `accumulator` value is being stored in each iteration, and it is returned once at the end of the reduce process.

- ***Beware Again!!! Space complexity will also change based on the callback function. If the callback function uses additional data structures whose space requirements grow with the size of the array, it will greatly affect the resulting value.***

## Use Cases

The reduce method is very versatile, because it can mimic other array methods and also produce valuable results based on the callback function given.  Below are some of the uses `reduce` have.

- Give the total cost of items in a shopping cart.

- Give count of different items in a shopping cart.

- Finding maximum value.

- Finding minimum value.

- Finding the average.

- Mimic `map` method.

- Mimic `filter` method.

## Edge Cases and Concerns

`TypeError` will be thrown if the array contains no elements and `initialValue` is not provided.

`TypeError` will be thrown if callback function is `null` or `undefined`.

## Extra Facts

The `initialValue` does not have to be a `number`, it can be an `array`, `object`, or `string`.  

`reduce()` iterates from left to right of the array.  If you want to start from the back and iterate towards the beginning, or from right to left.  You can use `reduceRight()`.

You can store whatever information you need in the accumulator. Just remember to always return a value, otherwise `undefined` will replace your accumulator and might cause some frustrating confusion.

## Citations / References

[ECMAscript 2024 Language Specification - Array reduce() method](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.reduce)

[Eloquent Javascript - Higher Order Functions](https://eloquentjavascript.net/05_higher_order.html)

[Freecodecamp - How to use Javascript's Array Reduce Method](https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/)

[Freecodecamp - How the JavaScript reduce and reduceRight Methods Work](https://www.freecodecamp.org/news/how-reduce-reduceright-works-javascript/)

[GeeksForGeeks - Array reduce() method](https://www.geeksforgeeks.org/javascript-array-reduce-method/?ref=lbp)

[khanacademy.org - Intro to reduce method](https://blog.khanacademy.org/lets-reduce-a-gentle-introduction-to-javascripts-reduce-method/)

[khanacademy.org - Reduce demo animation](https://reduce.surge.sh/)

[MDN - Array reduce() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[OpenAI - ChatGPT](https://chat.openai.com/)

[Pursuit 10.6 - Independent Study Project Example/Template](https://github.com/10-6-pursuit/independent-study-project-example)