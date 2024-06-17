const imgCoin = document.getElementById("coinToss");
const button = document.getElementById("tossbtn")
const text = document.getElementById("text")
const card2 = document.getElementById("card2")

function tossResults(){
    const result = Math.round(Math.random())
    
    button.classList.add("d-none")
    imgCoin.classList.remove("d-none")
    imgCoin.classList.add("d-block")

    setTimeout (()=>{
        imgCoin.classList.add("d-none")
        imgCoin.classList.remove("d-block")
        
        text.innerText = (result === 0 ? "Heads" : "Tails")
        card2.classList.remove("d-none")
        card2.classList.add("d-flex")

    }, 4000)

}