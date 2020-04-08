// Opening page -- no enemies
window.localStorage;

const all = {
    linkStats: {
        hp: 150,
        weapon: "bare hands",
        damage: "20",
        x: 6, 
        y: 6,
        items: [],
        itemList: []
    },
    entrance: {
        x: 4, y: 1
    },
    oldManPos1:
    {x: 4, y: 4
    },
    treasures1: [
        {type: "potion",
        description: "restores health", 
        x: 2, y: 2
    }],
    rocks1: [
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
    ],
    enemyStats2: [
        {
        type: "scrub", 
        hp: 100,
        damage: 50,
        x: 2, 
        y: 2
    }],
    treasures2: [
        {type: "candle",
        description: "illuminates area",
        x: 6, 
        y: 1
        },
        {type: "potion",
        description: "restores hp",
        x: 1, 
        y: 1
        },
        {type: "xxx",
        description: "xxx",
        x: 8, 
        y: 4
    }],
    ustairs2: [
        {x: 4, y: 1},
        {x: 8, y: 2}
    ],
    dstairs2: [
        {x: 3, y: 5},
        {x: 5, y: 5}
    ],
    blueDoor: {
        x: 5, y: 3
    },
    walls2: [
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
    ],
    enemyStats3: [
        {
        type: "scrub", 
        hp: 100,
        damage: 50,
        x: 7, 
        y: 3
        },
        {
        type: "greater scrub",
        hp: 120,
        damage: 65,
        x: 3,
        y: 2
        }
    ], 
    treasures3: [
        {type: "ancient coin",
        description: "not in circulation, but impressive",
        x: 1, 
        y: 4
        },
        {type: "red key",
        description: "restores hp",
        x: 5, 
        y: 2
        },
        {type: "red key",
        description: "unlocks red door",
        x: 8, 
        y: 1
    }],
    oldManPos3: {
        x: 1, y: 1
        },
    ustairs3: [
        {x: 3, y: 5},
        {x: 5, y: 5}
        ],
    dstairs3: {
        x: 4, y: 3
        },
    redDoor: {
        x: 2, y: 2
        },
    holes3: [
        {x: 4, y: 1},
        {x: 5, y: 1}
        ],
    walls3: [
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
        {x: 2, y: 1},
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
        {x: 8, y: 5},
        {x: 8, y: 6},
        {x: 9, y: 0},
        {x: 9, y: 1},
        {x: 9, y: 2},
        {x: 9, y: 3},
        {x: 9, y: 4},
        {x: 9, y: 5},
        {x: 9, y: 6},
    ],
    enemyStats4: [
        {
        type: "sentinel", 
        hp: 200,
        damage: 90,
        x: 1, 
        y: 1
        },
        {
        type: "sentinel",
        hp: 200,
        damage: 90,
        x: 7,
        y: 3
        }
    ],
    treasures4: [
        {type: "mithril coat",
        description: "increases hp by 100",
        x: 8, 
        y: 5
        },
        {type: "red key",
        description: "unlocks red door",
        x: 3, 
        y: 1
        },
        {type: "Nelda's necklace",
        description: "a beautiful antique",
        x: 8, 
        y: 1
    }],
    ustairs4: {
        x: 4, y: 3
    },
    dstairs4: {
        x: 8, y: 3
    },
    holes4: [
        {x: 5, y: 1},
        {x: 4, y: 1}
    ],
    walls4: [
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
        {x: 2, y: 4},
        {x: 2, y: 6},
        {x: 3, y: 0},
        {x: 3, y: 2},
        {x: 3, y: 4},
        {x: 3, y: 6},
        {x: 4, y: 0},
        {x: 4, y: 2},
        {x: 4, y: 4},
        {x: 4, y: 6},
        {x: 5, y: 0},
        {x: 5, y: 2},
        {x: 5, y: 3},
        {x: 5, y: 4},
        {x: 5, y: 6},
        {x: 6, y: 0},
        {x: 6, y: 6},
        {x: 7, y: 0},
        {x: 7, y: 2},
        {x: 7, y: 4},
        {x: 7, y: 6},
        {x: 8, y: 0},
        {x: 8, y: 2},
        {x: 8, y: 4},
        {x: 8, y: 6},
        {x: 9, y: 0},
        {x: 9, y: 1},
        {x: 9, y: 2},
        {x: 9, y: 3},
        {x: 9, y: 4},
        {x: 9, y: 5},
        {x: 9, y: 6},
    ],
    enemyStats5: [{
        type: "ghost of Nelda", 
        hp: 400,
        damage: 140,
        x: 5, 
        y: 3
    }],
    treasures5: [
        {type: "Nelda's ring",
        description: "a tasteful and understated silver diamond ring",
        x: 1, 
        y: 3
        },
        {type: "Nelda's sceptre",
        description: "set with a gorgeous ruby",
        x: 2, 
        y: 2
        },
        {type: "Nelda's anklet",
        description: "golden and platium ropework with three fine sapphires",
        x: 2, 
        y: 3
        },
        {type: "Nelda's grimoire",
        description: "this priceless artifact is what it was all about",
        x: 2,
        y: 4
    }],
    ustairs5: {
        x: 8, y: 3
    },
    holes5: [
        {x: 1, y: 1},
        {x: 1, y: 2},
        {x: 1, y: 4},
        {x: 1, y: 5},
        {x: 2, y: 1},
        {x: 2, y: 5},
        {x: 3, y: 1},
        {x: 3, y: 5},
        {x: 4, y: 1},
        {x: 4, y: 5},
        {x: 5, y: 1},
        {x: 5, y: 5}
    ],
    walls5: [
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
        {x: 2, y: 6},
        {x: 3, y: 0},
        {x: 3, y: 6},
        {x: 4, y: 0},
        {x: 4, y: 6},
        {x: 5, y: 0},
        {x: 5, y: 6},
        {x: 6, y: 0},
        {x: 6, y: 6},
        {x: 7, y: 0},
        {x: 7, y: 6},
        {x: 8, y: 0},
        {x: 8, y: 6},
        {x: 9, y: 0},
        {x: 9, y: 1},
        {x: 9, y: 2},
        {x: 9, y: 3},
        {x: 9, y: 4},
        {x: 9, y: 5},
        {x: 9, y: 6},
    ],
    waterPos6: [
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
    {x: 2, y: 2},
    {x: 2, y: 3},
    {x: 2, y: 4},
    {x: 2, y: 5},
    {x: 3, y: 0},
    {x: 3, y: 1},
    {x: 3, y: 2},
    {x: 3, y: 3},
    {x: 4, y: 0},
    {x: 4, y: 1},
    ],
    treasures6: [
    {x: 7, y: 1}
    ],
    enemyStats6: [
    {x: 5, y: 5},
    {x: 7, y: 2},
    {x: 8, y: 1},
    {x: 8, y: 2},
    ],
    rocks6: [
    {x: 2, y: 6},
    {x: 3, y: 4},
    {x: 3, y: 5},
    {x: 3, y: 6},
    {x: 4, y: 4},
    {x: 4, y: 5},
    {x: 4, y: 6},
    {x: 4, y: 0},
    {x: 4, y: 6},
    {x: 5, y: 0},
    {x: 5, y: 1},
    {x: 5, y: 6},
    {x: 6, y: 0},
    {x: 6, y: 1},
    {x: 6, y: 6},
    {x: 7, y: 0},
    {x: 7, y: 6},
    {x: 8, y: 0},
    {x: 8, y: 6},
    {x: 9, y: 0},
    {x: 9, y: 1},
    {x: 9, y: 2},
    {x: 9, y: 3},
    {x: 9, y: 4},
    {x: 9, y: 5},
    {x: 9, y: 6},
    ]

}

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
    
    // if a treasure is there
    // if (treasures) {
        for (let i = 0; i < all.treasures1.length; i++) {
            let treas = document.getElementsByClassName('treasure');
            if (link.style.top === treas[i].style.top && link.style.left === treas[i].style.left) {
                let el = treas[i].id
                getItem(el);
            }
        }
    // }

    //  this is the exit point--it changes every level
    if (link.style.top === "50px" && link.style.left === "200px") {
        alert("you are entering Nelda's tomb");

        // put linkStats into storage
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
    console.log("You got a " + el)
    all.treasures1.pop();
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
      "What were you thinking coming here without a weapon?"
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

function menuDisplay(){
    hpDisplay = document.getElementById('linkhp');
    hpDisplay.innerText = `Your hp: ${all.linkStats.hp}`;
    weaponDisplay = document.getElementById('weapon')
    weaponDisplay.innerText = `Weapon: ${all.linkStats.weapon}`;
    itemDisplay = document.getElementById('items');
    itemDisplay.innerText = `Items: ${all.linkStats.items}`;
}