let num=20
function reverseNumber(num) {
    // initialize a variable to store the reversed number
    let reversedNum = 0;
    // loop until the original number becomes zero
    while (num > 0) {
      // get the last digit of the original number
      let lastDigit = num % 10;
      // multiply the reversed number by 10 and add the last digit
      reversedNum = reversedNum * 10 + lastDigit;
      // remove the last digit of the original number by dividing by 10 and rounding down
      num = Math.floor(num / 10);
    }
    // return the reversed number
    return reversedNum;
  } 
  console.log(reversedNum)
