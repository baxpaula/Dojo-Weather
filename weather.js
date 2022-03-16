console.log('page loading.....')

function hide(id) {
    var element = document.querySelector('#bottom');
    element.remove();
    
}

    function c2f(temp){
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert (element) {
    for(var i=1; i<9; i++){
        var temp = document.querySelector("#temp" + i);
        var tempVal = parseInt(temp.innerText);
        if (element.value == "°C") {
            temp.innerText = (f2c(tempVal));
        } else {
            temp.innerText = (c2f(tempVal));
        }
    }
}