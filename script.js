var body = null;
if (typeof document !== 'undefined') {
    // will run in client's browser only
    body = document.getElementsByTagName("body")[0];
    var answer = document.getElementById("inptext");
    var list1 = document.getElementById("history-list");
    var HistoryRegister = [];
    var num1;
    var strtonum = function () {
        return num1 = parseInt(answer.value);
    };
    //taking input and showing the numbers 1-10 and operators such as pi , e , mod etc from button
    var calculate = function (op) {
        answer.value += op;
    };
    // equal operator
    var Answer = function () {
        var ansch = answer.value;
        var anschnew = ansch.slice(-1);
        var numberbefore;
        if (isNaN(parseFloat(anschnew))) {
            ansch = ansch.substring(0, ansch.length - 1);
            numberbefore = ansch;
        }
        else {
            numberbefore = answer.value;
        }
        document.getElementById("sm").innerHTML = numberbefore; // displaying operations
        answer.value = eval(numberbefore); // for calculating basic math operations
        var numberafter = answer.value;
        var num = numberbefore + '=' + numberafter;
        HistoryRegister.push(num); //pushes the elements in array
        list1.innerHTML = '';
        HistoryRegister.forEach(function (element) {
            list1.innerHTML += '<li>' + element + '</li>'; //prints element history block
        });
    };
    //clear function
    var clr = function () {
        var clearr = document.getElementById("sm");
        clearr.innerHTML = "";
        return answer.value = "";
    };
    //backspace / delete function
    var del = function () { return answer.value = answer.value.slice(0, -1); };
    //square root function
    var sqrt = function () { strtonum(); return answer.value = (Math.sqrt(num1)).toString(); };
    //factorial function
    var fact = function () {
        strtonum();
        var n = num1;
        var facto = 1;
        if (n == 0 || n == 1) {
            facto = 1;
        }
        else {
            for (var i = n; i >= 1; i--) {
                facto = facto * i;
            }
        }
        return answer.value = facto.toString();
    };
    //function radian to degree
    var Deg = function () {
        strtonum();
        var rad = num1;
        var deg = (rad * 180) / 3.14;
        return answer.value = deg.toString();
    };
    //function Farenhiet to celcius
    var f_e = function () {
        strtonum();
        var cel = num1;
        var far = cel * 1.8 + 32;
        return answer.value = far.toString();
    };
    //function square
    var square = function () { strtonum(); return answer.value = (Math.pow(num1, 2)).toString(); };
    //function logarithm
    var log = function () { strtonum(); return answer.value = Math.LOG10E.toString(); };
    //function ln
    var ln = function () { strtonum(); return answer.value = Math.log.toString(); };
    //function 10pow x
    var powx = function () { strtonum(); return answer.value = Math.pow(10, num1).toString(); };
    //function exp
    var exp = function () { strtonum(); return answer.value = Math.exp(num1).toString(); };
    // function sin
    var sin = function () { strtonum(); return answer.value = Math.sin(num1).toString(); };
    // function tan
    var tan = function () { strtonum(); return answer.value = Math.tan(num1).toString(); };
    // function cos
    var cos = function () { strtonum(); return answer.value = Math.cos(num1).toString(); };
    // function asin
    var asin = function () { strtonum(); return answer.value = Math.asin(num1).toString(); };
    // function acos
    var acos = function () { strtonum(); return answer.value = Math.acos(num1).toString(); };
    // function atan
    var atan = function () { strtonum(); return answer.value = Math.atan(num1).toString(); };
    // function floor
    var floor = function () { strtonum(); return answer.value = Math.floor(num1).toString(); };
    // function ceil
    var ceil = function () { strtonum(); return answer.value = Math.ceil(num1).toString(); };
    //function random
    var random = function () { strtonum(); return answer.value = Math.random().toString(); };
    //function abs=>| x |
    var abs = function () { strtonum(); return answer.value = Math.abs(num1).toString(); };
    //function reciprocal
    var reciprocal = function () { strtonum(); return answer.value = (1 / num1).toString(); };
    // function x^3
    var xpow3 = function () { strtonum(); return answer.value = Math.pow(num1, 3).toString(); };
    // function 2^x
    var powof2x = function () { strtonum(); return answer.value = Math.pow(2, num1).toString(); };
    // function of +/-
    var pm = function () { strtonum(); return answer.value = (-num1).toString(); };
    var ms = [];
    var index = 0;
    // function memory save
    var MemorySave = function () {
        ms.push(parseInt(answer.value));
        answer.value = "";
    };
    //function memory plus (M+)
    var memoryplus = function () {
        if (ms.length == 0) {
            alert("Nothing is stored in memory");
        }
        else {
            var sum = ms.reduce(function (num12, num2) {
                return num12 + num2;
            }, 0);
            return answer.value = String(sum);
        }
    };
    //function memory minus
    var memoryminus = function () {
        if (ms.length == 0) {
            alert("Nothing is stored in memory");
        }
    };
    //function memory recall 
    var memoryrecall = function () {
        if (ms.length == 0) {
            alert("Nothing is stored in memory");
        }
        else {
            index %= ms.length;
            answer.value = String(ms[index]);
            index++;
        }
    };
    //function memory clear
    var memoryclear = function () {
        ms.splice(0, ms.length);
        answer.value = "";
    };
    //function for taking input from keyboard
    var myFunction = function (event) {
        var unicode = event.which;
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
