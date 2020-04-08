// Opening page -- no enemies
window.localStorage;
// if (!objectString){

const linkStats = {
    hp: 150,
    weapon: "bare hands",
    damage: "20",
    x: 6, 
    y: 6,
    items: []
}
// } else {
//     linkStats = JSON.parse(localStorage.getItem('objString'));
// }

const entrance = {
    x: 4, y: 1
}

const oldManPos =
    {x: 4, y: 4};

const treasures = [
    {x: 2, y: 6},
    {x: 3, y: 3}
];

const rocks =[
    {x: 0, y: 0},
    {x: 0, y: 1},
    {x: 0, y: 2},
    {x: 0, y: 3},
    {x: 0, y: 4},
    {x: 0, y: 5},
    {x: 0, y: 6},
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 1, y: 2},
    {x: 1, y: 3},
    {x: 1, y: 4},
    {x: 1, y: 5},
    {x: 1, y: 6},
    {x: 2, y: 0},
    {x: 2, y: 1},
    {x: 3, y: 0},
    {x: 3, y: 1},
    {x: 4, y: 0},
    {x: 5, y: 0},
    {x: 5, y: 1},
    {x: 6, y: 0},
    {x: 6, y: 1},
    {x: 7, y: 0},
    {x: 7, y: 1},
    {x: 7, y: 2},
    {x: 8, y: 0},
    {x: 8, y: 1},
    {x: 8, y: 2},
    {x: 8, y: 3},
    {x: 9, y: 0},
    {x: 9, y: 1},
    {x: 9, y: 2},
    {x: 9, y: 3},
    {x: 9, y: 4},
    {x: 9, y: 5},
    {x: 9, y: 6},
];

function placeCharacter(){
    const link = document.createElement('div');
    link.id='link';
    link.style.left = (linkStats.x * 50).toString() + 'px';
    link.style.top = (linkStats.y * 50).toString() + 'px';
    document.querySelector('#board').appendChild(link);
}

