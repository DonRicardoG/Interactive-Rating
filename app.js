const btnSubmit = document.querySelector('#btnSubmit');
const rate = document.querySelector('#rating');
const thankyouPage = document.querySelector('.thankyouPage');
const mainPage = document.querySelector('.mainPage');
const values = document.querySelector('#rateValues');
let rateValue = false;

eventListeners();


function eventListeners(){
    btnSubmit.addEventListener('click', submitFunction);

    values.addEventListener('click' , obtainRating);
}

function obtainRating(e){
    const rating = e.target.textContent;

    rate.innerHTML = `You selected ${rating} out of 5`;

    rateValue = true;
}


function submitFunction(e){
    e.preventDefault();

    if(rateValue === false){
        alert('Please select a rate');
    }else{
        thankyouPage.classList.toggle('block');
        mainPage.classList.toggle('none');
    }
    
}



