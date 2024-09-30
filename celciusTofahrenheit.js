/*
F = C * 9 / 5 + 32;
C = (F - 32) * 5 / 9;
*/

function Celcius(f){
     let foh = f;
     let degC = (foh-32) * 5 / 9;
     console.log("Celcius is : ",degC, "\xB0C");
}
Celcius(98.6);


function Fahrenheit(c) {
  let cel = c;
  let degT = cel * 9 / 5 + 32;
  console.log("Fohrenheit is : ", degT, "\xB0F");
}
Fahrenheit(37);