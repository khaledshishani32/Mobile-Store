

'use strict'

let allCustomer = [];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create a constructor function
function Customer(user, type) {

    this.user = user;
    this.type = type;
    this.newPhone = "New";
    this.usedPhone = "Used";

    allCustomer.push(this);
}
// genrate random price
Customer.prototype.randomPrice = function () {
    return `${randomNumber(100, 500)}`;
}

//check if used or new 

Customer.prototype.check = function () {
    let string1 = "New";
    let string2 = "Used";
    if (this.randomPrice <= 200) {
        return `${string2}`;
    } else if (this.randomPrice >= 300) {
        return `${string1}`;
    }
}

// get element by id 

let myElemnt = document.getElementById('parent');

let myTable = document.createElement('table');
myElemnt.appendChild(myTable);

let heading = ["User", "Type", "Price", "Condition"];

// create a head as alone
let headRow = document.createElement('tr');
myTable.appendChild(headRow);

for (let i = 0; i < heading.length; i++) {

    let firsTh = document.createElement('th');
    myTable.appendChild(firsTh);

    let headTd = document.createElement('td');
    firsTh.appendChild(headTd);

    headTd.textContent = heading[i];
}

// create render function

Customer.prototype.render = function () {

    let firstRow = document.createElement('tr');
    myTable.appendChild(firstRow);


    let userTd = document.createElement('td');
    firstRow.appendChild(userTd);
    userTd.textContent = `${this.user}`;

    let typeTd = document.createElement('td');
    firstRow.appendChild(typeTd);
    typeTd.textContent = `${this.type}`;

    let priceTd = document.createElement('td');
    firstRow.appendChild(priceTd);
    priceTd.textContent = `${this.randomPrice()}`;

    let checkTd = document.createElement('td');
    firstRow.appendChild(checkTd);
    checkTd.textContent = `${this.check()}`;


}

// form

let myform = document.getElementById('form');

// addlistenr

myform.addEventListener('submit', submitter);

function submitter(e) {

    e.preventDefault();
    //console.log(e);

    let userForm = e.target.userName.value;

    let userType = e.target.type.value;

    let newObject = new Customer(userForm, userType);

    newObject.render();
    setLocalData();


}





// set local storage data 

function setLocalData() {

    let stringData = JSON.stringify(allCustomer);
    localStorage.setItem('customer', stringData);
}

// get local storage data


function getLocalData() {
    let formLocal = localStorage.getItem('customer');

    let objForm = JSON.parse(formLocal);

    if (objForm) {
        for (let i = 0; i < objForm; i++) {

            let newObj = new Customer(objForm[i].user, objForm[i].type, objForm[i].randomPrice);

            newObj.render();
        }
    }
}


for(let i = 0 ; i<allCustomer.length;i++){
    allCustomer[i].render();
}

getLocalData();






