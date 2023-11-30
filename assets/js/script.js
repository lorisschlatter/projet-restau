// AJOUT D'UN CAROUSEL SUR LA SECTION CARTE

// Ici, on récupère les variables nécessaires (deux boutons, images et conteneur images)
// La logique est d'incruster le code dans une fonction qui se déclenchera au click
// sur le bouton gauche ou droit. Au click, la source de l'image prend +1 ou -1
// Par exemple, on passe de l'image food_6_dark.jpg à food_7_dark.jpg
// On ajoute ensuite une animation qui passe d'une opacité 0.7 à 1 pour faire un fondu
// entre les images, le fond étant noir, on a donc un effet de fondu au noir léger et rapide.

let image = document.querySelector(".carIMG img");
let button = document.querySelector(".button");
let button2 = document.querySelector(".button2");
let container_image = document.querySelector(".imgCarouss");

let number = 1

button.addEventListener("click", () => {

    image.style.opacity = 0.7;

    setTimeout(() => {
        image.src = "assets/img/food_" + number + "_dark.jpg";
        if (number == 11) {
            number = 1
        }

        image.style.opacity = 1;
        number++

    }, 200)
})

button2.addEventListener("click", () => {

    image.style.opacity = 0.7;

    setTimeout(() => {

        image.src = "assets/img/food_" + number + "_dark.jpg";
        if (number == 1) {
            number = 11
        }

        image.style.opacity = 1;
        number--

    }, 200)

})

// BOUTON LAISSER UN AVIS

// Si l'utilisateur ne rentre rien et appuie sur "OK" le message sera marqué comme annulé

let avis = document.querySelector('.h4Center')

avis.addEventListener("click" , function(){
    message = window.prompt("Entrez votre avis !");
    if (message.length){
        alert("Avis envoyé. Merci !")
    }else {
        alert("Message annulé.")
    }
})

// VERROUILLAGE BOUTON RESERVER

// Chaque champ html possède une classe html "required". Lorsque que le champ est respecté,
// la classe required disparait. Lorsque toutes les classes required sont enlevées,
// le bouton submit est "débloqué" et devient clickable.
// Une alert nous informe du bon déroulé de nos saisies et confirme notre réservation.

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");
    const submitBtn = document.getElementById("submit");

    form.addEventListener("input", function () {
        const inputs = form.querySelectorAll("input[required]");
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
            }
        });

        if (valid) {
            submitBtn.removeAttribute("disabled");
        } else {
            submitBtn.setAttribute("disabled", "disabled");
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputs = form.querySelectorAll("input[required]");
        let allFieldsFilled = true;

        inputs.forEach(input => {
            if (!input.value) {
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            alert("Votre réservation a été prise en compte !");
            form.reset();
            submitBtn.setAttribute("disabled", "disabled");
        } else {
            alert("Veuillez remplir tous les champs obligatoires !");
        }
    });
});

// MENU BURGER

// En responsive MOBILE ET TABLETTE, on cache la barre de navigation au profit
// d'un logo type burger menu. Au click sur ce logo, la barre de nav apparait mais
// cette fois-ci en display flex + flex direction column
// Le code jongle donc entre html, css et javascript dans le sens où l'on fait ajouter
// Une classe (html) avec un style précis (css) lors du click sur le bouton. Cette classe 
// disparait lors d'un nouveau click (codé avec un toggle en javascript).

var menu = document.getElementById("menu");
var burger = document.getElementById("iconBurger");
var all = document.getElementsByClassName("presentation");
var header = document.getElementsByTagName("header");

document.getElementById("burger").addEventListener("click" , function (){
    menu.classList.toggle("open");
    header.classList.toggle("reduceHeader");
})










