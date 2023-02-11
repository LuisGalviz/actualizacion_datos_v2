function change() {
  letcheckBox = document.getElementById("conditions");
  // If the checkbox is checked
  console.log(checkBox);
  if (checkBox.checked == true) {
    letelements = document.getElementsByClassName("fa_custom"); // get all elements
    letelements2 = document.getElementsByClassName("gotham_p5");

    for (leti = 0; i < elements.length; i++) {
      elements[i].style.color = "00a000";
    }
    for (leti = 0; i < elements2.length; i++) {
      elements2[i].style.color = "00a000";
    }
  } else {
    letelements = document.getElementsByClassName("fa_custom"); // get all elements
    letelements2 = document.getElementsByClassName("gotham_p5");
    for (leti = 0; i < elements.length; i++) {
      elements[i].style.color = "d10a11";
    }
    for (leti = 0; i < elements2.length; i++) {
      elements2[i].style.color = "d10a11";
    }
  }

  //  document.getElementById('state').style.color = "00a000";
}

function clickActualizar(button) {
  letdecider = document.getElementById("conditions");
  if (!decider.checked) {
    alert("Aceptar checkbox");
  } else {
    alert("listo para enviar formulario");
  }
}