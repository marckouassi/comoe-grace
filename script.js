const form = document.getElementById("loveForm");
const sections = document.querySelectorAll(".locked");

const music = document.getElementById("loveMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
    music.play();
    musicBtn.textContent = "Musique lancée ❤️";
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const prenom = document.getElementById("prenom").value;
    const date = document.getElementById("date").value;
    const lieu = document.getElementById("lieu").value;
    const surnom = document.getElementById("surnom").value;

    document.getElementById("titreHistoire").innerHTML = `${prenom} & Comoe ♡`;
    document.getElementById("finalPrenom").innerHTML = `${prenom},`;

    document.getElementById("histoireTexte").innerHTML = `
        Chère ${prenom},<br><br>
        aujourd'hui ce site est entièrement dédié à toi.<br><br>
        Depuis le jour où nous nous sommes rencontrés à ${lieu},
        ma vie a commencé à prendre une couleur différente.<br><br>
        Depuis notre date du ${date},
        j'ai appris à découvrir une personne exceptionnelle, attentionnée et unique.<br><br>
        Quand je t'appelle ${surnom}, ce n'est pas simplement un surnom.
        C'est ma façon à moi de te rappeler la place spéciale que tu occupes dans mon cœur.<br><br>
        Chaque sourire de toi éclaire mes journées.
        Chaque message de toi rend mes moments plus beaux.<br><br>
        Merci d'être toi. Merci d'être entrée dans ma vie. ❤️
    `;

    document.getElementById("message1").innerHTML =
        `${prenom}, merci d’être toi, d’être là, et d’apporter autant de douceur dans ma vie.`;

    document.getElementById("message2").innerHTML =
        `Quand je pense à ${lieu}, je me rappelle que c’est là qu’une belle partie de mon histoire a commencé.`;

    document.getElementById("message3").innerHTML =
        `${surnom}, tu es ma plus belle chance et l’une des plus belles personnes que la vie m’a données.`;

    document.getElementById("promesse1").innerHTML =
        `Je te promets, ${prenom}, de t’aimer sincèrement chaque jour.`;

    document.getElementById("promesse2").innerHTML =
        `Je te promets d’être là pour toi, dans les bons comme dans les mauvais moments.`;

    document.getElementById("promesse3").innerHTML =
        `Je te promets de faire de mon mieux pour te voir sourire, ${surnom}.`;

    document.getElementById("promesse4").innerHTML =
        `Je te promets de rester vrai, fidèle et présent pour toi.`;

    sections.forEach(section => {
        section.classList.add("show");
    });

    document.getElementById("histoire").scrollIntoView({
        behavior: "smooth"
    });
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

const startDate = new Date("2026-02-20T00:00:00");

function updateLoveCounter() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
}

updateLoveCounter();
setInterval(updateLoveCounter, 60000);

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