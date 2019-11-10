 let footer;
 const urlVisit = "http://kbdesign.dk/kea/kogacenter/wordpress/wp-json/wp/v2/besog-os/426"

 document.addEventListener("DOMContentLoaded", start);

 function start() {
     getJsonFooter();
     /* getFooter();*/

 }

 /* async function getFooter() {
      const responseFooter = await fetch("http://subangi.dk/kea/09-cms/kogacenter/footer.html");
      const includeFooter = await responseFooter.text();
      document.querySelector("footer").innerHTML = includeFooter;
  }*/

 async function getJsonFooter() {
     let data = await fetch(urlVisit);
     sideFooter = await data.json();
     showFooter();
 }

 function showFooter() {
     document.querySelector(".aabningstider").textContent = sideFooter.aabningstider;
     document.querySelector(".tlf").textContent = `+45 ${sideFooter.telefonnummer}`;
     document.querySelector(".adresse").textContent = sideFooter.adresse;
     document.querySelector(".email").textContent = sideFooter.emailadresse;

 }
