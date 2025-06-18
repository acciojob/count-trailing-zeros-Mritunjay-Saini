function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// Take input from the user
const input = parseInt(prompt("Enter a non-negative integer:"), 10);

// Ensure input is a valid number
if (!isNaN(input) && input >= 0) {
  const result = trailingZeros(input);
  alert("Number of trailing zeros in " + input + "! is: " + result);
} else {
  alert("Please enter a valid non-negative integer.");
}
