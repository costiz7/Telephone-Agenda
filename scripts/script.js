//This is a constructor for every person that is going to be added to the agenda
function Person(lastName, firstName, phoneNumber){
    this.lastName = lastName;
    this.firstName = firstName;
    this.phoneNumber = phoneNumber;
}

//This is going to be the object array for every 'Person' object
const personArray = [];

//This Event Listener adds a 'Person' object from the input to the array and then displays it on the page
document.getElementById('btn-add').addEventListener('click', () => {
    const lastName = document.querySelector('#last-name > input').value;
    const firstName = document.querySelector('#first-name > input').value;
    const phoneNumber = document.querySelector('#phone-number > input').value;

    personArray.push({lastName, firstName, phoneNumber});

    displayPersons(personArray);
});

//This function displays all the 'Person' objects on the page
function displayPersons(personArray) {
    let tableWrapper = document.getElementById('table-wrapper');

    tableWrapper.innerHTML = '';
    
    personArray.forEach((person) => {
        tableWrapper.innerHTML += `<p>${person.lastName} ${person.firstName} ${person.phoneNumber}</p>`;
    } )
}