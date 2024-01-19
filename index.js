// 1. Calculate sum of all elements in array. 

const numArray = [1, 2, 3, 4, 5];

const numArrayTotalSum = numArray.reduce((acc, cur) => { return acc + cur}, 0);

console.log("Example 1:", numArrayTotalSum);

// 2. Calculate the product of all elements in array.

const numArrayProduct = numArray.reduce((acc, cur) => acc * cur, 1);

console.log("Example 2:", numArrayProduct);


// 3. Get the count of each fruit.

const fruitArray = [
    'orange', 'pear', 'lemon', 'kiwi', 'pomegranate',
    'mango', 'grape', 'apple', 'plum', 'lemon',
    'banana', 'blueberry', 'avocado', 'lemon', 'watermelon',
    'pomegranate', 'raspberry', 'lemon', 'peach', 'kiwi',
    'cherry', 'lemon', 'strawberry', 'avocado', 'avocado',
];

const countOfFruit = fruitArray.reduce((acc, cur) => {
    if(!acc[cur]){
        acc[cur] = 1;
    } else {
        acc[cur] ++;
    }
    return acc;
},{}) // Here, we use an object as the initialValue.

console.log("Example 3:", countOfFruit)

// 4. Calculate the average temperature.

const temperaturesFahrenheit = [73, 77, 68, 72, 82, 86, 64, 69, 79, 75];

const averageTemp = temperaturesFahrenheit.reduce((acc, cur) => acc + cur)/temperaturesFahrenheit.length;// Here, no initialValue is assigned.

console.log("Example 4:", averageTemp);

// 5. Calculate the highest temperature.

const highestTemp = temperaturesFahrenheit.reduce((acc, cur) => Math.max(acc, cur));// Here, again no initialValue is assigned.
// Math.max will return the higher value after comparing the two parameters.  This return value will be acc in next iteration.

console.log("Example 5:", `${highestTemp} is the highest temperature.`);

// 6. Calculate the lowest temperature.

const lowestTemp = temperaturesFahrenheit.reduce((acc, cur) => Math.min(acc, cur));
// Math.min will return the lower value after comparing the two parameters.  This return value will be acc in next iteration.

console.log("Example 6:", `${lowestTemp} is the lowest temperature.`);

// 7. Mimic .map array method

const mapArray = [1, 2, 3];

const mapMimic = mapArray.reduce((acc, cur) => [...acc, cur * 10], []);// Here, the initialValue is an array.
// First iteration --->[10]
// Second iteration -->[10, 2 * 10] A new array is formed with contents from last iteration spread.
// Third iteration --->[10, 20, 3 * 10]

console.log("Example 7:", mapMimic);

// 8. Mimic .filter array method

const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterMimic = filterArray.reduce((acc, cur) => {
    return cur % 2 === 0 ? [...acc, cur] : acc;
}, [])

console.log("Example 8:", filterMimic);

// 9. Removing duplicates from array

const uniqueFruitArray = fruitArray.reduce((acc, cur) => {
    if (!acc.includes(cur)) { // Check if current array include the element.
        acc.push(cur);        // If not present, then will push element into array.
    }
    return acc;               // Return array as acc for next iteration.
}, []);

console.log("Example 9:", uniqueFruitArray)

// 10. Capitalize first letter of each fruit string.

const capFruitArray = uniqueFruitArray.reduce((acc, cur) => [...acc, cur[0].toUpperCase() + cur.slice(1)], [])

console.log("Example 10:", capFruitArray)

// 11. Add price to fruit base on length of each fruit string length.

const fruitPriceArray = capFruitArray.reduce((acc, cur) => {
    acc.push({"name": cur, "price": cur.length });
    return acc
},[])

console.log("Example 11:", fruitPriceArray)

// 12. Get total cost of all fruits.

const totalCostOfFruit = fruitPriceArray.reduce((acc, cur) => {
    return acc += cur.price;
  }, 0)

console.log("Example 12:", totalCostOfFruit)