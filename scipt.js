// TASK 1

const years = [
  {
    name: "giorgi",
    lastName: "natroshvili",
    year: 1970,
  },
  {
    name: "nikoloz",
    lastName: "shatberashvili",
    year: 2017,
  },
  {
    name: "ilia",
    lastName: "tsiklauri",
    year: 2004,
  },
  {
    name: "nodo",
    lastName: "ramishvili",
    year: 1999,
  },
];
console.log(years.sort((a, b) => b.year - a.year));

// TASK 2

const users = [
  {
    user: "gamer",
    age: 19,
  },
  {
    user: "programer",
    age: 23,
  },
  {
    user: "nurse",
    age: 36,
  },
  {
    user: "policeman",
    age: 44,
  },
];
function displayArray(array) {
  let arrayString = "<ul>";
  array.forEach(function (obj) {
    arrayString += "<li>" + obj.user + "</li>";
  });
  arrayString += "</ul>";
  return arrayString;
}

let displayElement = document.querySelector(".display");
displayElement.innerHTML = displayArray(users);

// TASK 3

const laptops = [
  { name: "Laptop A", price: 1200 },
  { name: "Laptop B", price: 1500 },
  { name: "Laptop C", price: 1800 },
  { name: "Laptop D", price: 1350 },
];
function findMostExpensiveLaptop(laptopArray) {
  let mostExpensive = laptopArray[0];

  for (let i = 1; i < laptopArray.length; i++) {
    if (laptopArray[i].price > mostExpensive.price) {
      mostExpensive = laptopArray[i];
    }
  }
  return mostExpensive;
}
console.log(findMostExpensiveLaptop(laptops));
