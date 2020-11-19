/*
Úkol:
=====
Tvoříš galerii obrázků. Seznam obrázků máš uložený v poli obrazky[].
Z celé galerie je vidět vždy jen jeden obrázek.
Na stránce jsou tlačítka "Předchozí" a "Další"- při stisknutí tlačítka
zobraz předchozí/následující obrázek (nahraď zdroj "src" obrázku
jménem nového obrázku).

Na stránce je také prvek <div id="pocitadlo", do kterého vždy vypiš,
název a pořadí obrázku, na kterém se nacházíš. Např. "ovce.jpg - 3 / 5".
Mysli na to, že člověk a JavaScript přemýšlí o "prvním" obrázku
každý trochu jinak :)


Bonusový úkol:
==============
Doplň logiku, která zajistí, že po poslední fotce následuje znovu
ta první a před první fotkou je znovu ta poslední. Tzn. galerii lze
procházet v kruhu "dokola".

Tlačítka předchozí/následující nahraď malým náhledem dalšího/
předcházejícího obrázku. Všechny tři obrázky (velký aktuální a malý
předchozí/následující se samozřejmě budou měnit adekvátně tomu, jak procházíš
galerií.


Extra bonus pro mega-šprtky:
============================
Na konec stránky přidej proužek, kde budou malé náhledy všech obrázků
v galerii. Aktuální obrázek bude vždy nějakým způsobem zvýrazněn.

Co musíš udělat:
- doplnit do HTML značku, do které pak JavaScriptem vygeneruješ seznam obrázků
- trochu CSS, aby to nevypadalo úplně příšerně. Pokud CSS neovládáš tak dobře,
netrap se tím - jde nám hlavně o JavaScript. Případně se zeptej na Facebooku
a my ti rádi připravíme CSS na míru tvému řešení úkolu.
- při startu stránky musíš do svého nového HTML prvku vygenerovat seznam
všech obrázků v galerii
- aktuální obrázek zvýraznit - např. přidáním nějaké třídy s červeným rámečkem
nebo něco podobného
- při změně obrázku odstranit zvýraznění z předchozího obrázku a zvýraznit nový

Na ty malé, JavaScriptem vygenerované obrázky nemusí jít klikat. Pokud to zvládneš,
klidně to udělej. Ale není to tak snadné a ukážeme si to až později v kurzu.
*/


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
        const miniObrazek = document.createElement("img");
        miniObrazek.src = `obrazky/${obrazky[i]}`;
        miniObrazek.width= 100;
        const li = document.createElement("li");
        li.appendChild(miniObrazek);
        miniGalerie.appendChild(li); 
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






