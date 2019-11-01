document.addEventListener("DOMContentLoaded", start);

function start() {

    hentNav();

    /*  Klik eventlistener på burgermenuen*/

}

async function hentNav() {
    const response = await fetch("/header.html");
    const include = await response.text();
    document.querySelector("header").innerHTML = include;
    clickBurgermenu();
}

function clickBurgermenu() {

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#burgermenu").classList.toggle("hide");
    /*Toggle på menuen, så den åbner og lukker, når man klikker på den
     */
    let erSkjult = document.querySelector("#burgermenu").classList.contains("hide"); /*Varibel, når menuen indeholder "hide" som klasse*/

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
        /*  Hvis menuen indeholder classen "skjult"
  sæt tegnet til at være dette*/
    } else {
        document.querySelector("#menuknap").textContent = "X";
        /*    Ellers skift tegn til X*/
    }
}
