//add event handler with withdraw button

document.getElementById('btn-withdraw').addEventListener('click',function(){
    //get withdraw amount from withdraw ibput 
    const withdrawField=document.getElementById('withdraw-amount');
    const newWithdrawAmountString=withdrawField.value;
    //convert the input to float number
    const newWithdeawAmount=parseFloat(newWithdrawAmountString);

    //clear input field
    withdrawField.value='';
    
    if(isNaN(newWithdeawAmount)){
        alert('Please Provide a valid amount!!')
        return;
    }
    
    //get previous withdraw total

    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);

    

    

    //get the previous balance total
    const balanceTotalElement=document.getElementById('total-balance');
    const previousDepositTotalstring=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousDepositTotalstring);

    

    if(newWithdeawAmount>previousBalanceTotal){
        alert('There is not enougn money to withdraw in the Baper Bank');
        return
    }

    //calculate total withdraw amount
    const currentWithdrawTotal=previousWithdrawTotal+newWithdeawAmount;

    //set total withdraw amount

    withdrawTotalElement.innerText=currentWithdrawTotal;

    //calculate new balance total & set

    const newBalanceTotal= previousBalanceTotal-newWithdeawAmount;
    balanceTotalElement.innerText=newBalanceTotal;

})