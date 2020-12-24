const cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        removeClass();
        card.classList.toggle("active");
    });
});

function removeClass() {
    cards.forEach((card) => {
        card.classList.remove("active");
    });
}

