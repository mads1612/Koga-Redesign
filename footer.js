 let footer;
 const urlVisit = "http://kbdesign.dk/kea/kogacenter/wordpress/wp-json/wp/v2/besog-os/426"

 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJson();
     getFooter();

 }

 async function getFooter() {
     const response = await fetch("inc/footer.html");
     const include = await response.text();
     document.querySelector("footer").innerHTML = include;
 }

 async function getJson() {
     let data = await fetch(urlVisit);
     side = await data.json();
     showFooter();
 }

 function showFooter() {
     document.querySelector(".aabningstider").textContent = side.aabningstider;
     document.querySelector(".tlf").textContent = `+45 ${side.telefonnummer}`;
     document.querySelector(".adresse").textContent = side.adresse;
     document.querySelector(".email").textContent = side.emailadresse;

 }
