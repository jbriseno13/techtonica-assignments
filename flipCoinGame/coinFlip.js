
//create variables for each element
let heads = 0; 
let tails = 0; 
const coin = document.querySelector(".coinimages"); 
const flipBtn = document.querySelector("#coinflip-button"); 
const resetBtn = document.querySelector("#reset-button"); 

//at click coin will randomly be heads or tails
flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    console.log(i); 
    coin.style.animation = "none";
    if(i){
        //section will spin the coin based on css animations
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});

//if coin is head, head count is updated
//if coin is tail, tail count stat is updated 
function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}
function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

//reset the stats back to zero when reset button is pressed. 
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});

 