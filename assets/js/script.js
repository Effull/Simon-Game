let playerarr = [];
let computerarr = [];
let isSuperSpeed = false;
let isOnelife = false;
let round;
let isComputerPlayingSequence = false;

const topRight = document.querySelector(".top-right-panel");
const topLeft = document.querySelector(".top-left-panel");
const bottomRight = document.querySelector(".bottom-right-panel");
const bottomLeft = document.querySelector(".bottom-left-panel");
const onelife = document.querySelector(".onelife");
const superSpeed = document.querySelector(".superSpeed");
const roundCounter = document.querySelector("#turn");

onelife.addEventListener("click", (event) => {
    if (onelife.checked == true) {
        isOnelife = true
    } else {
        isOnelife = false;
    }
})

superSpeed.addEventListener("click", (event) => {
    if (superSpeed.checked == true) {
        isSuperSpeed = true
    } else {
        isSuperSpeed = false;
    }
})

function gamestart() {
    startButton.style.display = 'none';
    location.href="https:#turn"
    /*panels.style.display = 'inline-block';
    bottomRight.style.display = 'inline-block';
    topRight.style.display = 'inline-block';
    topLeft.style.display = 'inline-block';*/
    turn = 1;
    roundCounter.innerHTML = 1;
    setTimeout(function() {
        newRound();
    }, 800);
};

function getRandomPanel() {
    const panels = [topLeft, topRight, bottomLeft, bottomRight];
    return panels[Math.floor(Math.random() * panels.length)];
}


function newRound() {
    playerarr = []
    flashColour()
}

// This is the function that
// will cause a new color to be added to
// the computerarray and for that color
// to be flashed.
function flashColour() {
    const chosenElement = getRandomPanel();
    if (chosenElement == topLeft) {
        isComputerPlayingSequence = true;
        flashcomputer(topLeft)
    } else if (chosenElement == topRight) {
        isComputerPlayingSequence = true;
        flashcomputer(topRight)
    } else if (chosenElement == bottomLeft) {
        isComputerPlayingSequence = true;
        flashcomputer(bottomLeft)
    } else {
        isComputerPlayingSequence = true;
        flashcomputer(bottomRight)
    }
}


function flashcomputer(element) {
    isComputerPlayingSequence = true
    let originalColor = element.style.background;
    computerarr.push(element)
    element.style.background = 'white';
    if (isSuperSpeed == true) {
        setTimeout(function() {
            element.style.background = originalColor;
        }, 400);
        isComputerPlayingSequence = false
    } else {
        setTimeout(function() {
            element.style.background = originalColor;
        }, 800);
        isComputerPlayingSequence = false
    }
}


    function flashplayer(element) {
        if (isComputerPlayingSequence == true) {
            return
        } else {
            let originalColor = element.style.background;
            playerarr.push(element)
            computerarrVsPlayerarr()
            element.style.background = 'white';
            if (isSuperSpeed == true) {
                setTimeout(function() {
                    element.style.background = originalColor;
                }, 400);
                isComputerPlayingSequence = false
            } else {
                setTimeout(function() {
                    element.style.background = originalColor;
                }, 800);
                isComputerPlayingSequence = false
            }
        }
    }

    function computerarrVsPlayerarr() {
        for (let i = 0; i < playerarr.length; ++i) {
            if (playerarr[i] === computerarr[i]) {
                // all good, continue

                const thisTheLastItem = (i === computerarr.length - 1)
                const hasThePlayerRepeatedTheWholeSequence = (computerarr.length === playerarr.length)
                if (thisTheLastItem && hasThePlayerRepeatedTheWholeSequence) {
                    // set timeout so that button doesn't flash
                    // as soon as sequence is completely correct
                    setTimeout(flahsComputerSequons, 2000)
                }
            } else {
                topLeft.classList.add('flashing')
                topRight.classList.add('flashing')
                bottomLeft.classList.add('flashing')
                bottomRight.classList.add('flashing')
                setTimeout(function() {
                    topRight.classList.remove('flashing')
                    topLeft.classList.remove('flashing')
                    bottomLeft.classList.remove('flashing')
                    bottomRight.classList.remove('flashing');
                }, 1000);
                if (isOnelife == true) {
                    computerarr = [];
                    turn = 1;
                    roundCounter.innerHTML = turn;
                    setTimeout(function() {
                        newRound();
                    }, 3000);
                    round = 0;
                } else {
                    setTimeout(function() {
                        playerarr = [];
                        let i = 0
                        for (i = 0; i < computerarr.length; ++i) {
                            const item = computerarr[i];
                            setTimeout(function() {
                                flashButton(item)
                            }, i * 800)
                        }
                    },1000)
                }
            }
        }
    }



    function flahsComputerSequons() {
        turn++;
        if(turn == 2){
       roundCounter.innerHTML = "Winner";
       let i = 0
        for (i = 0; i < 5; i++) {
            topLeft.classList.add('flashing')
            topRight.classList.add('flashing')
            bottomLeft.classList.add('flashing')
            bottomRight.classList.add('flashing')
            setTimeout(function() {
            topRight.classList.remove('flashing')
            topLeft.classList.remove('flashing')
            bottomLeft.classList.remove('flashing')
            bottomRight.classList.remove('flashing');
        }, 1000);
        }
       return;
    }
        roundCounter.innerHTML = turn;
        let i = 0
        for (i = 0; i < computerarr.length; ++i) {
            const item = computerarr[i];
            if (isSuperSpeed) {
                setTimeout(function() {
                    flashButton(item)
                    console.log("superSpeed on")
                }, i * 1100)
            } else {
                setTimeout(function() {
                    flashButton(item)
                    console.log("superSpeed off")
                }, i * 1500)
            }
        } if(isSuperSpeed){
        setTimeout(newRound, i * 1500)
        } else {
        setTimeout(newRound, i * 1600)
        }
    }

        function flashButton(buttonElement) {
        buttonElement.classList.add('flashing')
        if (isSuperSpeed) {
            setTimeout(function() {
                buttonElement.classList.remove('flashing')
            }, 400)
        } else {
            setTimeout(function() {
                buttonElement.classList.remove('flashing')
            }, 800)
        }
    }


    console.log(playerarr);
    console.log(computerarr);