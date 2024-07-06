document.addEventListener('DOMContentLoaded', () => {
    display = document.querySelector(".display-area");

    nums = document.querySelectorAll('.btn-numbers');
    nums.forEach(number => {
        number.addEventListener('click', () => {
            if (display.innerHTML === 0) {
                display.innerHTML = number.innerHTML;
            } else {
                display.innerHTML = display.innerHTML + number.innerHTML;
                display.innerHTML = eval(display.innerHTML);
            }
        });
    });


    operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.addEventListener('click', ()=> {
            display.innerHTML = display.innerHTML + operator.innerHTML;
        });
    });

    document.getElementById('sqrt').addEventListener('click', ()=> {
        try {
            display.innerHTML = Math.sqrt(eval(display.innerHTML));
        } catch (error) {
            alert("Invalid Expression")
        }
    });

    document.getElementById('AC').addEventListener('click', ()=> {
        display.innerHTML = 0;
    });

    document.getElementById('C').addEventListener('click', ()=> {
        display.innerHTML = display.innerHTML.slice(0, (display.innerHTML.length - 1));
    });

    document.getElementById('num_dot').addEventListener('click', ()=>{
        display.innerHTML = display.innerHTML + ".";
    });

    document.getElementById('equal').addEventListener('click', ()=> {
        try {
            display.innerHTML = eval(display.innerHTML);
        } catch (error) {
            alert("Invalid Expression")
        }    
    });

});