/*
    Autuer: troy van sleeuwen, Romeo Vos, Luuk Vesters
    Aanmaakdatum: October 06 2021
    opdracht Team Liquid
*/
// gets complete path en strips it from /scripts/(filename)
var path = (window.location.pathname).replace("/scripts/"+((window.location.pathname).split("/").pop()),""); // string
// goes thro all anchor tags
for (let i = 0; i < document.getElementsByTagName("a").length; i++){
    // gets a anchor tag as element
    var element = document.getElementsByTagName("a")[i]; // element
    if (element.className === "navigation"){
        // gets the href atribute from the element
        var oldHref = element.getAttribute("href"); // string
        // remove the href atribute from the element
        element.removeAttribute("href");
        // set the href of the element to the path concated with the href in the html file
        element.setAttribute("href",path+oldHref);
    }
}

if(document.getElementById("navbar") == undefined){
    // gets the navbar tag and creates a iframe
    var navbars = document.getElementsByTagName("navbar"); //element array
    var navbar  = navbars[0]; // element
    var iframe  = document.createElement("iframe"); // element
    // set atributes of the iframe
    iframe.setAttribute("src","../scripts/navbar.template.html");
    iframe.setAttribute("id","nav-bar");

    // set is as a child to the first navbar element
    navbar.setAttribute("id","nav-bar");
    navbar.appendChild(iframe);
}
