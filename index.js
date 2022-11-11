// "use strict"

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// const drawSketchMini = (x, y, w, h, coeff) => {
//    const gap = 7;

//    ctx.strokeStyle = "black";
//    ctx.strokeRect(x + w + gap, y + h + gap, w * coeff, h * coeff); //0
//    ctx.strokeRect(x + gap + gap / 2, y + w + gap, w * coeff / 3, h * coeff);//1
//    ctx.strokeRect(x + w + gap, y + gap / 2 * h + gap, w * coeff, h * coeff / 3);//2
//    ctx.strokeRect(x + w * gap / 2 + gap, y + w + gap, w * coeff / 3, h * coeff);//3
//    ctx.strokeRect(x + w + gap, y + gap / 2 + gap, w * coeff, h * coeff / 3);//4

//    ctx.font = "bold 14px sans-serif";
//    // ctx.fillText("0", x, y); //0
//    ctx.fillText("1", x, y); //1
//    ctx.fillText("2", x, y); //2
//    ctx.fillText("3", x, y); //3
//    ctx.fillText("4", x, y); //4
//    // ctx.fillText("5", x, 1080); //5

// }

// drawSketchMini(10, 10, 20, 20, 2.5)

let handles = [
   {
      "names": "622",
      "h": 12,
      "w": 19,
      "length": 500,
      "side": "l",
      "angle": 60,
      "thickness1": 9.25,
      "thickness2": 4.25,
      "groove": 4.5,
      "depthGroove": 13.5
   },
   {
      "names": "622",
      "h": 12,
      "w": 19,
      "length": 500,
      "side": "r",
      "angle": 60,
      "thickness1": 9.25,
      "thickness2": 4.25,
      "groove": 4.5,
      "depthGroove": 13.5
   }
]


let count = 0;
handles.forEach(item => {
   count = count + item.length;
   return count
})

console.log(count);