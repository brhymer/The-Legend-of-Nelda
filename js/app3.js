//  2nd basement setup
window.localStorage;
all = JSON.parse(localStorage.getItem('objString'));

function placeCharacter(){
    const link = document.createElement('div');
    link.className='link';
    link.style.left = (all.linkStats.x * 50).toString() + 'px';
    link.style.top = (all.linkStats.y * 50).toString() + 'px';
    document.querySelector('#board').appendChild(link);
}

function formBoundaries() {
    for (let i = 0; i < all.walls3.length; i++) {
        const wall = all.walls3[i];
        const wallElement = document.createElement('div');
        wallElement.className ='wall';
        wallElement.style.left = (wall.x * 50).toString() + 'px';
        wallElement.style.top = (wall.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(wallElement);
    }
};
// level-specific--UPDATE
function addMapItems(){
    const oldManEl = document.createElement('div');
    oldManEl.id ='old-man1';
    oldManEl.style.left = (all.oldManPos3.x * 50).toString() + 'px';
    oldManEl.style.top = (all.oldManPos3.y * 50).toString() + 'px';
    document.querySelector('#board').appendChild(oldManEl);

    for (let i = 0; i < all.holes3.length; i++) {
        const holeEl = document.createElement('div');
        const hole = all.holes3[i];
        holeEl.className ='hole';
        holeEl.style.left = (hole.x * 50).toString() + 'px';
        holeEl.style.top = (hole.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(holeEl);
    }
    for (let i = 0; i < all.treasures3.length; i++) {
        const treasEl = document.createElement('div');
        const treas = all.treasures3[i];
        treasEl.className ='treasure';
        treasEl.id='treas' + i;
        treasEl.style.left = (treas.x * 50).toString() + 'px';
        treasEl.style.top = (treas.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(treasEl);
    }
    for (let i = 0; i < all.ustairs3.length; i++) {
        const ustairsEl = document.createElement('div');
        const ustrs = all.ustairs3[i];
        ustairsEl.className = 'ustairs';
        ustairsEl.id ='ustairs' + i;
        ustairsEl.style.left = (ustrs.x * 50).toString() + 'px';
        ustairsEl.style.top = (ustrs.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(ustairsEl);
    }  
        const dstairsEl = document.createElement('div');
        dstairsEl.id ='dstairs';
        dstairsEl.style.left = (all.dstairs3.x * 50).toString() + 'px';
        dstairsEl.style.top = (all.dstairs3.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(dstairsEl);  
        const rdoorEl = document.createElement('div');
        rdoorEl.id ='red-door';
        rdoorEl.style.left = (all.redDoor.x * 50).toString() + 'px';
        rdoorEl.style.top = (all.redDoor.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(rdoorEl);  

    for (let i = 0; i < all.enemyStats3.length; i++) {
        const enemyEl = document.createElement('div');
        const enemy = all.enemyStats3[i];
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
    for (let i = 0; i < all.walls3.length; i++) {
        const wall = all.walls3[i];
        if (wall.x === x && wall.y === y) {
            return true;
        }
    }
    for (let i = 0; i < all.enemyStats3.length; i++) {
        const enemy = all.enemyStats3[i];
        if (enemy.x === x && enemy.y === y) {
            return true;
    }
}
    return false;
}

function completeMove(x,y) {
    link = document.querySelector('.link');
    link.style.top = (y * 50).toString() + 'px';
    link.style.left = (x * 50).toString() + 'px';

    // if a treasure is there
    // if (treasures) {
        for (let i = 0; i < all.treasures3.length; i++) {
            let treas = document.getElementsByClassName('treasure');
            if (link.style.top === treas[i].style.top && link.style.left === treas[i].style.left) {
                let el = treas[i].id.substring(5,6);
                getItem(el);
            }
        }
    // }
    // if enemies exist
    // if (enemyStats) {
        for (let i = 0; i < all.enemyStats3.length; i++) {
            let enemy = document.getElementsByClassName('enemy');
            //  if you move next to an enemy, battle will initiate.
            if (isAdjacent(all.enemyStats3[i].x, all.enemyStats3[i].y)) {
                let el = enemy[i].id.substring(5,6);
                battle(el);
            }
    // }
    //  this is the exit point--it changes every level
    if (link.style.top === "150px" && link.style.left === "200px") {
        alert("you're gonna die here");
        localStorage.setItem('objString', JSON.stringify(all));
        window.location.replace("./level4.html");
    }
    //  this is to return to the previous screen--it changes every level
    if ((link.style.top === "250px" && link.style.left === "150px") ||
    (link.style.top === "250px" && link.style.left === "250px")){
        localStorage.setItem('objString', JSON.stringify(all));
        window.location.replace("./level2.html");
    }
    // if link falls in a hole, it's instant death
    if ((link.style.top === "50px" && link.style.left === "200px") ||
    (link.style.top === "50px" && link.style.left === "250px")){
        alert('you fell in a hole and died badly');
        window.location.replace("./index.html");
    }
    //  if link has an ineffective weapon, he'll find the partizan here
    if ((link.style.top === "100px" && link.style.left === "200px") &&
    (all.linkStats.weapon==="bare hands" || all.linkStats.weapon==="Adequate Sword")) {
        alert("you found the partizan!");
        all.linkStats.weapon="Partizan";
        all.linkStats.damage="120";
        menuDisplay();
}
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

function battle(el) {
    alert(`you encountered a ${all.enemyStats3[el].type}`);
    // link always goes first
    while (all.linkStats.hp > 0 && all.enemyStats3[el].hp > 0) {
        fightRound(el);
        if (all.linkStats.hp <= 0) {
            alert("you're real dead");
            // popUp.style.display="none";
            window.location.replace("./index.html");
        }
        if (all.enemyStats3[el].hp <=0){        
            removeEnemy(el);
            alert("The scrub was vanquished!");
            break;
        }
    }
    //  update the menu display
    menuDisplay();
}

function fightRound(el) {
    // link always goes first, causes at least 20 damage
    let linkAtt = Math.max(Math.floor(Math.random()*all.linkStats.damage), 20);
    alert("Link attacks with " + all.linkStats.weapon + ":" + linkAtt + " damage!");
    all.enemyStats3[el].hp -=linkAtt;
    if (all.enemyStats3[el].hp >= 0) {
    // then the enemy goes
        let enemyAtt = Math.max(Math.floor(Math.random()*all.enemyStats3[el].damage),10);
        alert(`The ${all.enemyStats3[el].type} attacks:  ${enemyAtt} damage!`);
        all.linkStats.hp-=enemyAtt;
        menuDisplay();
    }
};

function getItem(el){
    console.log("You got a " + all.treasures3[el].type);
    all.linkStats.items.push(all.treasures3[el]);
    all.linkStats.itemList.push(all.treasures3[el].type);
    menuDisplay();
    removeTreas(el);
}
function removeEnemy(el){
    let gone = document.getElementById("enemy" + el);
    all.enemyStats3.splice(el, 1);
    gone.remove();
 }

function removeTreas(el){
    let gone = document.getElementById("treas" + el);
    all.treasures3.splice(el, 1);
    gone.remove();
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
addMapItems();
placeCharacter();
menuDisplay();

const popUp = document.getElementById("talk");

// Click the old man to open the dialogue box
const clickOM = document.getElementById("old-man1");

// The X to close the popup
const span = document.getElementsByClassName("close")[0];

// when player clicks on the old man, open the dialogue
clickOM.onclick = function() {
  let words = document.getElementById('words');
  popUp.style.display = "block";
  let randomIndex = Math.floor(Math.random()*3)
  let message = [
      "Bring me something nice, I'll give you this key",
      "...? Never heard of her.  You must mean Nelda.",
      ""
  ]
  if (all.linkStats.weapon==="bare hands") {
    words.innerText ="You're gonna need a weapon if you're going in there.  Take this."
    alert('you received the Adequate Sword!')
    all.linkStats.weapon="Adequate Sword";
    all.linkStats.damage=80;

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



