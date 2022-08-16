//add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //get the deposit anount from input
    const depositField=document.getElementById('deposit-amount');
    const newDepositAmountstring=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountstring);

    //clear the deposit input field
    depositField.value='';

    if(isNaN(newDepositAmount)){
        alert('Please Provide a valid amount!!')
        return;
    }
    
    //get the deposit total amount
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalstring=depositTotalElement.innerText;
    const previousDepositTotal= parseFloat(previousDepositTotalstring);
    const currentDepositTotal=previousDepositTotal+newDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;

    


    // balance total
    const balanceTotalElement=document.getElementById('total-balance');
    console.log(balanceTotalElement);
    const prevuousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(prevuousBalanceTotalString);

    //calculate total balance

    const currentBalanceTotal=previousBalanceTotal + newDepositAmount;
    console.log(currentBalanceTotal);

    balanceTotalElement.innerText=currentBalanceTotal;


})