//ABRIR NUEVO MODAL
function modal(modal) {
  let $boton = $(modal);
  if ($boton.css("display") === "none" || $boton.css("display") === "") {
    $(modal).css("display", "flex");
  }
}

//CERRAR MODAL
function clickClose(modal) {
  $(modal).css("display", "none");
}

function greenInputConfirm(elementId,elementId2,modal) {
  $(elementId).css("color", "rgb(0, 160, 0)");
  $(elementId2).css("display", "none");
  $(modal).css("display", "none");
}

//delete input
function deleteInput(id) {
  let idSinBarra = id.replace(/\\/g, "");
  const input = document.getElementById(`emailIdUpdate${idSinBarra}Value`);
  console.log(`emailIdUpdate${idSinBarra}Value`);
  console.log(input);
  input.classList.add("delete");
  input.addEventListener("animationend", () => {
    input.value = "";
    input.classList.remove("delete");
  });
}
function deleteInputTel(id) {
  const input = document.getElementById(`telIdUpdate${id}Value`);
  input.classList.add("delete");
  input.addEventListener("animationend", () => {
    input.value = "";
    input.classList.remove("delete");
  });
}

//Update Imput
function updateInput(id) {
  const input = document.getElementById(`telIdUpdate${id}Value`);
  const input2 = document.getElementById(`codePhone${id}`);
  console.log(input2)
  input.classList.add("update");
  input.addEventListener("animationend", () => {
    input.classList.remove("update");
  });

  input2.classList.add("update");
  input2.addEventListener("animationend", () => {
    input2.classList.remove("update");
  });
}


//loading
window.addEventListener("load", function(){
	const loader = document.querySelector("#loader");
	setTimeout(function(){
		loader.className += " oculto"; // añade la clase "oculto" al div loader después de 1 segundo
	}, 3000);
});