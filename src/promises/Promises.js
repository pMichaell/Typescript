const fetch = require("node-fetch")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getNumberAsync = (index) => {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(numbers.find(el => el === index + 1))
      }, 100)
  })
};

(async function () {
  const result = await getNumberAsync(0);
  console.log(result);
})();

numbers.forEach(async (_, i) => {
  console.log(await getNumberAsync(i));
});

(async function () {
  const result = await Promise.all(numbers.map((el, i) => getNumberAsync(i)));
  console.log(result);
})();

const getPost = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    return await response.json();
}

const toBeIteratedOver = Array.from(Array(5).keys());

(function () {
    toBeIteratedOver.forEach( async (number) => {
        const result = await getPost(number + 1);
        console.log(result);
    })
})();


(async function () {
    const promises = toBeIteratedOver.map(number => getPost(number));
    let resultArray = await Promise.all(promises);
    console.log(resultArray);
})();
