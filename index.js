"use strict"

const length = 700;
let arrFirstLast = [150, 600];
let arrH = [150, 600];
const arr = [];

// console.log(arrH);

const funcCalc = (count, length, sum) => {
   const formula1 = ((length - sum) / (count - 1));
   for (
      let i = 0;
      i < count + 1;
      i += 1
   ) {
      switch (true) {
         case (i === 0):
            console.log("i=1");
            arrH.pop();
            console.log(arrH);
            break;
         case (i === 1):
            console.log("i = 2");
            arrH.push(Math.ceil(arrH[0] + formula1));
            console.log(arrH);
            break;
         case (i > 1 && i < count):
            console.log("i= beetween FIRST and LAST");
            arrH.push(Math.ceil(arrH[arrH.length - 1] + formula1));
            console.log(arrH);
            break;
         case (i === count):
            console.log("I === count");
            arrH.push(Math.ceil(arrFirstLast[1]))
            break;
      }
   }
}

console.log(funcCalc(8, length, (arrFirstLast[0] + (length - arrFirstLast[1]))));