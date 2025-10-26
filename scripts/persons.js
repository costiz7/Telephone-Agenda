//This is a class for every person that is going to be added to the agenda
class Person {
    static count = 0;

    constructor(lastName, firstName, phoneNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
        Person.count++;
    }
}

//This is going to be the object array for every 'Person' object
const personArray = [];

//This Event Listener adds a 'Person' object from the input to the array and then displays it on the page
document.getElementById('btn-add').addEventListener('click', () => {
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    personArray.push(new Person(lastName, firstName, phoneNumber));

    addPerson(personArray);
});

//This Event Listener removes a 'Person' object from the input in the array and then displays the remaining objects on the page
document.getElementById('btn-delete').addEventListener('click', () => {
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    const index = personArray.findIndex(person =>
        person.lastName === lastName &&
        person.firstName === firstName &&
        person.phoneNumber === phoneNumber
    );

    if (index !== -1) {
        personArray.splice(index, 1);
        console.log('Persoană ștearsă:', lastName, firstName);
        Person.count--;
    } else {
        console.log('Persoana nu a fost găsită');
    }

    addPerson(personArray);
});

//This function displays all the 'Person' objects on the page
function addPerson(personArray) {
    let tableWrapper = document.getElementById('agenda');

    tableWrapper.innerHTML = `
        <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Phone Number</th>
        </tr>`;
    
    personArray.forEach((person) => {
        tableWrapper.innerHTML += `
            <tr>
                <td>${person.lastName}</td> 
                <td>${person.firstName}</td> 
                <td>${person.phoneNumber}</td>
            </tr>`;
    } )
}