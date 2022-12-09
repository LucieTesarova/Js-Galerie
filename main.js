
let obrazky = [
    'kocka.jpg',
    'opice.jpg',
    'ovce.jpg',
    'pes.jpg',
    'sova.jpg',
    'zajic.jpg'
];

const foto = document.querySelector("#foto");
const sipkaVlevo = document.querySelector(".sipka:first-child");
const sipkaVpravo = document.querySelector(".sipka:last-child");
const pocitadlo = document.querySelector("#pocitadlo");

let aktualniPoziceFota = 0;
let predchoziPozice = 0;
foto.src = `obrazky/${obrazky[aktualniPoziceFota]}`;

vytvorMiniGalerii();
aktualizujText();
upravSipky();
zvyrazni();

sipkaVpravo.addEventListener("click", function(){
    predchoziPozice = aktualniPoziceFota;
    aktualniPoziceFota++;
    if(aktualniPoziceFota >= obrazky.length){
        aktualniPoziceFota = 0;
    }
    foto.src = `obrazky/${obrazky[aktualniPoziceFota]}`;
    upravStyly();
});

sipkaVlevo.addEventListener("click", function(){
    predchoziPozice = aktualniPoziceFota;
    aktualniPoziceFota--;
    if(aktualniPoziceFota < 0){
        aktualniPoziceFota = obrazky.length-1;
    }
    foto.src = `obrazky/${obrazky[aktualniPoziceFota]}`;
    upravStyly();
});

function upravStyly(){
    aktualizujText();
    upravSipky();
    zvyrazni();
    odeberZvyrazneni(predchoziPozice);
};

function aktualizujText(){
    pocitadlo.textContent = `${obrazky[aktualniPoziceFota]} - ${aktualniPoziceFota+1}/${obrazky.length}`;
};

function upravSipky(){
    if(aktualniPoziceFota === 5){
        sipkaVpravo.src = `obrazky/${obrazky[0]}`;
    }else{
        sipkaVpravo.src = `obrazky/${obrazky[aktualniPoziceFota+1]}`;
    }

    if(aktualniPoziceFota === 0){
        sipkaVlevo.src = `obrazky/${obrazky[obrazky.length-1]}`;
    }else{
        sipkaVlevo.src = `obrazky/${obrazky[aktualniPoziceFota-1]}`;
    }
}

function vytvorMiniGalerii(){
    const miniGalerie = document.querySelector(".mini-galerie");

    for(let i =0; i <obrazky.length; i++){
        miniGalerie.innerHTML += "<li><img src=" + 'obrazky/' + obrazky[i] + " width=100" + "></li>"
    }
};

function zvyrazni(){
    const miniFota = Array.from(document.querySelectorAll('.mini-galerie>li>img'));
    miniFota[aktualniPoziceFota].classList.add("zvyrazni");
};

function odeberZvyrazneni(predchoziPozice){
    const miniFota = Array.from(document.querySelectorAll('.mini-galerie>li>img'));
    miniFota[predchoziPozice].classList.remove("zvyrazni");
};






