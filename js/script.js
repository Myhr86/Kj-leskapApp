var ul = document.querySelector("ul");

function buttonClick() {
  //document.getElementById("myLI").value = ++lever;
  var n = localStorage.getItem('leverpostei_counter');

  if (n === null) {
      n = 0;
  }

  n++;

  localStorage.setItem("leverpostei_counter", n);

  document.getElementById('myLI').value = n;
}
function buttonClickMinus() {
  var n = localStorage.getItem('leverpostei_counter');

  if (n === null) {
      n = 0;
  }

  n--;

  localStorage.setItem("leverpostei_counter", n);

  document.getElementById('myLI').value = n;
}

function buttonClick2() {
  var a = localStorage.getItem('salami_counter');

  if (a === null) {
      a = 0;
  }

  a++;

  localStorage.setItem("salami_counter", a);

  document.getElementById('myLI2').value = a;
}
function buttonClickMinus2() {
  var a = localStorage.getItem('salami_counter');

  if (a === null) {
      a = 0;
  }

  a--;

  localStorage.setItem("salami_counter", a);

  document.getElementById('myLI2').value = a;
}

function buttonClick3() {
  var b = localStorage.getItem('gomme_counter');

  if (b === null) {
      b = 0;
  }

  b++;

  localStorage.setItem("gomme_counter", b);

  document.getElementById('myLI3').value = b;
}
function buttonClickMinus3() {
  var b = localStorage.getItem('gomme_counter');

  if (b === null) {
      b = 0;
  }

  b--;

  localStorage.setItem("gomme_counter", b);

  document.getElementById('myLI3').value = b;
}

function buttonClick4() {
  var c = localStorage.getItem('kremost_counter');

  if (c === null) {
      c = 0;
  }

  c++;

  localStorage.setItem("kremost_counter", c);

  document.getElementById('myLI4').value = c;
}
function buttonClickMinus4() {
  var c = localStorage.getItem('kremost_counter');

  if (c === null) {
      c = 0;
  }

  c--;

  localStorage.setItem("kremost_counter", c);

  document.getElementById('myLI4').value = c;
}
