// add money to  the account 
/*
step-1: add event handler
>prevent page reload

step-2: get money to be added to the account
>get the pin number
step-3:
*/


// step - 1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){

    // prevent page reload after form submit
event.preventDefault();

// step-2: get money to be added to the account balance

const addMoneyInput = document.getElementById('input-add-money').value;

console.log(addMoneyInput);

const pinNumberInput = document.getElementById('input-pin-number').value;

console.log(pinNumberInput);

// step-3: verify the pin number

if(pinNumberInput ==='123456'){
    // console.log('adding money to your account');
// get the current balance 
const balance = document.getElementById('account-balance').innerText;

// console.log(balance)

// step-5: add addMoneyInput with balance 

const addMoneyNumber = parseFloat(addMoneyInput);
const balanceNumber = parseFloat(balance);
// console.log(addMoneyNumber)
const newBalance = addMoneyNumber + balanceNumber;
console.log(newBalance)

// step-6: Update the balance in the UI/DOM
document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('Failed to add money! please try again');
}

})