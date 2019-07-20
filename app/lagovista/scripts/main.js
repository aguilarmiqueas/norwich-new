"use strict";
const formOverlay = document.querySelector(".form-overlay");
const botonDeVolver = document.querySelector(".Informacion-right-volver");

const botonesDeAbrir = document.querySelectorAll(".abrirPopup");

let listaDeBotonesPopup = [];
listaDeBotonesPopup.push(botonDeVolver);

botonesDeAbrir.forEach(botonDeAbrir => {
  listaDeBotonesPopup.push(botonDeAbrir);
});

listaDeBotonesPopup.forEach(botonPopup => {
  botonPopup.addEventListener("click", function() {
    formOverlay.classList.toggle("form-overlay-open");
  });
});

window.onload = function() {
  $("#Galeria").slick({
    dots: true,
    arrows: false,
    adaptiveHeight: true
  });
};
