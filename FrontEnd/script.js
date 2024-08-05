const works = await fetch('http://localhost:5678/api/works');
const retourWorks = await works.json();
console.log(retourWorks);

// Affichage des travaux sur la page d'accueil
for (let i = 0; i < retourWorks.length; i++) {
    const gallery = document.querySelector('.gallery');
    const figure = document.createElement('figure');
    figure.innerHTML = `<img src="${retourWorks[i].imageUrl}" alt="${retourWorks[i].title}"> <figcaption>${retourWorks[i].title}</figcaption>`;
    gallery.appendChild(figure);
}
