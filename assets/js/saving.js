// income input function 
function incomeInputValue(){
   // income input value received
   const incomeInput = document.getElementById('income');
   const incomeInputValue = incomeInput.value;
   const incomeConvertInteger = parseInt(incomeInputValue);
   // income All security system and alert message 
   if(isNaN(incomeConvertInteger)){
      // check Number value
      document.getElementById('hide-alert14').style.display="block";

   }else if(incomeConvertInteger < 0){
      // check nagative value 
      document.getElementById('hide-alert7').style.display="block";
      document.getElementById('hide-alert14').style.display="none";
      
   }else{
      return incomeConvertInteger;
   }
  

}
// all expenses field control function
function totalExpensesAll(){

   // Expenses input value received
   // food input value received
   const foodInputValue = document.getElementById('food').value;
   const foodInputConInt = parseInt(foodInputValue);
  
   // rent input value received
   const rentInputValue = document.getElementById('rent').value;
   const rentInputConInt = parseInt(rentInputValue)

   // clothes input value received
   const clothesInputValue = document.getElementById('clothes').value;
   const clothesInputConInt = parseInt(clothesInputValue);

   // All expense value calculate 
   const totalExpenses = foodInputConInt + rentInputConInt + clothesInputConInt;
   const totalIncome = incomeInputValue()

   // alert and other security system 
   if(totalExpenses > totalIncome){
      // Costs are higher than your income
      document.getElementById('hide-alert2').style.display="block";
   }else if(isNaN(foodInputConInt) || isNaN(rentInputConInt) || isNaN(clothesInputConInt)){
      // Please input the only number value
      document.getElementById('hide-alert11').style.display="block";
   }else if(rentInputConInt < 0 || foodInputConInt < 0 || clothesInputConInt < 0){
      // negative value is not allowed
      document.getElementById('hide-alert8').style.display="block";
   }else{

      if(isNaN(totalIncome)){
         document.getElementById('hide-alert4').style.display="block";
         const totalExpensesIsZero = 0;
         return totalExpensesIsZero;
      }else{
         return totalExpenses;
      }
      
     
   }
   
}
// calculate total balance and use function 
function calculateTotalBalance(){
   var totalIncome = incomeInputValue();
   var totalExpenses = totalExpensesAll();
   var totalBalance = totalIncome - totalExpenses;
   return totalBalance;

}
// calculate button control 
document.getElementById('calculate').addEventListener('click', function(){
   var totalIncome = incomeInputValue();
   var totalExpenses = totalExpensesAll();
   const totalBalance = totalIncome - totalExpenses;
   document.getElementById('expenses').innerText = totalExpenses;
   document.getElementById('balance').innerText = totalBalance;

});
// save button control 
document.getElementById('save').addEventListener('click', function(){
   const percentValue = document.getElementById('percent').value;
   const totalIncome = incomeInputValue();
   const totalBalance = calculateTotalBalance()
   const savingAmount = (totalIncome * percentValue) / 100;
   const remainingAmount = totalBalance - savingAmount;
   const remainingAmountRound = remainingAmount.toFixed(2);
   if( savingAmount > totalBalance){
      // You don't have enough money to save
      document.getElementById('hide-alert').style.display="block"; 
   }else if(isNaN(parseInt(percentValue))){
      // Check Income And Expenses Field
      document.getElementById('hide-alert6').style.display="block";
   }else if(parseInt(percentValue) < 0){
      // negative value is not allowed
      document.getElementById('hide-alert12').style.display="block";
   }else{
      document.getElementById('savingamount').innerText = savingAmount;
      document.getElementById('remainingamount').innerText = remainingAmountRound;
   }
  

})






