//  3nd basement setup
window.localStorage;
all = JSON.parse(localStorage.getItem('objString'));
const itemSound = new Audio("./item.wav");

function placeCharacter(){
    const link = document.createElement('div');
    link.className='link';
    link.style.left = (all.linkStats.x * 50).toString() + 'px';
    link.style.top = (all.linkStats.y * 50).toString() + 'px';
    document.querySelector('#board').appendChild(link);
}

function formBoundaries() {
    for (let i = 0; i < all.walls4.length; i++) {
        const wall = all.walls4[i];
        const wallElement = document.createElement('div');
        wallElement.className ='wall';
        wallElement.style.left = (wall.x * 50).toString() + 'px';
        wallElement.style.top = (wall.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(wallElement);
    }
};
// level-specific--UPDATE
function addMapItems(){
    for (let i = 0; i < all.holes4.length; i++) {
        const holeEl = document.createElement('div');
        const hole = all.holes4[i];
        holeEl.className ='hole';
        holeEl.style.left = (hole.x * 50).toString() + 'px';
        holeEl.style.top = (hole.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(holeEl);
    } 
    for (let i = 0; i < all.treasures4.length; i++) {
        const treasEl = document.createElement('div');
        const treas = all.treasures4[i];
        treasEl.className ='treasure';
        treasEl.id='treas' + i;
        treasEl.style.left = (treas.x * 50).toString() + 'px';
        treasEl.style.top = (treas.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(treasEl);
        if (all.treasures4[i].found==="yes"){
        treasEl.style.visibility="hidden";
        }
    }
        const ustairsEl = document.createElement('div');
        ustairsEl.id ='ustairs';
        ustairsEl.style.left = (all.ustairs4.x * 50).toString() + 'px';
        ustairsEl.style.top = (all.ustairs4.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(ustairsEl);  
        const dstairsEl = document.createElement('div');
        dstairsEl.id ='dstairs';
        dstairsEl.style.left = (all.dstairs4.x * 50).toString() + 'px';
        dstairsEl.style.top = (all.dstairs4.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(dstairsEl);  
    for (let i = 0; i < all.enemyStats4.length; i++) {
        const enemyEl = document.createElement('div');
        const enemy = all.enemyStats4[i];
        enemyEl.className ='sentinel';
        enemyEl.id='enemy' + i;
        enemyEl.style.left = (enemy.x * 50).toString() + 'px';
        enemyEl.style.top = (enemy.y * 50).toString() + 'px';
        document.querySelector('#board').appendChild(enemyEl);
        if (all.enemyStats4[i].dead==="yes"){
            enemyEl.style.visibility="hidden";
        }
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
    for (let i = 0; i < all.walls4.length; i++) {
        const wall = all.walls4[i];
        if (wall.x === x && wall.y === y) {
            return true;
        }
    }
    for (let i = 0; i < all.enemyStats4.length; i++) {
        const enemy = all.enemyStats4[i];
        if ((enemy.x === x && enemy.y === y) && (all.enemyStats4[i].dead==="no")) {
            return true;
    }
}
    return false;
}

function completeMove(x,y) {
    link = document.querySelector('.link');
    link.style.top = (y * 50).toString() + 'px';
    link.style.left = (x * 50).toString() + 'px';

        for (let i = 0; i < all.treasures4.length; i++) {
            let treas = document.getElementsByClassName('treasure');
            if ((all.linkStats.y === all.treasures4[i].y && all.linkStats.x === all.treasures4[i].x) && (all.treasures4[i].found==='no')) {
                let el = treas[i].id.substring(5,6);
                getItem(el);
            }
        }
        for (let i = 0; i < all.enemyStats4.length; i++) {
            let enemy = document.getElementsByClassName('sentinel');
            //  if you move next to an enemy, battle will initiate.
            if ((isAdjacent(all.enemyStats4[i].x, all.enemyStats4[i].y)) && (all.enemyStats4[i].dead==="no")) {
                let el = enemy[i].id.substring(5,6);
                battle(el);
            }
    }
    //  this is the exit point--it changes every level
    if (link.style.top === "150px" && link.style.left === "400px") {
        alert("Nelda awaits");
        localStorage.setItem('objString', JSON.stringify(all));
        window.location.replace("./level5.html");
    }
    //  this is to return to the previous screen--it changes every level
    if (link.style.top === "150px" && link.style.left === "200px") {
        localStorage.setItem('objString', JSON.stringify(all));
        window.location.replace("./level3.html");
    }
    // if link falls in a hole, it's instant death
    if ((link.style.top === "50px" && link.style.left === "200px") ||
    (link.style.top === "50px" && link.style.left === "250px")){
        alert('you fell in a hole and died badly');
        window.location.replace("./index.html");
    }
}

function isAdjacent(x, y){
    if ((x - 1 === all.linkStats.x && y === all.linkStats.y) || 
    (x + 1 === all.linkStats.x && y === all.linkStats.y) ||
    (x === all.linkStats.x && y+1 === all.linkStats.y) ||
    (x === all.linkStats.x && y-1 === all.linkStats.y)) {
        return true;
    } else {
        return false;
    }
}

function battle(el) {
    alert(`you encountered a ${all.enemyStats4[el].type}`);
    // link always goes first
    while (all.linkStats.hp > 0 && all.enemyStats4[el].hp > 0) {
        fightRound(el);
        if (all.linkStats.hp <= 0) {
            alert("you're real dead");
            window.location.replace("./index.html");
        }
        if (all.enemyStats4[el].hp <=0){        
            removeEnemy(el);
            alert("The sentinel was vanquished!")
            break;
        }
    }
    //  update the menu display
    menuDisplay();
}

function fightRound(el) {
    // link always goes first, causes at least 20 damage
    if (all.linkStats.itemList.includes("gauntlet")) {
        linkAtt = Math.max(Math.floor(Math.random()*all.linkStats.damage), (all.linkStats.damageFloor*1.5));
        } else {
        linkAtt = Math.max(Math.floor(Math.random()*all.linkStats.damage), all.linkStats.damageFloor);
    };
    alert("Link attacks with the " + all.linkStats.weapon + ":" + linkAtt + " damage!");
    all.enemyStats4[el].hp -=linkAtt;
    if (all.enemyStats4[el].hp >= 0) {
    // then the enemy goes
        let enemyAtt = Math.max(Math.floor(Math.random()*all.enemyStats4[el].damage),10);
        alert(`The ${all.enemyStats4[el].type} attacks:  ${enemyAtt} damage!`);
        all.linkStats.hp-=enemyAtt;
        menuDisplay();
    }
};

function getItem(el){
    alert("You got " + all.treasures4[el].type + "\n(" + all.treasures4[el].description+")");
    all.linkStats.itemList.push(all.treasures4[el].type);
    if (all.treasures4[el].type==="Nelda's robe"){
        all.linkStats.hp+=140;
    }
    itemSound.play();
    menuDisplay();
    removeTreas(el);

}
function removeEnemy(el){
    let gone = document.getElementById("enemy" + el);
    all.enemyStats4[el].dead="yes";
    gone.style.display="none"
 }

function removeTreas(el){
    let gone = document.getElementById("treas" + el);
    all.treasures4[el].found="yes";
    gone.style.display="none";
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

