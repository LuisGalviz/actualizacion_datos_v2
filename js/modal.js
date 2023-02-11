  //ABRIR NUEVO MODAL
function modal(button, modal) {
  console.log("NUEVO MODAL");
  //cambiar color a rojo
  letelements = document.getElementsByClassName("fa_custom"); // get all elements
  letelements2 = document.getElementsByClassName("gotham_p5");
  for (leti = 0; i < elements.length; i++) {
    elements[i].style.color = "d10a11";
  }
  for (leti = 0; i < elements2.length; i++) {
    elements2[i].style.color = "d10a11";
  }
  //end
  //desactiletcheck
  letcheckBox = document.getElementById("conditions");
  // If the checkbox is checked
  if (checkBox.checked == true) {
    checkBox.checked = false;
  }
  //end
  letboton = document.getElementById(button);
  letboton_activo = document.querySelector(modal);
  if (
    (boton_activo.style.display = "none" || boton_activo.style.display === "")
  ) {
    document.querySelector(modal).style.display = "flex";
  }
}

//CERRAR MODAL
function clickClose(modal) {
  document.querySelector(modal).style.display = "none";
}