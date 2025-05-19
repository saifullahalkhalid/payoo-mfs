// show the cash out form

document.getElementById('btn-show-cash-out').addEventListener('click', function(){

// console.log('cash out button clicked ');

// show the cash out form and hide add money form

document.getElementById('cash-out-form').classList.remove('hidden');

// hide the add money form

document.getElementById('add-money-form').classList.add('hidden');


})


// show the add money form and hide the cash out form

document.getElementById('btn-show-add-money').addEventListener('click', function(){

// console.log('add money button clicked')

document.getElementById('add-money-form').classList.remove('hidden');

document.getElementById('cash-out-form').classList.add('hidden');



})