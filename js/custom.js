const tipcalcy = () => {
    var amount = document.getElementById('bill_amount').value;
    
    var perc = document.getElementById('interest_perc').value;

    var interest = amount * (perc / 100);
    let total = interest + Number(amount);


    document.getElementById('interest_amount').value = interest;
    document.getElementById('total_amount').value =total;
    

}