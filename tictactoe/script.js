// select all required elements 
const selectBox = document.querySelector(".select-box");
const selectXBtn = selectBox.querySelector(".playerX");
const selectOBtn = selectBox.querySelector(".playerO");
const playBoard = document.querySelector(".play-board")
let allBox = document.querySelectorAll("section span");
const players = document.querySelector(".players");

window.onload = () => { // once window loaded

    for (let i = 0; i < allBox.length; i++) { // add onclick attribute in all available section's spans
        allBox[i].setAttribute("onclick", "clickedBox(this)")
    }

    selectXBtn.onclick =() => {
        selectBox.classList.add("hide"); // hide the select box when a button is clicked
        playBoard.classList.add("show"); // show the playboard section on playerX button clicked
    }

    selectOBtn.onclick =() => {
        console.log("button o is clicked")
        selectBox.classList.add("hide"); // hide the select box when a button is clicked
        playBoard.classList.add("show"); // show the playboard section on playerY button clicked
        players.setAttribute("class", "players active");
    }
}

let playerXIcon = "x"; // classname of fontawesome cross icon
let playerOIcon = "o"; // classname of fontawesome circle icon
 
function clickedBox(e) {
    // console.log(e)
    if(players.classList.contains("player")){ // if players element contains .player
        e.innerHTML = `<i class="fas fa-times"></i>`; // adding cross icon tag inside user clicked element 
        players.classList.add("active");
    } else {
        e.innerHTML = `<i class="far fa-circle"></i>`; // adding circle icon tag inside user clicked element
        players.classList.add("active");
    }
    e.style.pointerEvents = "none"; // once user selects any box, then that box can't be selected again
    bot();
}

// bot click function
function bot () {
    let array = []; // creating empty array...store unselected box index in this array 
    for (let i = 0; i < allBox.length; i++) {
        if(allBox[i].childElementCount == 0){ // if span has no child element
            array.push(i); // inserting unclicked or unselected boxes inside array means that span has no children
        }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)]; // getting random index from array so bot will select random box
    console.log(randomBox)
    if (array.length > 0){
        if(players.classList.contains("player")){ // if players element contains .player
            allBox[randomBox].innerHTML = `<i class="far fa-circle"></i>`; // adding circle icon tag inside user clicked element 
            players.classList.remove("active");
        } else {
            allBox[randomBox].innerHTML = `<i class="fas fa-times"></i>`; // adding cross icon tag inside user clicked element
            players.classList.remove("active");
        }
    }
    allBox[randomBox].style.pointerEvents = "none"; // once the bot selects a box, user cannot select or click on that box
}