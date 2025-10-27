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
window.personArray = [];

//This Event Listener adds a 'Person' object from the input to the array and then displays it on the page
document.getElementById('btn-add').addEventListener('click', () => {
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    if(checkAddErrors(lastName, firstName, phoneNumber)) return;
    
    personArray.push(new Person(lastName, firstName, phoneNumber));

    addPerson(personArray);
    if(Person.count > 0)
        document.getElementById('table-wrapper').classList.add('opacity');
    document.getElementById('lastName').placeholder="";
    document.getElementById('lastName').value = "";
    document.getElementById('firstName').placeholder="";
    document.getElementById('firstName').value = "";
    document.getElementById('phoneNumber').placeholder="";
    document.getElementById('phoneNumber').value = "";
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

    if (index !== -1 || !checkDeleteErrors(lastName, firstName, phoneNumber)) {
        personArray.splice(index, 1);
        Person.count--;
    } else {
        return;
    }

    addPerson(personArray);
    if(Person.count <= 0)
        document.getElementById('table-wrapper').classList.remove('opacity');
    document.getElementById('lastName').placeholder="";
    document.getElementById('lastName').value = "";
    document.getElementById('firstName').placeholder="";
    document.getElementById('firstName').value = "";
    document.getElementById('phoneNumber').placeholder="";
    document.getElementById('phoneNumber').value = "";;
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
    document.querySelector('#table-wrapper > span').textContent = `Number of people: `;
    document.querySelector('#table-wrapper > span').textContent += `${Person.count}`;
}

function checkAddErrors(lastName, firstName, phoneNumber){
    let checkError = false;
    if(!lastName){
        const wrapper = document.getElementById('lastName').closest('.input-wrapper');
        wrapper.classList.add('shake');
        document.getElementById('lastName').placeholder="No Last Name? :(";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }
    if(!firstName){
        const wrapper = document.getElementById('firstName').closest('.input-wrapper');
        wrapper.classList.add('shake');
        document.getElementById('firstName').placeholder="No First Name? :(";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }
    if(!phoneNumber){
        const wrapper = document.getElementById('phoneNumber').closest('.input-wrapper');
        wrapper.classList.add('shake');
        document.getElementById('phoneNumber').placeholder="No phone number? </3";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }

    return checkError;
}

function checkDeleteErrors(lastName, firstName, phoneNumber){
    let checkError = false;
    if(!lastName || !personArray.some(p => p.lastName === lastName)){
        const wrapper = document.getElementById('lastName').closest('.input-wrapper');
        wrapper.classList.add('shake');
        document.getElementById('lastName').value="";
        document.getElementById('lastName').placeholder="This doesn't exist! ._.";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }
    if(!firstName || !personArray.some(p => p.firstName === firstName)){
        const wrapper = document.getElementById('firstName').closest('.input-wrapper');
        wrapper.classList.add('shake');
        document.getElementById('firstName').value="";
        document.getElementById('firstName').placeholder="This doesn't exist! ._.";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }
    if(!phoneNumber || !personArray.some(p => p.phoneNumber === phoneNumber)){
        const wrapper = document.getElementById('phoneNumber').closest('.input-wrapper');
        wrapper.classList.add('shake');
        document.getElementById('phoneNumber').value="";
        document.getElementById('phoneNumber').placeholder="This doesn't exist! ._.";

        setTimeout(() => {
            wrapper.classList.remove('shake');
        }, 300);
        checkError = true;
    }

    return checkError;
}