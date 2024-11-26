//Dropdown menu
var selector = document.getElementById("selector");
var darkmode = document.getElementById("dms");

//Hides all
var DivElements = document.getElementsByTagName("div");
for (var i = 0, max = DivElements.length; i < max; i++) {
  DivElements[i].style.display = "none";
}

//Checks for dropdwon change
selector.addEventListener("change", updateCalc);
//Checks for darkmode change
darkmode.addEventListener("change", darkmodeSwitch);

function darkmodeSwitch() {
  var html = document.getElementById("html");
  var main = document.getElementById("main");
  if (darkmode.checked) {
    main.style.borderColor = "white";
    html.style.background = "black";
    html.style.color = "white";
    DivElements = document.getElementsByTagName("div");
    for (var i = 0, max = DivElements.length; i < max; i++) {
      DivElements[i].style.background = "black";
      DivElements[i].style.borderColor = "white";
    }
  } else {
    main.style.borderColor = "black";
    html.style.background = "white";
    html.style.color = "black";
    DivElements = document.getElementsByTagName("div");
    for (var i = 0, max = DivElements.length; i < max; i++) {
      DivElements[i].style.background = "white";
      DivElements[i].style.borderColor = "black";
    }
  }
}

//Finds dropdown value
function updateCalc() {
  var switchUser = selector.value;
  switch (switchUser) {
    case "1":
      DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      document.getElementById("FTC").style.display = "block";
      break;
    case "2":
      DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      document.getElementById("AOT").style.display = "block";
      break;
    case "3":
      DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      document.getElementById("AOC").style.display = "block";
      break;
    case "4":
      DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      document.getElementById("AOR").style.display = "block";
      break;
    case "5":
      DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      document.getElementById("AOTri").style.display = "block";
      break;
    case "6":
      DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      document.getElementById("VOS").style.display = "block";
      break;
    case "7":
      DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      document.getElementById("VORP").style.display = "block";
      break;
      break;
    case "8":
      DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      document.getElementById("VOTRI").style.display = "block";
      break;
    case "9":
      DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      document.getElementById("AVGDIV").style.display = "block";
      break;
    case "10":
      DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      document.getElementById("TIPDIV").style.display = "block";
      break;
      break;
    case "select":
      var DivElements = document.getElementsByTagName("div");
      for (var i = 0, max = DivElements.length; i < max; i++) {
        DivElements[i].style.display = "none";
      }
      break;
  }
}

//Fahrenheit to Celcius
var input = document.getElementById("fIn");
var output = document.getElementById("output");
var converter = document.getElementById("converter");
var info = document.getElementById("tempIn");
var outM = document.getElementById("outM");
var mainH = document.getElementById("mH");
var option = document.getElementById("option");
var eq = document.getElementById("EquationSec");

converter.addEventListener("click", updateDegree);
option.addEventListener("change", change);

function updateDegree() {
  if ((option.value = "FC")) {
    var f = Number(input.value);
    var c = ((f - 32) * 5) / 9;
    var c = Math.round(c);

    //cleanup
    converter.style.background = `#26d978`;
    input.value = null;
    output.innerHTML = c;
  } else {
    var c = Number(input.value);
    var f = (c * 9) / 5 + 32;
    var f = Math.round(f);

    //cleanup
    converter.style.background = `#26d978`;
    input.value = null;
    output.innerHTML = f;
  }
}

function change() {
  var strComp = option.value;
  console.log(strComp);
  if (strComp == "1") {
    eq.innerHTML = "°C = (°F - 32) x 5 / 9";
    mainH.innerHTML = "Fahrenheit to Celsius Convertor";
    info.innerHTML = "Temperature in Fahrenheit:";
    outM.innerHTML = "Temperature in Celcius:";
    output.innerHTML = "----";
  } else if (strComp == "2") {
    mainH.innerHTML = "Celsius to Fahrenheit Convertor";
    info.innerHTML = "Temperature in Celcius:";
    outM.innerHTML = "Temperature in Fahrenheit:";
    output.innerHTML = "----";
    eq.innerHTML = "°F = (°C * 9 / 5) + 32";
  }
}

//Area of trapezoid
var TrapSel = document.getElementById("outMeasureTrap");
var TrapBTN = document.getElementById("TRAPCAL");
var TrapOUT = document.getElementById("TrapOutput");

TrapBTN.addEventListener("click", trapArea);

function trapArea() {
  var base1 = Number(document.getElementById("TrapBOne").value);
  var base2 = Number(document.getElementById("TrapBTwo").value);
  var height = Number(document.getElementById("TrapHNum").value);
  var output = (1 / 2) * (base1 + base2) * height;

  TrapOUT.innerHTML = output + TrapSel.value;
}

