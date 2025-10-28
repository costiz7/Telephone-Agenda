//This script was made for implementing cache functionality amd a flip animation for theme-button
window.addEventListener("DOMContentLoaded", () => {
    const storedPeople = JSON.parse(localStorage.getItem("personArray")) || [];
    personArray.push(...storedPeople.map(p => new Person(p.lastName, p.firstName, p.phoneNumber)));
    
    if (personArray.length > 0) {
        Person.count = personArray.length;
        addPerson(personArray);
        document.getElementById('table-wrapper').classList.add('opacity');
    }
});


const toggleBtn = document.querySelector('.flip-button');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.querySelector('.flip-button').classList.toggle('flipped');
});