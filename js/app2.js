// 1st basement setup
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
    for (let i = 0; i < all.walls2.length; i++) {
        const wall = all.walls2[i];
        const wallElement = document.createElement('div');
        wallElement.className ='wall';
        wallElement.style.left = (wall.x * 50).toString() + 'px';
        wallElement.style.top = (wall.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(wallElement);
    }
};
// level-specific--UPDATE
function addMapItems(){
 
    for (let i = 0; i < all.treasures2.length; i++) {
        const treasEl = document.createElement('div');
        const treas = all.treasures2[i];
        treasEl.className ='treasure';
        treasEl.id='treas' + i;
        treasEl.style.left = (treas.x * 50).toString() + 'px';
        treasEl.style.top = (treas.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(treasEl);
    }
    for (let i = 0; i < all.ustairs2.length; i++) {
        const ustairsEl = document.createElement('div');
        const ustrs = all.ustairs2[i];
        ustairsEl.className = 'ustairs';
        ustairsEl.id ='ustairs' + i;
        ustairsEl.style.left = (ustrs.x * 50).toString() + 'px';
        ustairsEl.style.top = (ustrs.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(ustairsEl);
    }
    for (let i = 0; i < all.dstairs2.length; i++) {
        const dstairsEl = document.createElement('div');
        const dstrs = all.dstairs2[i];
        dstairsEl.className = 'dstairs';
        dstairsEl.id ='dstairs' + i;
        dstairsEl.style.left = (dstrs.x * 50).toString() + 'px';
        dstairsEl.style.top = (dstrs.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(dstairsEl);  
    }
        const bdoorEl = document.createElement('div');
        bdoorEl.id ='blue-door';
        bdoorEl.style.left = (all.blueDoor.x * 50).toString() + 'px';
        bdoorEl.style.top = (all.blueDoor.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(bdoorEl); 
        const sdoorEl = document.createElement('div');
        sdoorEl.className ='wall';
        sdoorEl.style.left = (all.secretDoor.x * 50).toString() + 'px';
        sdoorEl.style.top = (all.secretDoor.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(sdoorEl);  

    for (let i = 0; i < all.enemyStats2.length; i++) {
        const enemyEl = document.createElement('div');
        const enemy = all.enemyStats2[i];
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
    for (let i = 0; i < all.walls2.length; i++) {
        const wall = all.walls2[i];
        if (wall.x === x && wall.y === y) {
            return true;
        }
    }
    for (let i = 0; i < all.enemyStats2.length; i++) {
        const enemy = all.enemyStats2[i];
        if (enemy.x === x && enemy.y === y) {
            return true;
        }
    }
    if (all.blueDoor.x === x && all.blueDoor.y === y) {     
        return true;   
    }
    return false;
}

function completeMove(x,y) {
    link = document.querySelector('.link');
    link.style.top = (y * 50).toString() + 'px';
    link.style.left = (x * 50).toString() + 'px';

        for (let i = 0; i < all.treasures2.length; i++) {
            let treas = document.getElementsByClassName('treasure');
            if (link.style.top === treas[i].style.top && link.style.left === treas[i].style.left) {
                let el = treas[i].id.substring(5,6);
                getItem(el);
            }
        }
        for (let i = 0; i < all.enemyStats2.length; i++) {
            let enemy = document.getElementsByClassName('enemy');
            //  if you move next to an enemy, battle will initiate.
            if (isAdjacent(all.enemyStats2[i].x, all.enemyStats2[i].y)) {
                let el = enemy[i].id.substring(5,6);
                battle(el);
            }
    }
    //  this is the exit point--it changes every level
    if ((link.style.top === "250px" && link.style.left === "150px")||
       (link.style.top === "250px" && link.style.left === "250px")) {
        alert("you don't know what you're getting into");
        localStorage.setItem('objString', JSON.stringify(all));
        window.location.replace("./level3.html");
    }
    //  this is to return to the previous screen--it changes every level
    if (link.style.top === "50px" && link.style.left === "200px") {
        localStorage.setItem('objString', JSON.stringify(all));
        window.location.replace("./level1.html");
    }
    //  secret door!
    if (link.style.top === "100px" && link.style.left === "450px") {
        if  (all.linkStats.itemList.includes('wind key')){
            localStorage.setItem('objString', JSON.stringify(all));
            window.location.replace("./secret.html");
        } else {
        alert('some force is blocking you');    
        link.style.left = '400px';
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
    alert(`you encountered a ${all.enemyStats2[el].type}`);
    // link always goes first
    while (all.linkStats.hp > 0 && all.enemyStats2[el].hp > 0) {
        fightRound(el);
        if (all.linkStats.hp <= 0) {
            alert("you're real dead");
            // popUp.style.display="none";
            localStorage.clear();
            window.location.replace("./index.html");
        }
        if (all.enemyStats2[el].hp <=0){        
            // enemyStats2.pop();
            // alert(enemyStats2[el])
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
    let linkAtt = Math.max(Math.floor(Math.random()*all.linkStats.damage), all.linkStats.damageFloor);
    alert("Link attacks with " + all.linkStats.weapon + ":" + linkAtt + " damage!");
    all.enemyStats2[el].hp -=linkAtt;
    if (all.enemyStats2[el].hp >= 0) {
    // then the enemy goes
        let enemyAtt = Math.max(Math.floor(Math.random()*all.enemyStats2[el].damage),10);
        alert(`The ${all.enemyStats2[el].type} attacks:  ${enemyAtt} damage!`);
        all.linkStats.hp-=enemyAtt;
        menuDisplay();
    }
};

function getItem(el){
    alert("You got a " + all.treasures2[el].type + "\n(" + all.treasures2[el].description+")");
    // all.linkStats.items.push(all.treasures2[el]);
    all.linkStats.itemList.push(all.treasures2[el].type);
    menuDisplay();
    removeTreas(el);
}
function removeEnemy(el){
    let gone = document.getElementById("enemy" + el);
    all.enemyStats2.splice(el, 1);
    gone.remove();
 }

function removeTreas(el){
    let gone = document.getElementById("treas" + el);
    all.treasures2.splice(el, 1);
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

// Click the door to open the dialogue box
const clickOM = document.getElementById("blue-door");

// The X to close the popup
const span = document.getElementsByClassName("close")[0];

// when player clicks on the door, open the dialogue
if (all.linkStats.itemList.includes('blue key')) {
    clickOM.onclick = function() {
  choice = confirm('use the blue key?')
  if (choice){
  clickOM.remove();
  all.blueDoor.x= 100;
  all.blueDoor.y=100;
  bluekeyIndex = all.linkStats.itemList.indexOf('blue key');
  all.linkStats.itemList.splice(bluekeyIndex,1);

  menuDisplay();

    }
    }
}