function formBoundaries() {
    for (let i = 0; i < rocks.length; i++) {
        const rock = rocks[i];
        const rockElement = document.createElement('div');
        rockElement.className ='rock';
        rockElement.style.left = (rock.x * 50).toString() + 'px';
        rockElement.style.top = (rock.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(rockElement);
    }
};
// level-specific--UPDATE
function addMapItems(){
 
    const oldManEl = document.createElement('div');
    oldManEl.id ='old-man';
    oldManEl.style.left = (oldManPos.x * 50).toString() + 'px';
    oldManEl.style.top = (oldManPos.y * 50).toString() + 'px';
    document.querySelector('#board').appendChild(oldManEl);
    const entranceEl = document.createElement('div');
    entranceEl.id ='entrance';
    entranceEl.style.left = (entrance.x * 50).toString() + 'px';
    entranceEl.style.top = (entrance.y * 50).toString() + 'px';
    document.querySelector('#board').appendChild(entranceEl);    
    for (let i = 0; i < treasures.length; i++) {
        const treasEl = document.createElement('div');
        const treas = treasures[i];
        treasEl.className ='treasure';
        treasEl.id='treas' + i;
        treasEl.style.left = (treas.x * 50).toString() + 'px';
        treasEl.style.top = (treas.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(treasEl);
    }
}

$(document).keydown(function(e) {

    const key = e.keyCode;
    if ([37, 38, 39, 40].includes(key)){
        e.preventDefault();
    }
    switch(key) {
      case 37:
        // go left
        moveLeft();
        break;
      case 38:
        // go up
        moveUp();
        break;
      case 39:
        // go right
        moveRight();
        break;
      case 40:
        // go down
        moveDown();
        break;
    }
});

function moveLeft() {

    if (allowMove(linkStats.x-1, linkStats.y)){
        linkStats.x--;
        completeMove(linkStats.x, linkStats.y)
    }
}
function moveUp() {

    if (allowMove(linkStats.x, linkStats.y-1)){
        linkStats.y--;
        completeMove(linkStats.x, linkStats.y)
    }
}
function moveRight() {

    if (allowMove(linkStats.x+1, linkStats.y)){
        linkStats.x++;
        completeMove(linkStats.x, linkStats.y)
    }
}
function moveDown() {

    if (allowMove(linkStats.x, linkStats.y+1)){
        linkStats.y++;
        completeMove(linkStats.x, linkStats.y)
    }
}

function withinMap (x,y){
    if (x < 0 || y < 0 || x > 9 || y > 6) {
        return false;
    }
    return true;
}

function allowMove(x,y) {
    if(withinMap(x,y)===false){
        return false;
    } 
    if (findObstacles(x,y)===true){
        return false;
    }
    return true;
}

function findObstacles(x,y) {
    for (let i = 0; i < rocks.length; i++) {
        const rock = rocks[i];
        if (rock.x === x && rock.y === y) {
            return true;
        }
    }
    // level 1 has no enemies, but one NPC
    if (oldManPos.x === x && oldManPos.y === y) {
        return true;
    }
    return false;

}

function completeMove(x,y) {
    link = document.getElementById('link');
    link.style.top = (y * 50).toString() + 'px';
    link.style.left = (x * 50).toString() + 'px';
    
    // if a treasure is there
    if (treasures) {
        for (let i = 0; i < treasures.length; i++) {
            let treas = document.getElementsByClassName('treasure');
            if (link.style.top === treas[i].style.top && link.style.left === treas[i].style.left) {
                let el = treas[i].id
                getItem(el);
            }
        }
    }
    // if enemies exist
    // if (enemies) {
    //     for (let i = 0; i < enemies.length; i++) {
    //         let enemy = document.getElementsByClassName('enemy');
    //         //  if you move next to an enemy, battle will initiate.
    //         if (isAdjacent(enemies[i].x, enemies[i].y)) {
    //             let el = enemy[i].id
    //             battle(el);
            // }
    // }
    //  this is the exit point--it changes every level
    if (link.style.top === "50px" && link.style.left === "200px") {
        alert("you are entering Nelda's tomb");

        // put linkStats into storage
        localStorage.setItem('objString', JSON.stringify(linkStats));
    
        window.location.replace("./level2.html");
    
    }
}

function isAdjacent(x, y){
    if ((x + 1 === linkStats.x && y === linkStats.y) || 
    (x + 1 === linkStats.x && y === linkStats.y) ||
    (x === linkStats.x && y+1 === linkStats.y) ||
    (x === linkStats.x && y-1 === linkStats.y)) {
        return true;
    } else {
        return false;
    }
}

function getItem(el){
    console.log("You got a " + el)
    treasures.pop();
    removeElement(el);
}

function removeElement(el){
    let gone = document.getElementById(el);
    gone.remove();
}


formBoundaries();
addMapItems();
placeCharacter();
menuDisplay();

const popUp = document.getElementById("talk");

// Click the old man to open the dialogue box
const clickOM = document.getElementById("old-man");

// The X to close the popup
const span = document.getElementsByClassName("close")[0];

// when player clicks on the old man, open the dialogue
clickOM.onclick = function() {
  let words = document.getElementById('words');
  popUp.style.display = "block";
  let randomIndex = Math.floor(Math.random()*3)
  let message = [
      "Don't sue me",
      "Look out for purple guys",
      "Nelda is weak to lightning"
  ]
  if (linkStats.weapon==="bare hands") {
    words.innerText ="You're gonna need a weapon if you're going in there.  Take this."
    alert('you received the Adequate Sword!')
    linkStats.weapon="Adequate Sword";
    linkStats.damage=80;

  } else {
    words.innerText = message[randomIndex];
    randomIndex = Math.floor(Math.random()*3)
  }
  menuDisplay();

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  popUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
}

function menuDisplay(){
    hpDisplay = document.getElementById('linkhp');
    hpDisplay.innerText = `Your hp: ${linkStats.hp}`;
    weaponDisplay = document.getElementById('weapon')
    weaponDisplay.innerText = `Weapon: ${linkStats.weapon}`;
    itemDisplay = document.getElementById('items');
    itemDisplay.innerText = `Items: ${linkStats.items}`;
}