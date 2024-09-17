function Radio(){
  let male = document.getElementById("male").checked;
  let female = document.getElementById("female").checked;
  let err = document.getElementById("err");
  console.log(male+ ":" +female);
  if(male == false && female == false){
    err.innerText = "Please select gender";
    err.style.color = 'red';
  }else{
    err.innerText = '';
  }
}

function CheckBox() {
  let one = document.getElementById("hocky").checked;
  let two = document.getElementById("cricket").checked;
  let three = document.getElementById("tenis").checked;
  let four = document.getElementById("vollyball").checked;
  let err1 = document.getElementById("err");
  console.log(one + ":" + two + ":" + three + ":" + four);

  if (one == false && two == false && three == false && four == false) {
    err1.innerText = "Please select Your Hobbies";
    err1.style.color = 'red';
  } else {
    err1.innerText = '';
  }
}