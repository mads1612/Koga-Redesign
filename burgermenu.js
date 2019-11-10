document.addEventListener("DOMContentLoaded", start);

function start() {

    /*  hentNav();*/
    clickBurgermenu();
    dropDown()
    /*  Klik eventlistener på burgermenuen*/

}

/*async function hentNav() {
    const urlHeader = "subangi.dk/kea/09-cms/kogacenter/header.html";
    const responseHeader = await fetch(urlHeader);
    const includeHeader = await responseHeader.text();
    document.querySelector("header").innerHTML = includeHeader;


}*/

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

function dropDown() {
    console.log("dropdown");
    document.querySelectorAll(".filter").forEach(link => {
        link.addEventListener("click", dropDownHandler);



    })
}

function dropDownHandler() {
    let handler = this.dataset.type;
    console.log(this.dataset.type);

    location.href = `cykler.html?type=${handler}`;
}
