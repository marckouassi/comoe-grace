const form = document.getElementById("loveForm");
const sections = document.querySelectorAll(".locked");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const prenom = document.getElementById("prenom").value;
    const date = document.getElementById("date").value;
    const lieu = document.getElementById("lieu").value;
    const surnom = document.getElementById("surnom").value;

    document.getElementById("titreHistoire").innerHTML =
        `${prenom} & Comoe ♡`;

    document.getElementById("histoireTexte").innerHTML = `

        Chère ${prenom},

        aujourd'hui ce site est entièrement dédié à toi.

        Depuis le jour où nous nous sommes rencontrés à ${lieu},
        ma vie a commencé à prendre une couleur différente.

        Depuis notre date du ${date},
        j'ai appris à découvrir une personne exceptionnelle,
        attentionnée et unique.

        Quand je t'appelle ${surnom},
        ce n'est pas simplement un surnom.
        C'est ma façon à moi de te rappeler
        la place spéciale que tu occupes dans mon cœur.

        Chaque sourire de toi éclaire mes journées.
        Chaque message de toi rend mes moments plus beaux.

        Je voulais créer ce petit espace juste pour toi,
        afin que tu saches que derrière chaque photo,
        chaque souvenir et chaque promesse,
        il y a quelqu'un qui tient énormément à toi.

        Merci d'être toi.
        Merci d'être entrée dans ma vie.
        Et merci pour tous les moments que nous partageons ensemble. ❤️
    `;

    sections.forEach(section => {
        section.classList.add("show");
    });

    document.getElementById("histoire").scrollIntoView({
        behavior: "smooth"
    });

});

document.addEventListener("click", function (e) {

    const heart = document.createElement("div");

    heart.className = "click-heart";

    heart.innerHTML = "❤";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

});

const voirPlusBtn = document.getElementById("voirPlusBtn");
const moreSouvenirs = document.querySelectorAll(".more-souvenir");

voirPlusBtn.addEventListener("click", function () {
    moreSouvenirs.forEach(item => {
        item.classList.toggle("show-more");
    });

    if (voirPlusBtn.textContent.includes("Voir plus")) {
        voirPlusBtn.textContent = "Voir moins de souvenirs 💕";
    } else {
        voirPlusBtn.textContent = "Voir plus de souvenirs 📸";
    }
});