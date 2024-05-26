let currentTile = 0;
let previousTile;

function hideTile() {
  if (currentTile == 0) {
    previousTile = 13; //seria visible el elemento final del array cuando comience de nuevo el loop
  } else {
    previousTile = currentTile - 1;
  }

  let currentTileElement = document.getElementsByClassName("tile")[currentTile];
  currentTileElement.style.setProperty("visibility", "hidden"); //hace invisible el elemento actual del array

  let previousTileElement = document.getElementsByClassName("tile")[previousTile];
  previousTileElement.style.setProperty("visibility", "visible"); //hace visible el elemento anterior del array

  currentTile++;

  if (currentTile > 13) {
    currentTile = 0; //vuelve a empezar
  }
}

function startInterval() {
  setInterval(hideTile, 500); //cada 5 segundos oculta un elemento
}

document.addEventListener("DOMContentLoaded", startInterval); //espera a que el dom termine de cargar
