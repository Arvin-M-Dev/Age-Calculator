// ======================== Form Element ========================
const form = document.querySelector(".content-from");

// ======================== Inputs ========================
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

// ======================== Results ========================
const dayValue = document.querySelector("#dayValue");
const monthValue = document.querySelector("#monthValue");
const yearValue = document.querySelector("#yearValue");

// ======================== Errors ========================
const dayErr = document.querySelector("#dayErr");
const monthErr = document.querySelector("#monthErr");
const yearErr = document.querySelector("#yearErr");

// ======================== Form ========================
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateDate(dayInput.value, monthInput.value, yearInput.value);
});

// ======================== Validate Date ========================
function validateDate(day, month, year) {
  const numDay = Number(day);
  const numMonth = Number(month);
  const numYear = Number(year);
  let hasError = false;

  // ======================== Day Validation ========================
  if (day.trim() === "" || isNaN(day) || numDay <= 0) {
    hasError = true;
    showError(dayErr, dayInput, "This field is required");
    showDateInDom("--", "--", "--");
  } else if (numDay > 31) {
    hasError = true;
    showError(dayErr, dayInput, "Must be a valid day");
    showDateInDom("--", "--", "--");
  } else {
    clearError(dayErr, dayInput);
  }

  // ======================== Month Validation ========================
  if (month.trim() === "" || isNaN(month) || numMonth <= 0) {
    hasError = true;
    showError(monthErr, monthInput, "This field is required");
    showDateInDom("--", "--", "--");
  } else if (numMonth > 12) {
    hasError = true;
    showError(monthErr, monthInput, "Must be a valid month");
    showDateInDom("--", "--", "--");
  } else {
    clearError(monthErr, monthInput);
  }

  // ======================== Year Validation ========================
  const currentYear = new Date().getFullYear();

  if (year.trim() === "" || isNaN(year) || numYear <= 0) {
    hasError = true;
    showError(yearErr, yearInput, "This field is required");
    showDateInDom("--", "--", "--");
  } else if (numYear > currentYear) {
    hasError = true;
    showError(yearErr, yearInput, "Must be in the past");
    showDateInDom("--", "--", "--");
  } else {
    clearError(yearErr, yearInput);
  }

  if (hasError) return;

  // ======================== Validation Date ========================
  if (!isValidDate(numDay, numMonth, numYear)) {
    showError(dayErr, dayInput, "Must be a valid date");
    showDateInDom("--", "--", "--");
    markInvalid(yearInput, monthInput);
    return;
  }

  const birthDate = new Date(numYear, numMonth - 1, numDay);
  const today = new Date();

  if (birthDate > today) {
    showError(dayErr, dayInput, "Must be in the past");
    showDateInDom("--", "--", "--");
    markInvalid(yearInput, monthInput);
    return;
  }

  // ======================== Calculate Age ========================
  calculateAge(numDay, numMonth, numYear);
}

// ======================== Error & DOM Handling ========================
function showError(dateErr, dateInput, errText) {
  dateErr.classList.add("visible");
  dateErr.innerHTML = errText;
  dateInput.previousElementSibling.style.color = "#ff5757";
  dateInput.style.borderColor = "#ff5757";
}

function clearError(dateErr, dateInput) {
  dateErr.classList.remove("visible");
  dateInput.style.borderColor = "#dbdbdb";
  dateInput.previousElementSibling.style.color = "#716f6f";
}

function showDateInDom(day, month, year) {
  dayValue.textContent = day;
  monthValue.textContent = month;
  yearValue.textContent = year;
}

function markInvalid(year, month) {
  year.style.borderColor = "#ff5757";
  year.previousElementSibling.style.color = "#ff5757";
  month.style.borderColor = "#ff5757";
  month.previousElementSibling.style.color = "#ff5757";
}
// ======================== Validating Date ========================
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(month, year) {
  const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2 && isLeapYear(year)) {
    return 29;
  }

  return dayInMonth[month - 1];
}

function isValidDate(day, month, year) {
  if (month > 12 || month < 1) {
    return false;
  }

  if (day < 1 || day > getDaysInMonth(month, year)) {
    return false;
  }

  return true;
}

// ======================== Calculate Age ========================
function calculateAge(day, month, year) {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  let days = currentDay - day;
  let months = currentMonth - month;
  let years = currentYear - year;

  if (days < 0) {
    const dayInMonth = getDaysInMonth(currentMonth - 1, currentYear);

    days = days + dayInMonth;

    months--;
  }

  if (months < 0) {
    months = months + 12;
    years--;
  }

  showDateInDom(days, months, years);
}
