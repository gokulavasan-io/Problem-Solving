console.log("=======================   1st    =============================");

function classifyNumber(n) {
  if (n % 3 == 0 && n % 5 == 0) {
    return "Divisible by both 3 and 5";
  } else if (n % 5 == 0) {
    return "Divisible by 5";
  } else if (n % 3 == 0) {
    return "Divisible by 3";
  } else {
    return "Not divisible by 3 or 5";
  }
}
console.log(classifyNumber(15));


console.log("=======================   2nd    =============================");


function getDayName(day_num) {
  switch (day_num) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;

    default:
      return "Saturday";
      break;
  }
}
console.log(getDayName(6));



console.log("=======================   3rd    =============================");

function printMultiplicationTable(n,r) {
        for (let i = r; i >=1; i--) {
            console.log(`${n}*${i}=${n*i}`);
        }


}
printMultiplicationTable(3,8);
