var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let header = document.getElementById('tm-header')
    header.textContent = customerName

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
let intro =  document.getElementById('introheader')
intro.textContent = customerName
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let blue = document.querySelectorAll('tm-white-rect')
   for(let x = 0; x < blue.length; x++){
    blue[i].classList.add('tm-blue-rect');
    blue[i].classList.remove('tm-white-rect');
   }

};

function hideElement() {
    // ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    var socialLink = document.querySelector('.tm-social-links');
    socialLink.style.visibility = "none";
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let intro = document.getElementById('intropara1')
    intro.textContent = 'Alliance was founded by Adeshvir Dhanoa in 2022'

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let intro2 = document.getElementById('intropara2')
    intro2.textContent = 'We lead in data analyst and affilate marketing'

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
     let about1 = document.getElementById('aboutpara1')
     about1.textContent = 'We have the best servoce for major companies worldwide'

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
    let about2 = document.getElementById('aboutpara2')
    about2.textContent = 'Satisfaction is our main priority'

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
let number = document.getElementById('addresspara')
number.innerText = '999-999-999'
}; 



