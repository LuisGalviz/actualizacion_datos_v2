function change() {
  let  checkBox = document.getElementById("conditions");
  // If the checkbox is checked
  console.log(checkBox);
  if (checkBox.checked == true) {
    let elements = document.getElementsByClassName("fa_custom"); // get all elements
    let elements2 = document.getElementsByClassName("gotham_p5");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "00a000";
    }
    for (let i = 0; i < elements2.length; i++) {
      elements2[i].style.color = "00a000";
    }
  } else {
    let elements = document.getElementsByClassName("fa_custom"); // get all elements
    let elements2 = document.getElementsByClassName("gotham_p5");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "d10a11";
    }
    for (let i = 0; i < elements2.length; i++) {
      elements2[i].style.color = "d10a11";
    }
  }

  //  document.getElementById('state').style.color = "00a000";
}

function clickActualizar(button) {
  let decider = document.getElementById("conditions");
  if (!decider.checked) {
    alert("Aceptar checkbox");
  } else {
    alert("listo para enviar formulario");
  }
}