

document.getElementById('btn-cash-out').addEventListener('click', function(event){

event.preventDefault();

const cashOutInput = document.getElementById('input-cash-out').value;

// console.log(cashOutInput)
const cashOutPin = document.getElementById('input-cash-out-pin').value;

// console.log(cashOutInput,cashOutPin)

// verify pin number 

if(cashOutPin === '123456'){

   const balance = document.getElementById('account-balance').innerText;
   const balanceNumber =parseFloat(balance);
   const cashOutInputNumber = parseFloat(cashOutInput);
//    console.log(balanceNumber, cashOutInputNumber)

const newBalance = balanceNumber - cashOutInputNumber;

document.getElementById('account-balance').innerText = newBalance;

}
else{

    alert("Cash Out Failed. Please try again later.")
}





})