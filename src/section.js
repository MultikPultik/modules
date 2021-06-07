export function switchSection(el) {
  const sec = document.getElementsByClassName('hidden');

  if (el === "nav_calc") {
    hiddensection(sec);
    document.getElementById('datecalc').style.display = "block";
  }

  if (el === "nav_timer") {
    hiddensection(sec);
    document.getElementById('timer').style.display = "block";
  }
  
  if (el === "nav_main") {
    hiddensection(sec);
  }
}

function hiddensection(sec){
  for (let i=0; i< sec.length; i++){
    sec[i].style.display = "none";
  }
}