//Area of a circle
var CIRCSEL = document.getElementById("outMeasureCirc");
var CIRCBTN = document.getElementById("CIRCAL");
var CIRCOUT = document.getElementById("CIROutput");

CIRCBTN.addEventListener("click", CIRAREA);

function CIRAREA() {
  var radius = Number(document.getElementById("CR").value);
  var output = Math.PI * Math.pow(radius, 2);
  output = Math.round(output * 100) / 100;

  CIRCOUT.innerHTML = output + CIRCSEL.value;
}

//Area of a rectanlge
var RECTSEL = document.getElementById("outMeasureRect");
var RectBTN = document.getElementById("RectCAL");
var RectOut = document.getElementById("RectOutput");

RectBTN.addEventListener("click", RectAREA);

function RectAREA() {
  var base = Number(document.getElementById("RB").value);
  var height = Number(document.getElementById("RH").value);

  var output = base * height;

  RectOut.innerHTML = output + RECTSEL.value;
}

//Triangle area
var TriSel = document.getElementById("outMeasureTri");
var TriBTN = document.getElementById("TriCAL");
var TriOUT = document.getElementById("TriOutput");

TriBTN.addEventListener("click", triArea);

function triArea() {
  var base = Number(document.getElementById("TriB").value);
  var height = Number(document.getElementById("TriH").value);
  var output = (1 / 2) * (base * height);

  TriOUT.innerHTML = output + TriSel.value;
}

//Volume of Sphere
var SPHSEL = document.getElementById("outMeasureSPH");
var SPHBTN = document.getElementById("SPHCAL");
var SPHOUT = document.getElementById("SPHOutput");

SPHBTN.addEventListener("click", SPHVOL);

function SPHVOL() {
  var radius = Number(document.getElementById("SPHR").value);
  var output = (4 / 3) * (Math.PI * Math.pow(radius, 3));
  output = Math.round(output * 100) / 100;

  SPHOUT.innerHTML = output + SPHSEL.value;
}

//Volume of Rectangular prism
var RECTPSEL = document.getElementById("outMeasureRECTP");
var RECTPBTN = document.getElementById("RECTPCAL");
var RECTPOUT = document.getElementById("RECTPOutput");

RECTPBTN.addEventListener("click", RECTPVOL);

function RECTPVOL() {
  var RECTPB = Number(document.getElementById("RECTB").value);
  var RECTPW = Number(document.getElementById("RECTW").value);
  var RECTPH = Number(document.getElementById("RECTH").value);
  var output = RECTPB * RECTPW * RECTPH;
  output = Math.round(output * 100) / 100;

  RECTPOUT.innerHTML = output + RECTPSEL.value;
}

//Volume of Triangular Prism
var TRIPSEL = document.getElementById("outMeasureTRIP");
var TRIPBTN = document.getElementById("TRIPCAL");
var TRIPOUT = document.getElementById("TRIPOutput");

TRIPBTN.addEventListener("click", TRIPVOL);

function TRIPVOL() {
  var Base1T = Number(document.getElementById("TRIB1").value);
  var Base2T = Number(document.getElementById("TRIB2").value);
  var Base3T = Number(document.getElementById("TRIB3").value);
  var height = Number(document.getElementById("TRIH").value);
  var output =
    (1 / 4) *
    height *
    Math.sqrt(
      -Math.pow(Base1T, 4) +
        2 * Math.pow(Base1T * Base2T, 2) +
        2 * Math.pow(Base1T * Base3T, 2) -
        Math.pow(Base2T, 4) +
        2 * Math.pow(Base2T * Base3T, 2) -
        Math.pow(Base3T, 4)
    );

  output = Math.round(output * 100) / 100;
  TRIPOUT.innerHTML = output + TRIPSEL.value;
}

//Average Calculator

var AVGBTN = document.getElementById("AVGBTN");
var avgOUT = document.getElementById("avgOut");
AVGBTN.addEventListener("click", CALCAVG);

function CALCAVG() {
  var num1AVG = Number(document.getElementById("Num1GR").value);
  var num2AVG = Number(document.getElementById("Num2GR").value);
  var num3AVG = Number(document.getElementById("Num3GR").value);
  var AVG = (num1AVG + num2AVG + num3AVG) / 3;
  avgOUT.innerHTML = AVG;
}

//Tip calculator
var TIPBTN = document.getElementById("TIPBTN");
var TIPOUT = document.getElementById("TIPOUT");
TIPBTN.addEventListener("click", CALCTIP);

function CALCTIP() {
  var mealCost = Number(document.getElementById("MCNUM").value);
  var peopleAmt = Number(document.getElementById("PANUM").value);
  var tipPercent = Number(document.getElementById("TPNUM").value);
  var FinalTipAmt = (mealCost * (tipPercent / 100)) / peopleAmt;
  TIPOUT.innerHTML = `$` + FinalTipAmt;
}
