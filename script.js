const games = [
  { id: 324, name: "Great game", rating: 5.0 },
  { id: 124, name: "Ok game", rating: 3.0 },
  { id: 678, name: "Meh game", rating: 2.5 },
  { id: 28, name: "Terrible game", rating: 1.0 },
  { id: 4, name: "Mediocre game", rating: 3.0 },
];

const resultContainer = document.querySelector(".result-container");

games.forEach((games) => {
  resultContainer.innerHTML += `
    <ul class="card" >
        <li>Game: ${games.name}</li>
        <li>Rating: ${games.rating}</li>
    </ul>`;
});

const card = document.querySelectorAll(".card");

card.forEach((cards) => {
  cards.addEventListener("click", (event) => {
    event.target.classList.toggle("played");
  });
});
