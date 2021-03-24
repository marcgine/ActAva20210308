function mostraAlertaJPC() {
  alert("Alerta!");
}
function passarSeguentMVB(objRebut) {
  let idObjPregAct = objRebut.parentElement.parentElement.id;
  let objPregAct = document.getElementById(idObjPregAct);
  let colArticles = document.getElementsByTagName("article");
  let idObjPregSeg;
  for (let i = 0; i < colArticles.length; i++) {
    if (colArticles[i].id == idObjPregAct) {
      idObjPregSeg = colArticles[i + 1].id;
      break;
    };
  }

  let objPregSeg = document.getElementById(idObjPregSeg);
  objPregAct.classList.remove("mostraMVB");
  objPregAct.classList.add("amagarMVB");
  objPregSeg.classList.add("mostraMVB");
  objPregSeg.classList.remove("amagarMVB");
}

function passarAnteriorMVB(objRebut) {
  let idObjPregAct = objRebut.parentElement.parentElement.id;
  let objPregAct = document.getElementById(idObjPregAct);
  let colArticles = document.getElementsByTagName("article");
  let idObjPregAnt;
  for (let i = 0; i < colArticles.length; i++) {
    if (colArticles[i].id == idObjPregAct) {
      idObjPregAnt = colArticles[i - 1].id;
      break;
    };
  }
  let objPregAnt = document.getElementById(idObjPregAnt);
  objPregAct.classList.remove("mostraMVB");
  objPregAct.classList.add("amagarMVB");
  objPregAnt.classList.add("mostraMVB");
  objPregAnt.classList.remove("amagarMVB");
}
