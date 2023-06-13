//header footer et ajout de contenu en javascript pour navbar

let header = ["Accueil ", "Portfolio ", "Blog ", "Contact "]
let navbar = document.querySelector(".navbar");
let data = ["Ram", "Shyam", "Sita", "Gita"];
let list = document.getElementById("demo");
let image = ['logo-lift-digital.png']
let logo = document.querySelector(".logo")
let imagefoot = ['logo-lift-digital.png']
let logofoot = document.querySelector('.logo-foot')
let footcontent = ['rs', 'mail', 'phone']
let text = document.getElementById('text')
let btnContent = ['Contact']
let btnContact = document.getElementById ('btn_contact')
let contenttext = ['Nullam sed eros tortor. Nam pulvinar purus in felis varius iaculis. Vestibulum quis auctor arcu. Aenean augue urna, commodo a interdum vitae, rutrum a nisl.','  ', ' Aliquam eget leo quis sem auctor dapibus eget rhoncus risus. Quisque elit ipsum, rhoncus efficitur arcu ac, porta posuere diam. Proin sollicitudin varius eleifend. Cras a nisi dignissim neque placerat elementum. Vivamus eu pretium sem. Fusce quis bibendum lacus. Vestibulum a ligula in neque pulvinar tempor. Proin nec augue et tellus euismod bibendum. Aenean luctus eu justo nec dictum. Vestibulum sodales, leo sit amet consequat vehicula, nisi velit porta arcu, sed efficitur nisl quam sed enim.','Nullam sed eros tortor. Nam pulvinar purus in felis varius iaculis. Vestibulum quis auctor arcu. Aenean augue urna, commodo a interdum vitae, rutrum a nisl. Aliquam eget leo quis sem auctor dapibus eget rhoncus risus. Quisque elit ipsum, rhoncus efficitur arcu ac, porta posuere diam. Proin sollicitudin varius eleifend. Cras a nisi dignissim neque placerat elementum. Vivamus eu pretium sem. Fusce quis bibendum lacus. Vestibulum a ligula in neque pulvinar tempor. Proin nec augue et tellus euismod bibendum. Aenean luctus eu justo nec dictum. Vestibulum sodales, leo sit amet consequat vehicula, nisi velit porta arcu, sed efficitur nisl quam sed enim.', '   ', 'Nullam sed eros tortor. Nam pulvinar purus in felis varius iaculis. Vestibulum quis auctor arcu. Aenean augue urna, commodo a interdum vitae, rutrum a nisl.Nullam sed eros tortor. Nam pulvinar purus in felis varius iaculis. Vestibulum quis auctor arcu. Aenean augue urna, commodo a interdum vitae, rutrum a nisl.Nullam sed eros tortor. Nam pulvinar purus in felis varius iaculis. Vestibulum quis auctor arcu. Aenean augue urna, commodo a interdum vitae, rutrum a nisl.Nullam sed eros tortor. Nam pulvinar purus in felis varius iaculis. Vestibulum quis auctor arcu. Aenean augue urna, commodo a interdum vitae, rutrum a nisl.' ]
let content = document.getElementById('content')



for (let i = 0; i < data.length; i++) {
    list.innerHTML += "<li>" + data[i] + "</li>";
}
for (let i = 0; i < image.length; i++){
    logo.innerHTML += "<img src=" + image[i] +">";
}
for (let i = 0; i < header.length; i++) {
    navbar.innerHTML += "<a href='#'>"  + header[i]; +  "</a>";
}
for (let i = 0; i < imagefoot.length; i++){
    logofoot.innerHTML += "<img src=" + image[i] +">";
}
for (let v = 0; v < footcontent.length; v++){
    text.innerHTML += "<p>" + footcontent[v] + "</p>"
}
for (let v = 0; v < btnContent.length; v++){
    btnContact.innerHTML += "<button>" + btnContent[v] + "</button>"
}
for (let v = 0; v < contenttext.length; v++){
    content.innerHTML += "<p>" + contenttext[v] + "</p>"
}
//mdp pour entrez dans le site

function mdp (){
    do {
        var mdp = window.prompt("Entrez votre mot de passe");
        
    } while (mdp != "a");
}
//couleur paragraphe vert rouge bleu

function red (){
    let text = document.getElementById('content')
    text.innerHTML += "<style>.content{color:red;}</style>";
}
function blue (){
    let text = document.getElementById('content')
    text.innerHTML += "<style>.content{color:blue;}</style>";
}
function vert (){
    let text = document.getElementById('content')
    text.innerHTML += "<style>.content{color:green;}</style>";
}

//couleur pargraphe au choix

function custom (){
    let text = document.getElementById('content');
    var color = window.prompt("Couleur en anglais");
    text.innerHTML += "<style>.content{color:" + color + ";}</style>";
}

// horloge

var heuresDiv = document.querySelector('.heures');


function affichageHeure (){
var   heures, minutes, secondes, deuxChiffres;

today = new Date();

deuxChiffres = function(element){
    if(element < 10){
        return element = "0" + element;
    } else {
        return element;
    }
}

heures = deuxChiffres(today.getHours());

minutes = deuxChiffres(today.getMinutes());

secondes = deuxChiffres(today.getSeconds());

heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;



setTimeout(affichageHeure, 1000);
}

affichageHeure();

function briques (){
    var message = window.prompt('entrez votre message');
    let wall = document.getElementById('wall');

    wall.innerHTML += "<div class='case'><p>" + message + "</p></div>" ;
}


