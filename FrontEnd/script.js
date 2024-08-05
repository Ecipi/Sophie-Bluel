const works = await fetch('http://localhost:5678/api/works');
const retourWorks = await works.json();
console.log(retourWorks);