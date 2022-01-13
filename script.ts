let body = null;
if (typeof document !== 'undefined') {
// will run in client's browser only
body = document.getElementsByTagName("body")[0];

let answer = (<HTMLInputElement>document.getElementById("inptext"));
let list1:HTMLElement = <HTMLInputElement>document.getElementById("history-list");
let HistoryRegister:Array<string> = [];
let num1:number;

let strtonum=()=>
{
    return num1=parseInt(answer.value);
}

//taking input and showing the numbers 1-10 and operators such as pi , e , mod etc from button
let calculate = function (op:number) {
    answer.value+=op;
};
// equal operator
let Answer = function () {
  
    let ansch = answer.value;
    let anschnew = ansch.slice(-1);
    let numberbefore:any;
    if (isNaN(parseFloat(anschnew))) {
        ansch = ansch.substring(0, ansch.length - 1);
        numberbefore = ansch;
    }
    else {
        numberbefore = answer.value;
    }
    document.getElementById("sm").innerHTML=numberbefore; // displaying operations
    answer.value = eval(numberbefore); // for calculating basic math operations
    let numberafter = answer.value;
    let num = numberbefore + '=' + numberafter;
    HistoryRegister.push(num); //pushes the elements in array
    list1.innerHTML = '';
    HistoryRegister.forEach(function (element:any) {
        list1.innerHTML += '<li>' + element + '</li>'; //prints element history block
    });
};

//clear function
let clr = function () {
    let clearr=<HTMLInputElement>document.getElementById("sm");
    clearr.innerHTML = "";
    return answer.value = "";
};
//backspace / delete function
let del = function () { return answer.value = answer.value.slice(0, -1); };
//square root function
let sqrt = function () {strtonum(); return answer.value = (Math.sqrt(num1)).toString(); };
//factorial function
let fact = function () {
    strtonum();
    let n = num1;
    let facto = 1;
    if (n == 0 || n == 1) {
        facto = 1;
    }
    else {
        for (let i = n; i >= 1; i--) {
            facto = facto * i;
        }
    }
    return answer.value = facto.toString();
};
//function radian to degree
let Deg = function () {
    strtonum();
    let rad = num1;
    let deg = (rad * 180) / 3.14;
    return answer.value = deg.toString();
};
//function Farenhiet to celcius
let f_e = function () {
    strtonum();
    let cel = num1;
    let far = cel * 1.8 + 32;
    return answer.value = far.toString();
};
//function square
let square = function () {strtonum(); return answer.value = (Math.pow(num1, 2)).toString(); };
//function logarithm
let log = function () {strtonum(); return answer.value = Math.LOG10E.toString(); };
//function ln
let ln = function () {strtonum(); return answer.value = Math.log.toString(); };
//function 10pow x
let powx = function () {strtonum(); return answer.value = Math.pow(10, num1).toString(); };
//function exp
let exp = function () {strtonum(); return answer.value = Math.exp(num1).toString(); };
// function sin
let sin = function () {strtonum(); return answer.value = Math.sin(num1).toString(); };
// function tan
let tan = function () {strtonum(); return answer.value = Math.tan(num1).toString(); };
// function cos
let cos = function () {strtonum(); return answer.value = Math.cos(num1).toString(); };
// function asin
let asin = function () { strtonum(); return answer.value = Math.asin(num1).toString(); };
// function acos
let acos = function () {strtonum(); return answer.value = Math.acos(num1).toString(); };
// function atan
let atan = function () {strtonum(); return answer.value = Math.atan(num1).toString(); };
// function floor
let floor = function () {strtonum(); return answer.value = Math.floor(num1).toString(); };
// function ceil
let ceil = function () {strtonum(); return answer.value = Math.ceil(num1).toString(); };
//function random
let random = function () {strtonum(); return answer.value = Math.random().toString(); };
//function abs=>| x |
let abs = function () {strtonum(); return answer.value = Math.abs(num1).toString(); };
//function reciprocal
let reciprocal = function () {strtonum(); return answer.value = (1 / num1).toString(); };
// function x^3
let xpow3 = function () {strtonum(); return answer.value = Math.pow(num1, 3).toString(); };
// function 2^x
let powof2x = function () {strtonum(); return answer.value = Math.pow(2, num1).toString(); };
// function of +/-
let pm = function () {strtonum(); return answer.value = (-num1).toString(); };


let ms: Array<number> = [];
let index:number = 0;
// function memory save

let MemorySave = () =>{
  ms.push(parseInt(answer.value));
  answer.value = "";
}

//function memory plus (M+)
let memoryplus = () => {
  if (ms.length == 0) {
    alert("Nothing is stored in memory");
  } else {
    let sum: number = ms.reduce(function (num12: number, num2: number) {
      return num12 + num2;
    }, 0);
    return answer.value = String(sum);
}
}

//function memory minus
let memoryminus = () => {
  if (ms.length == 0) {
    alert("Nothing is stored in memory");
  } 
}

//function memory recall 
let memoryrecall = () => {
      if (ms.length == 0) {
        alert("Nothing is stored in memory");
      } else {
        index %= ms.length;
        answer.value = String(ms[index]);
        index++;
      }
}

//function memory clear
let memoryclear = () => {
    ms.splice(0, ms.length);
    answer.value = "";
}

//function for taking input from keyboard
let myFunction = function (event:any) {
    let unicode = event.which;
    if (unicode >= 48 && unicode <= 57 || unicode == 94 || unicode == 40 || unicode == 41 || unicode == 42 || unicode == 43 || unicode == 45 || unicode == 47) {
        calculate(event.key);
    }
    else {
    }
    if (unicode == 13) {
        Answer();
    }
    if (unicode == 46) {
        del();
    }
};
}