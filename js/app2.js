// 1st basement setup
window.localStorage;
linkStats = JSON.parse(localStorage.getItem('objString'));


const enemyStats = [
    {
    type: "scrub", 
    hp: 100,
    damage: 50,
    x: 2, 
    y: 2
}]

const treasures = [
    {type: "candle",
    description: "illuminates area",
    x: 6, 
    y: 1
    },
    {type: "blue key",
    description: "unlocks blue door",
    x: 3, 
    y: 5
    },
    {type: "potion",
    description: "restores hp",
    x: 8, 
    y: 4
}];
const ustairs = {
    x: 4,
    y: 1
}

const dstairs = {
    x: 5, y: 5
}

const walls =[
    {x: 0, y: 0},
    {x: 0, y: 1},
    {x: 0, y: 2},
    {x: 0, y: 3},
    {x: 0, y: 4},
    {x: 0, y: 5},
    {x: 0, y: 6},
    {x: 1, y: 0},
    {x: 1, y: 2},
    {x: 1, y: 6},
    {x: 2, y: 0},
    {x: 2, y: 4},
    {x: 2, y: 6},
    {x: 3, y: 0},
    {x: 3, y: 2},
    {x: 3, y: 4},
    {x: 3, y: 6},
    {x: 4, y: 0},
    {x: 4, y: 2},
    {x: 4, y: 4},
    {x: 4, y: 5},
    {x: 4, y: 6},
    {x: 5, y: 0},
    {x: 5, y: 1},
    {x: 5, y: 2},
    {x: 5, y: 4},
    {x: 5, y: 6},
    {x: 6, y: 0},
    {x: 6, y: 6},
    {x: 7, y: 0},
    {x: 7, y: 1},
    {x: 7, y: 3},
    {x: 7, y: 4},
    {x: 7, y: 6},
    {x: 8, y: 0},
    {x: 8, y: 1},
    {x: 8, y: 3},
    {x: 8, y: 6},
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
    for (let i = 0; i < walls.length; i++) {
        const wall = walls[i];
        const wallElement = document.createElement('div');
        wallElement.className ='wall';
        wallElement.style.left = (wall.x * 50).toString() + 'px';
        wallElement.style.top = (wall.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(wallElement);
    }
};
// level-specific--UPDATE
function addMapItems(){
 
    for (let i = 0; i < treasures.length; i++) {
        const treasEl = document.createElement('div');
        const treas = treasures[i];
        treasEl.className ='treasure';
        treasEl.id='treas' + i;
        treasEl.style.left = (treas.x * 50).toString() + 'px';
        treasEl.style.top = (treas.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(treasEl);
        const ustairsEl = document.createElement('div');
        ustairsEl.id ='ustairs';
        ustairsEl.style.left = (ustairs.x * 50).toString() + 'px';
        ustairsEl.style.top = (ustairs.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(ustairsEl);  
        const dstairsEl = document.createElement('div');
        dstairsEl.id ='dstairs';
        dstairsEl.style.left = (dstairs.x * 50).toString() + 'px';
        dstairsEl.style.top = (dstairs.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(dstairsEl);  
    }
    for (let i = 0; i < enemyStats.length; i++) {
        const enemyEl = document.createElement('div');
        const enemy = enemyStats[i];
        enemyEl.className ='enemy';
        enemyEl.id='enemy' + i;
        enemyEl.style.left = (enemy.x * 50).toString() + 'px';
        enemyEl.style.top = (enemy.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(enemyEl);
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
    for (let i = 0; i < walls.length; i++) {
        const wall = walls[i];
        if (wall.x === x && wall.y === y) {
            return true;
        }
    }
    for (let i = 0; i < enemyStats.length; i++) {
        const enemy = enemyStats[i];
        if (enemy.x === x && enemy.y === y) {
            return true;
    }
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
                let el = treas[i].id.substring(5,6);
                getItem(el);
            }
        }
    }
    // if enemies exist
    if (enemyStats) {
        for (let i = 0; i < enemyStats.length; i++) {
            let enemy = document.getElementsByClassName('enemy');
            //  if you move next to an enemy, battle will initiate.
            if (isAdjacent(enemyStats[i].x, enemyStats[i].y)) {
                let el = enemy[i].id.substring(5,6);
                battle(el);
            }
    }
    //  this is the exit point--it changes every level
    if (link.style.top === "250px" && link.style.left === "250px") {
        alert("you don't know what you're getting into");
        localStorage.setItem('objString', JSON.stringify(linkStats));
        window.location.replace("./level3.html");
    }
    //  this is to return to the previous screen--it changes every level
    if (link.style.top === "50px" && link.style.left === "200px") {
        localStorage.setItem('objString', JSON.stringify(linkStats));
        window.location.replace("./level1.html");
    }
    
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

function battle(el) {
    alert(`you encountered a ${enemyStats[el].type}`);
    // let popUp = document.getElementById('battle');
    // popUp.style.display = "block";

    // link always goes first
    while (linkStats.hp > 0 && enemyStats[el].hp > 0) {
        fightRound(el);
        if (linkStats.hp <= 0) {
            alert("you're real dead");
            // popUp.style.display="none";
            window.location.replace("./index.html");
        }
        if (enemyStats[el].hp <=0){        
            // enemyStats.pop();
            // alert(enemyStats[el])
            removeEnemy(el);
            alert("The scrub was vanquished!")
        }
    }
    //  update the menu display
    menuDisplay();
  // When the user clicks on <span> (x), close the modal
  let span = document.getElementsByClassName('close')[0];
  span.onclick = function() {
    popUp.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
  }
}

function fightRound(el) {
    // link always goes first
    let linkAtt = Math.floor(Math.random()*linkStats.damage);
    console.log("Link attacks with " + linkStats.weapon + " !");
    console.log("Link causes " + linkAtt + " damage!");
    enemyStats[el].hp -=linkAtt;
    if (enemyStats[el].hp >= 0) {
    // then the enemy goes
        let enemyAtt = Math.floor(Math.random()*enemyStats[el].damage);
        console.log(`The ${enemyStats[el].type} attacks!`);
        console.log(`The ${enemyStats[el].type} causes ${enemyAtt} damage!`);
        linkStats.hp-=enemyAtt;
        menuDisplay();
    }
};

function getItem(el){
    console.log("You got a " + treasures[el].type);
    linkStats.items.push(treasures[el]);
    menuDisplay();
    removeTreas(el);
}
function removeEnemy(el){
    let gone = document.getElementById("enemy" + el);
    enemyStats.splice(el, 1);
    gone.remove();
 }

function removeTreas(el){
    let gone = document.getElementById("treas" + el);
    treasures.splice(el, 1);
    gone.remove();
 }

function menuDisplay(){
    hpDisplay = document.getElementById('linkhp');
    hpDisplay.innerText = `Your hp: ${linkStats.hp}`;
    weaponDisplay = document.getElementById('weapon')
    weaponDisplay.innerText = `Weapon: ${linkStats.weapon}`;
    itemDisplay = document.getElementById('items');
    itemDisplay.innerText = `Items: ${linkStats.items}`;
}

placeCharacter();
formBoundaries();
addMapItems();
menuDisplay();

