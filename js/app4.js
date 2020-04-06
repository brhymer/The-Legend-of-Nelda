//  3nd basement setup

const linkPos = {
    x:4,
    y:3
};
const treasures = [
    {x: 3, y: 1},
    {x: 8, y: 1}
];
const enemies = [
    {x: 1, y: 1},
    {x: 7, y: 3}
]
const dstairs = {
    x: 8, y: 3
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
];

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