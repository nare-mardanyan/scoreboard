let homecount = 0
let guestcount = 0
function best() {
    if (homecount > guestcount) {
        document.getElementById("best").textContent = "Team 1 is winning!"
    } else if (guestcount > homecount) {
        document.getElementById("best").textContent = "Team 1 is winning";
    } else {
        document.getElementById("best").textContent = "TIE";      
    }
}
function addOneToHome() {
    homecount++
    document.getElementById("home-score").textContent = homecount;
    best()
}
function addTwoToHome() {
    homecount+=2;
    document.getElementById("home-score").textContent = homecount;
    best();
}
function addThreeToHome() {
    homecount += 3;
    document.getElementById("home-score").textContent = homecount;
    best();
}



function addOneToGuest() {
    guestcount++;
    document.getElementById("guest-score").textContent = guestcount;
    best();
}
function addTwoToGuest() {
    guestcount += 2;
    document.getElementById("guest-score").textContent = guestcount;
    best();
}
function addThreeToGuest() {
    guestcount += 3;
    document.getElementById("guest-score").textContent = guestcount;
    best();
}

function restart() {
    homecount = 0
    guestcount = 0
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
    document.getElementById("best").textContent = "";      
    
}