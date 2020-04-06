// Opening page -- no enemies

const linkStats = {
    hp: 150,
    weapon: "none",
    damage: "20"
}

const linkPos = {
    x: 6, y: 6
};

const entrance = {
    x: 5, y: 1
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
    {x: 4, y: 1},
    {x: 5, y: 0},
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

    if (allowMove(linkPos.x-1, linkPos.y)){
        linkPos.x--;
        completeMove(linkPos.x, linkPos.y)
    }
}
function moveUp() {

    if (allowMove(linkPos.x, linkPos.y-1)){
        linkPos.y--;
        completeMove(linkPos.x, linkPos.y)
    }
}
function moveRight() {

    if (allowMove(linkPos.x+1, linkPos.y)){
        linkPos.x++;
        completeMove(linkPos.x, linkPos.y)
    }
}
function moveDown() {

    if (allowMove(linkPos.x, linkPos.y+1)){
        linkPos.y++;
        completeMove(linkPos.x, linkPos.y)
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
    if (link.style.top === "50px" && link.style.left === "250px") {
        alert("you are entering Nelda's tomb");
        window.location.replace("./level2.html");
    }
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
    if (enemies) {
        for (let i = 0; i < enemies.length; i++) {
            let enemy = document.getElementsByClassName('enemy');
            //  if you move next to an enemy, battle will initiate.
            if (isAdjacent(enemies[i].x, enemies[i].y)) {
                let el = enemy[i].id
                battle(el);
            }
    }
    //  this is the exit point--it changes every level
    if (link.style.top === "50px" && link.style.left === "250px") {
        alert("you are entering Nelda's tomb");
        window.location.replace("./level2.html");
    }
}
}