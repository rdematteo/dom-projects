random_color = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};

let picked_color = document.querySelector(".inputNumber");
picked_color.style.backgroundColor = random_color();

const randNumber = Math.floor(Math.random() * 10);
console.log(randNumber);

correct_number = a => {
  const randNum = a;

  let number = document.getElementById("number").value;
  let h1 = document.querySelector(".correctNumber");

  if (number == randNum) {
    let picked_color = document.querySelector(".inputNumber");
    picked_color.style.backgroundColor = "#f5f5f5";

    h1.innerHTML = "Congratulations!! Correct number - Play again? Click Enter";
    document
      .getElementById("checkNumber")
      .addEventListener("click", function(event) {
        window.location.reload();
      });
  } else {
    h1.innerHTML = "Incorrect guess - Guess again?";
    let picked_color = document.querySelector(".inputNumber");
    picked_color.style.backgroundColor = random_color();
  }
};

document
  .getElementById("checkNumber")
  .addEventListener("click", function(event) {
    event.preventDefault();
    // console.log(event);
    correct_number(randNumber);
  });
