let colleccioElements = new Array();
let llistaElements = document.getElementById("llistaElements");

function afegirElementAColleccioMVB() {
  let elementAAfegir = document.getElementById("elementAAfegir");
  if (elementAAfegir.value == "") {
    alert("L'objecte ha de tenir nom!!!");
  } else {
    colleccioElements.push(elementAAfegir.value);
    alert("Element " + elementAAfegir.value + " afegit correctament " + "a la posició " + colleccioElements.indexOf(elementAAfegir.value));
    document.getElementById('elementAAfegir').value = null;
  }
};

function mostrarElementsDeLaColleccio() {
  let cadLlistaElem = "";
  for (let i = 0; i < colleccioElements.length; i++) {
    cadLlistaElem = cadLlistaElem + i + " - " + colleccioElements[i] + "<br>";
  }
  llistaElements.innerHTML = cadLlistaElem;
}

function netejaColleccio() {
  colleccioElements = "";
  alert("S'ha buidat la col·leció!");
}
