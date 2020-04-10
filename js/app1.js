// Opening page -- no enemies
window.localStorage;
const all = JSON.parse(localStorage.getItem('objString'));
const itemSound = new Audio("./item.wav");

function placeCharacter(){
    const link = document.createElement('div');
    link.className='link';
    link.style.left = (all.linkStats.x * 50).toString() + 'px';
    link.style.top = (all.linkStats.y * 50).toString() + 'px';
    document.querySelector('#board').appendChild(link);
}

function formBoundaries() {
    for (let i = 0; i < all.rocks1.length; i++) {
        const rock = all.rocks1[i];
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
    oldManEl.id ='old-man1';
    oldManEl.style.left = (all.oldManPos1.x * 50).toString() + 'px';
    oldManEl.style.top = (all.oldManPos1.y * 50).toString() + 'px';
    document.querySelector('#board').appendChild(oldManEl);
    const entranceEl = document.createElement('div');
    entranceEl.id ='entrance';
    entranceEl.style.left = (all.entrance.x * 50).toString() + 'px';
    entranceEl.style.top = (all.entrance.y * 50).toString() + 'px';
    document.querySelector('#board').appendChild(entranceEl);    
    for (let i = 0; i < all.treasures1.length; i++) {
        const treasEl = document.createElement('div');
        const treas = all.treasures1[i];
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
    for (let i = 0; i < all.rocks1.length; i++) {
        const rock = all.rocks1[i];
        if (rock.x === x && rock.y === y) {
            return true;
        }
    }
    // level 1 has no enemies, but one NPC
    if (all.oldManPos1.x === x && all.oldManPos1.y === y) {
        return true;
    }
    return false;

}

function completeMove(x,y) {
    link = document.querySelector('.link');
    link.style.top = (y * 50).toString() + 'px';
    link.style.left = (x * 50).toString() + 'px';
    
        for (let i = 0; i < all.treasures1.length; i++) {
            let treas = document.getElementsByClassName('treasure');
            if (link.style.top === treas[i].style.top && link.style.left === treas[i].style.left) {
                let el = treas[i].id.substring(5,6)
                getItem(el);
            }
        }

    //  this is the exit point--it changes every level
    if (link.style.top === "50px" && link.style.left === "200px") {
        alert("you are entering Nelda's tomb");
        localStorage.setItem('objString', JSON.stringify(all));
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
    alert("You got a " + all.treasures1[el].type + "\n(" + all.treasures1[el].description+")");
    all.linkStats.itemList.push(all.treasures1[el].type);
    itemSound.play();
    menuDisplay();
    removeTreas(el);
}

function removeTreas(el){
    let gone = document.getElementById("treas" + el);
    all.treasures1.splice(el, 1);
    gone.remove();
 }

formBoundaries();
addMapItems();
placeCharacter();
menuDisplay();

popUp = document.getElementById("talk");
let message = [
    "Bring me something nice, I'll give you this key",
    "...? Never heard of her.  You must mean Nelda.",
    "What were you thinking coming here without a weapon?",
    "Hey that's a nice hat!  Can I have it?",
    "Come back here when you're ready to quit",
]
// Click the old man to open the dialogue box
const clickOM = document.getElementById("old-man1");
clickOM.onclick = function() {

    let words = document.getElementById('words');
    popUp.style.display = "block";
    let randomIndex = Math.floor(Math.random()*3)
    if (all.linkStats.itemList.includes('stylish fedora')) {
    words.innerText = message[4];
    choice = confirm('give him the fedora?');
    if (choice) {
    alert('you received the blue key!')
    message.splice(0,4);
    message.push('how do I look?');
    message.push('I was a grave robber myself back in the day.  By gar...');
    fedIndex = all.linkStats.itemList.indexOf('stylish fedora');
    all.linkStats.itemList.splice(fedIndex,1);
    menuDisplay();
    all.linkStats.itemList.push('blue key');
    } 
    }
    if ((all.linkStats.itemList.includes("Nelda's ring")) && (!all.linkStats.itemList.includes("Nelda's grimoire")) && 
    (!all.linkStats.itemList.includes("the Biforce"))){
        finish = confirm('Quitting already?')
        if (finish){
            localStorage.clear();
            window.location.replace("./endgame3.html");
        }
    }
    if ((all.linkStats.itemList.includes("Nelda's grimoire")) && 
    (!all.linkStats.itemList.includes("the Biforce"))){
        finish = confirm('You got the grimoire!  Amazing! Ready to head back?');
        if (finish){
            localStorage.clear();
            window.location.replace("./endgame2.html");
        }
    }
    if (all.linkStats.itemList.includes("the Biforce")){
        finish = confirm('You have the Biforce...! Dear god, what will become of us? \nH-h-hail, dark master!');
        if (finish){
            localStorage.clear();
            window.location.replace("./endgame1.html");
        }
    }
  if (all.linkStats.weapon==="bare hands") {
    words.innerText ="You're gonna need a weapon if you're going in there.  Take this."
    alert('you received the Adequate Sword!')
    all.linkStats.weapon="Adequate Sword";
    all.linkStats.damage=80;
    all.linkStats.damageFloor=40;
  
  } else {
    words.innerText = message[randomIndex];
    randomIndex = Math.floor(Math.random()*3)
  }
menuDisplay();

}


function menuDisplay(){
    hpDisplay = document.getElementById('linkhp');
    hpDisplay.innerText = `Your hp: ${all.linkStats.hp}`;
    weaponDisplay = document.getElementById('weapon')
    weaponDisplay.innerText = `Weapon: ${all.linkStats.weapon}`;
    itemDisplay = document.getElementById('items');
    itemDisplay.innerText = `Items: ${all.linkStats.itemList}`;
}