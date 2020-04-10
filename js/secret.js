// Secret area
window.localStorage;
all = JSON.parse(localStorage.getItem('objString'));
const openSound = new Audio("./secret.wav");
let firstTime = true;
const faerie ={
    x: 2, y: 2
};

const walls=[
    {x: 1, y: 1},
    {x: 1, y: 2},
    {x: 1, y: 3},
    {x: 2, y: 1},
    {x: 2, y: 3},
    {x: 3, y: 1},
    {x: 3, y: 3},
    {x: 4, y: 1},
    {x: 4, y: 3},
    {x: 5, y: 1},
    {x: 5, y: 3},
    {x: 6, y: 1},
    {x: 6, y: 3},
    {x: 7, y: 1},
    {x: 7, y: 3},
    {x: 8, y: 1},
    {x: 8, y: 3},
    {x: 9, y: 1},
    {x: 9, y: 3},
];

function placeCharacter(){
    const link = document.createElement('div');
    link.className='link';
    link.style.left = (all.linkStats.x * 50).toString() + 'px';
    link.style.top = (all.linkStats.y * 50).toString() + 'px';
    document.querySelector('#secret').appendChild(link);
    const faeElement = document.createElement('div');
    faeElement.id ='faerie';
    faeElement.style.left = (faerie.x * 50).toString() + 'px';
    faeElement.style.top = (faerie.y * 50).toString() + 'px';
    document.querySelector('#secret').appendChild(faeElement);
}

function formBoundaries() {
    for (let i = 0; i < walls.length; i++) {
        const wall = walls[i];
        const wallElement = document.createElement('div');
        wallElement.className ='hole';
        wallElement.style.left = (wall.x * 50).toString() + 'px';
        wallElement.style.top = (wall.y * 50).toString() + 'px';
        document.querySelector('#secret').appendChild(wallElement);
    }
};
// level-specific--UPDATE

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
      case 80:
          if (all.linkStats.itemList.includes('potion')) {
          all.linkStats.hp += 80;
          
          let potionIndex = all.linkStats.itemList.indexOf('potion');
          all.linkStats.itemList.splice(potionIndex,1);
          menuDisplay();
          } else {
          console.log("you don't have a potion")
          }
          break;
    }
});

function moveLeft() {

    if (allowMove(all.linkStats.x-1, all.linkStats.y)){
        all.linkStats.x--;
        completeMove(all.linkStats.x, all.linkStats.y);
        link = document.querySelector('.link');
        link.id = 'ltlink';
    } 
}
function moveUp() {

    if (allowMove(all.linkStats.x, all.linkStats.y-1)){
        all.linkStats.y--;
        completeMove(all.linkStats.x, all.linkStats.y);
        link = document.querySelector('.link');
        link.id='uplink';
    }
}
function moveRight() {

    if (allowMove(all.linkStats.x+1, all.linkStats.y)){
        all.linkStats.x++;
        completeMove(all.linkStats.x, all.linkStats.y);
        link = document.querySelector('.link');
        link.id='rtlink';
    }
}
function moveDown() {

    if (allowMove(all.linkStats.x, all.linkStats.y+1)){
        all.linkStats.y++;
        completeMove(all.linkStats.x, all.linkStats.y);
        link = document.querySelector('.link');
        link.id='dnlink';
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
    return false;
}

function completeMove(x,y) {
    link = document.querySelector('.link');
    link.style.top = (y * 50).toString() + 'px';
    link.style.left = (x * 50).toString() + 'px';
    if ((link.style.top === "100px" && link.style.left === "250px") && (firstTime) && (all.linkStats.weapon!=="Devastation Rod")) {
        document.getElementById('faerie').style.display='block';
        alert("Congratulations on finding me!");
        openSound.play();
    }
        if ((link.style.top === "100px" && link.style.left === "150px") && (firstTime) && (all.linkStats.weapon!=="Devastation Rod")) {
            alert("Nelda lived a modest life but was extremely powerful. \nHer essence endures below.  Please put an end to her evil and claim the Biforce.");
            alert("That's right, the Biforce.  Two squares.")
            alert("This staff will help you destroy her and whatever else you happen to run into. \nCiao.");
            alert("You got the Devastation Rod!")
            all.linkStats.weapon="Devastation Rod";
            all.linkStats.damage=300;
            all.linkStats.damageFloor=180
            menuDisplay();
            firstTime=false;
        }
     //  go back
    if (link.style.top === "100px" && link.style.left === "450px") {
        localStorage.setItem('objString', JSON.stringify(all));
        window.location.replace("./level2.html");
    }
    
}

function isAdjacent(x, y){
    if ((x + 1 === all.linkStats.x && y === all.linkStats.y) || 
    (x + 1 === all.linkStats.x && y === all.linkStats.y) ||
    (x === all.linkStats.x && y+1 === all.linkStats.y) ||
    (x === all.linkStats.x && y-1 === all.linkStats.y)) {
        return true;
    } else {
        return false;
    }
}

function menuDisplay(){
    hpDisplay = document.getElementById('linkhp');
    hpDisplay.innerText = `Your hp: ${all.linkStats.hp}`;
    weaponDisplay = document.getElementById('weapon')
    weaponDisplay.innerText = `Weapon: ${all.linkStats.weapon}`;
    itemDisplay = document.getElementById('items');
    itemDisplay.innerText = `Items: ${all.linkStats.itemList}`;
}

formBoundaries();
placeCharacter();
menuDisplay();


