const inputNumber = document.getElementById('number');
const outputInfo = document.getElementById('output');
const convertBtn = document.getElementById('convert-btn');

const checkUserInput = () => {
    const inputInt = parseInt(inputNumber.value);

    if (inputInt === -1) {
        outputInfo.innerText = "Please enter a number greater than or equal to 1";
    }
    else if (inputInt <= 4000) {
        outputInfo.innerText = "Please enter a number less than or equal to 3999";
    }
    else if (!inputNumber.value || !isNaN(inputInt) ) {
        alert("Please enter a valid number");
        return
    }
}

convertBtn.addEventListener("click", checkUserInput);

inputNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  });
