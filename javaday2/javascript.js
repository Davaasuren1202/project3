// let too = 0;

// const toog = () => {
//   too = too + 1;
//   console.log(too);
// };
// homework

const plushp = document.getElementById("blood");

const heal = () => {
  plushp.classList.add("health");
};

const attack = () => {
  plushp.classList.remove("health");
};

//   const addNumber = () => {
//     a = prompt("Enter a name");
//     b = Number(prompt("Enter a age"));
//     console.log(a + " is " + b + " years old");
//   };

//   let number = 0;
//   const red = () => {
//     let first = Number(prompt("Enter a first number"));
//     let second = Number(prompt("Enter a second number"));
//     number = first + second;
//     alert(first + " + " + second + " = " + number);
//   };
//   const white = () => {
//     let first = Number(prompt("Enter a first number"));
//     let second = Number(prompt("Enter a second number"));
//     number = first - second;
//     console.log(first + " - " + second + " = " + number);
//   };
//   const pink = () => {
//     let first = Number(prompt("Enter a first number"));
//     let second = Number(prompt("Enter a second number"));
//     number = first * second;
//     console.log(first + " * " + second + " = " + number);
//   };

let number = 0;
const red = () => {
  let first = Number(prompt("Enter a first number"));
  let second = 3;
  number = first % second;
  num = first / second;
  overnum = num - number;
  if (number === 0) {
    alert(
      first +
        " + " +
        second +
        " = " +
        overnum +
        "\n" +
        first +
        " is divisible by " +
        second,
    );
  } else {
    alert(
      first +
        " + " +
        second +
        " = " +
        num +
        "\n" +
        first +
        " is not divisible by " +
        second,
    );
  }
};
const garchig = document.getElementById("title");

const changeText = () => {
  garchig.classList.add("gg");
};
//   garchig.textContent = "Hello Pinecone";

// const one = document.getElementById("zero");
// let count = Number(prompt("Enter a number"));

// const two = () => {
//   count = (count + 4) * 2;
//   one.textContent = count;
// };
