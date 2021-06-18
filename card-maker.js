// Get Cards using DOM 
const cards = document.querySelectorAll('.card');
const resetBtn = document.querySelector('#reset');
const saveBtn = document.querySelector('#save');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const formHorizontal = document.querySelector('.form-horizontal');
const theCapture = document.querySelector('.chosen-container');
let theMessage = theCapture.querySelector('h2');
let theSender = theCapture.querySelector('h3');
const span = document.querySelector('span');

// Varabiles
let choosed;
let  choosedId;
let  choosedSrc;

// Functions 
function addFocus (e) {
    this.classList.add('focus');
}

function removeFocus (e) { 
    this.classList.remove('focus');
}

function chooseCard (e) {
    //check if there is any other image is choosed or not
    if (typeof choosed !== 'undefined') { 
        choosed.classList.remove('choosed');
    } 
    
    choosed = e.srcElement;
    choosedId = choosed.id;
    choosedSrc = choosed.src;
    this.classList.add('choosed');
}

function write () {

    if (messageInput.value == "" ) {
        theMessage.innerText = messageInput.placeholder;
    } else { 
        theMessage.innerText = messageInput.value;
    } 

    if (nameInput.value == "" ) {
        theSender.innerText = nameInput.placeholder;
    } else { 
        theSender.innerText = nameInput.value;
    } 

}

function save(e) {
    if (choosed == undefined) return alert("Choose Carf First!"); 
    span.classList.remove("closebtn");
    window.scrollTo(0,0);
    html2canvas(document.querySelector('#theImage'), {
        onrendered: function(canvas) {
            // document.body.appendChild(canvas);
          return Canvas2Image.saveAsPNG(canvas);
        }
    });
    span.classList.add("closebtn");
}

function reset (e) {
    choosed.classList.remove('choosed');
    nameInput.value = "" ;
    messageInput.value = "" ;
    theMessage.innerText = "" ;
    theSender.innerText = "" ;
    theCapture.style.display = "none";
}

// Events Listeners
cards.forEach(card => card.addEventListener('mouseover', addFocus) );
cards.forEach(card => card.addEventListener('mouseout', removeFocus) );
cards.forEach(card => card.addEventListener('click', chooseCard) );
cards.forEach(card => card.addEventListener('click', write) );
resetBtn.addEventListener('click', reset);
saveBtn.addEventListener('click', save);
