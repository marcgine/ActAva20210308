let resultat = document.getElementById("resultat");
function suma(){
  let primerNombre = document.getElementById("primerNombre").value;
  let segonNombre = document.getElementById("segonNombre").value;
  //alert("Has pitjat el botó suma!");
  resultat.value = parseInt(primerNombre) + parseInt(segonNombre);
  
}

function resta(){
    let primerNombre = document.getElementById("primerNombre").value;
    let segonNombre = document.getElementById("segonNombre").value;
  //alert("Has pitjat el botó resta!");
  resultat.value = parseInt(primerNombre) - parseInt(segonNombre);
}

function producte(){
    let primerNombre = document.getElementById("primerNombre").value;
    let segonNombre = document.getElementById("segonNombre").value;
 // alert("Has pitjat el botó producte!");
  resultat.value = parseInt(primerNombre) * parseInt(segonNombre);

}

function divisio(){
    let primerNombre = document.getElementById("primerNombre").value;
    let segonNombre = document.getElementById("segonNombre").value;
    if(primerNombre == 0 || segonNombre == 0){
        resultat.value = "ERROR NO ES POT DIVIDIR AMB UN 0"
    }else{
        resultat.value = parseInt(primerNombre) / parseInt(segonNombre);
    }
  //alert("Has pitjat el botó divisió!");
  
}