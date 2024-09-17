function Number(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num;
}
function Prime() {
  let n = parseInt(document.getElementById("inp").value)
  if (Number(n)) {
    document.getElementById("prime").textContent = n + ": is Prime Number!"
  } else {
    document.getElementById("prime").textContent = n + ": is not Prime Number!"
  }
}

let btn = document.querySelector("#mode");
let mode = 'light';
let body = document.querySelector("body");

btn.addEventListener('click', () => {
  if (mode === 'light') {
    mode = 'dark';
    body.style.backgroundColor = 'black';
    body.style.color = 'white';

  } else {
    mode = 'light';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
  console.log(mode);
})

function Number(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num;
}
function Prime() {
  let n = parseInt(document.getElementById("inp").value)
  if (Number(n)) {
    document.getElementById("prime").textContent = n + ": is Prime Number!"
  } else {
    document.getElementById("prime").textContent = n + ": is not Prime Number!"
  }
}

let btn1 = document.querySelector("#mode");
let mode1 = 'light';
let body1 = document.querySelector("body");

btn.addEventListener('click', () => {
  if (mode1 == 'light') {
    mode1 = 'dark';
    body1.classList.add('dark');
    body1.classList.remove('light')
  } else {
    mode1 = 'light';
    body1.classList.add('light');
    body1.classList.remove('dark');
  }
})
