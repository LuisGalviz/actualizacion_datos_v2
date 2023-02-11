  //ABRIR NUEVO MODAL
function modal(button, modal) {
  console.log("NUEVO MODAL");
  //cambiar color a rojo
  let elements = document.getElementsByClassName("fa_custom"); // get all elements
  let elements2 = document.getElementsByClassName("gotham_p5");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "d10a11";
  }
  for (let i = 0; i < elements2.length; i++) {
    elements2[i].style.color = "d10a11";
  }
  //end
  //desactiletcheck
  let checkBox = document.getElementById("conditions");
  // If the checkbox is checked
  if (checkBox.checked == true) {
    checkBox.checked = false;
  }
  //end
  let boton = document.getElementById(button);
  let boton_activo = document.querySelector(modal);
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