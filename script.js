//Dynamic Output for number scroller
function rateUpdate(){
    document.getElementById('displayRate').innerHTML = document.getElementById('rate').value;
}

// Form result function
function compute(){

    var principle = document.getElementById ('principal').value;
    var years = document.getElementById ('years').value;
    var rate = document.getElementById ('rate').value;

    var interest = parseFloat((principle*years*rate)/100)
    var principal = parseFloat(principle)

    if (this.principal.value == '' || principal <= 0) {
        alert("Enter a positive number");
        this.principal.focus();
    }

    else {
        var result = document.getElementById('result');
        result.innerHTML = "If you deposit <mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "%</mark>.<br>" + "You will receive an amount of <mark>" + interest + "</mark>,<br> in the year <mark>" + (new Date().getFullYear() + years) + "</mark>";
    }
}