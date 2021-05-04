let brochas = 0;
let llaves = 0;
let martillos = 0;
let troncos = 0;
let brochasHTML = "";
let martillosHTML = "";
let llavesHTML = "";
let troncosHTML = "";

function masBrocha() {
  brochas++;
  imprimeCesta();
}
function menosBrocha() {
  brochas--;
  imprimeCesta();
}

function masLlave() {
  llaves++;
  imprimeCesta();
}
function masLlave() {
  llaves++;
  imprimeCesta();
}
function menosLlave() {
  llaves--;
  imprimeCesta();
}

function masMartillo() {
  martillos++;
  imprimeCesta();
}
function menosMartillo() {
  martillos--;
  imprimeCesta();
}

function masTronco() {
  troncos++;
  imprimeCesta();
}
function menosTronco() {
  troncos--;
  imprimeCesta();
}

function imprimeCesta() {
  if (brochas >= 0) {
    brochasHTML = "";
    for (let i = 1; i <= brochas; i++) {
      brochasHTML += `<img src="iconos/Copia de brocha.svg" alt="Brocha" />`;
    }
  }
  if (llaves >= 0) {
    llavesHTML = "";
    for (let i = 1; i <= llaves; i++) {
      llavesHTML += `<img src="iconos/Copia de llave.svg" alt="Brocha" />`;
    }
  }
  if (martillos >= 0) {
    martillosHTML = "";
    for (let i = 1; i <= martillos; i++) {
      martillosHTML += `<img src="iconos/Copia de martillo.svg" alt="Brocha" />`;
    }
  }
  if (troncos >= 0) {
    troncosHTML = "";
    for (let i = 1; i <= troncos; i++) {
      troncosHTML += `<img src="iconos/Copia de tronco.svg" alt="Brocha" />`;
    }
  }

  document.getElementById("cesta").innerHTML = `
  <h3>Brochas:</h3><p>${brochas}</p><div>${brochasHTML}</div>
  <h3>Llaves:</h3><p>${llaves}</p><div>${llavesHTML}</div>
  <h3>Martillos:</h3><p>${martillos}</p><div>${martillosHTML}</div>
  <h3>Troncos:</h3><p>${troncos}</p><div>${troncosHTML}</div>`;
}
