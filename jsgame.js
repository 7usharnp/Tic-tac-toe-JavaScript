let sign = "X";

function printx(number) {
  let clicker = document.getElementById("r" + number);
  if (clicker.innerText == "") {
    clicker.innerHTML = sign;
    checksign();
    winner();
  }
}

function checksign() {
  if (sign == "X") {
    sign = "O";
  } else {
    sign = "X";
  }
}

function getbox(no) {
  return document.getElementById("r" + no).innerHTML;
}

function checkmove(a, b, c, m) {
  if (getbox(a) == m && getbox(b) == m && getbox(c) == m) {
    return true;
  } else {
    return false;
  }
}

function winner() {
  if (
    checkmove(1, 2, 3, "X") ||
    checkmove(4, 5, 6, "X") ||
    checkmove(7, 8, 9, "X") ||
    checkmove(1, 4, 7, "X") ||
    checkmove(2, 5, 8, "X") ||
    checkmove(3, 6, 9, "X") ||
    checkmove(1, 5, 9, "X") ||
    checkmove(3, 5, 7, "X")
  ) {
    const winner = document.getElementById("winner");
    winner.innerHTML = "Player One is Winner";
    const gamefinished = document.getElementById("table");
    gamefinished.style.display = "none";
  } else if (
    checkmove(1, 2, 3, "O") ||
    checkmove(4, 5, 6, "O") ||
    checkmove(7, 8, 9, "O") ||
    checkmove(1, 4, 7, "O") ||
    checkmove(2, 5, 8, "O") ||
    checkmove(3, 6, 9, "O") ||
    checkmove(1, 5, 9, "O") ||
    checkmove(3, 5, 7, "O")
  ) {
    const winner = document.getElementById("winner");
    winner.innerHTML = "Player Two is Winner";
    const gamefinished = document.getElementById("table");
    gamefinished.style.display = "none";
  }
}
