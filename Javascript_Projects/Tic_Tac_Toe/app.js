addEventListener("DOMContentLoaded",()=>{
    let player = true; // for O
    let btns = document.querySelectorAll('.btn');
    let gameended = false;

    btns.forEach((button)=>{
        console.log(button);

        button.addEventListener('click', ()=>{
            if(player == true){
                button.innerHTML = 'O';
                button.disabled = true;
            }else{
                button.innerHTML = 'X';
                button.disabled = true;
                checkWinner(); 
            }

            checkWinner();                
            player = !player;

            if(gameended == true){
                return;
            }
            
            if(checkDisableAll()){
                displayResult("It's a draw.");
                gameended = true;
            }
        })
    })

    function checkWinner(){
        let winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            
            [0, 4, 8],
            [2, 4, 6],
    
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];

        winPatterns.forEach((button_number) =>{
            if(btns[button_number[0]].innerHTML != '' && btns[button_number[1]].innerHTML != '' && btns[button_number[2]].innerHTML != ''){
                console.log(btns[button_number[0]] + " " + btns[button_number[1]] + "");
            if(btns[button_number[0]].innerHTML === btns[button_number[1]].innerHTML && btns[button_number[1]].innerHTML === btns[button_number[2]].innerHTML){
                if(player === true){
                    displayResult('Winner is O');
                    disableAll();
                }else{                    
                    displayResult("Winner is X");
                    disableAll();
                }
            }
        }
        });
    }

    function disableAll(){
        btns.forEach((button)=>{
            button.disabled = true;
        })
    }

    function checkDisableAll(){
        for (let button of btns) {
            if (button.disabled !== true) {
                return false;
            }
        }
        return true;
    }

    function displayResult(text){
        let replay = document.getElementById('replay');
        let reset = document.getElementById('reset');
        let result = document.querySelector('.result');

        result.innerHTML = text;
        result.style.display = 'block';

        replay.style.display = 'flex';
        reset.style.display = 'none';
        gameended = true;
    }
})