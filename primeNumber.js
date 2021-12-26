// 4

function prime(num) {
  
  if (num == 1) {
    document.write("1 is neither prime nor composite number.");
  }

  var new_array = "";
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return "number is not prime";
    } else {
      return "number is prime";
    }
  }

  

  document.write(new_array);
  
}

const number = parseInt(prompt("Enter a positive number: "));
document.write(prime(number));
