let dob = document.querySelector("#date");
let number = document.querySelector("#number");
let checkButton = document.querySelector("#check");
let display = document.querySelector(".output");

checkButton.addEventListener("click", () => {
  let inputNumber = Number(number.value);
  let inputDate = dob.value;
  let date = new Date(inputDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dayDate = date.getDate();
  let dateSum = year + month + dayDate;

  console.log(year, month, dayDate, dateSum);

  console.log(dateSum);

  if (inputNumber === "" || inputDate === "") {
    display.textContent = `Can not Empty`;
    return;
  }
  if (dateSum < inputNumber) {
    display.textContent = "You Number Exceding your DOB";
  } else if (dateSum % inputNumber === 0) {
    display.textContent = " Your Date Of Birth is Lucky";
  } else {
    display.textContent = "Oops! Your Date Of Birth is not  Lucky";
  }
});
