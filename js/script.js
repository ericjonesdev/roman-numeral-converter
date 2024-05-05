const inputNumber = document.getElementById('number');
const outputNumber = document.getElementById('output');
const convertBtn = document.getElementById('convert-btn');

const checkUserInput = () => {
    const inputInt = parseInt(inputNumber.value);

    if (!inputNumber.value || !isNaN(inputInt) ) {
        alert("Please enter a valid number");
    }
}


inputNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  });