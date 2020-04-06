//  2nd basement setup

const linkPos = {
    x:5,
    y:5
};
const treasures = [
    {x: 1, y: 4},
    {x: 5, y: 1}
];
const enemies = [
    {x: 2, y: 1},
    {x: 7, y: 3}
]
const dstairs = {
    x: 4, y: 3
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
    {x: 1, y: 6},
    {x: 2, y: 0},
    {x: 2, y: 2},
    {x: 2, y: 3},
    {x: 2, y: 4},
    {x: 2, y: 5},
    {x: 2, y: 6},
    {x: 3, y: 0},
    {x: 3, y: 6},
    {x: 4, y: 0},
    {x: 4, y: 4},
    {x: 4, y: 5},
    {x: 4, y: 6},
    {x: 5, y: 0},
    {x: 5, y: 3},
    {x: 5, y: 4},
    {x: 5, y: 6},
    {x: 6, y: 0},
    {x: 6, y: 2},
    {x: 6, y: 3},
    {x: 6, y: 6},
    {x: 7, y: 0},
    {x: 7, y: 2},
    {x: 7, y: 6},
    {x: 8, y: 0},
    {x: 8, y: 4},
    {x: 8, y: 5},
    {x: 8, y: 6},
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
    for (let i = 0; i < walls.length; i++) {
        const wall = walls[i];
        if (wall.x === x && wall.y === y) {
            return true;
        }
    }
    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
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
    if (link.style.top === "150px" && link.style.left === "200px") {
        alert("you're gonna die here");
        window.location.replace("./level4.html");
    }
}
}

function isAdjacent(x, y){
    if ((x + 1 === linkPos.x && y === linkPos.y) || 
    (x + 1 === linkPos.x && y === linkPos.y) ||
    (x === linkPos.x && y+1 === linkPos.y) ||
    (x === linkPos.x && y-1 === linkPos.y)) {
        return true;
    } else {
        return false;
    }
}