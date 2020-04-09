const all = {
    linkStats: {
        hp: 150,
        weapon: "bare hands",
        damage: "300",
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
        description: "restores hp", 
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
        {type: "potion",
        description: "restores hp",
        x: 6, 
        y: 1
        },
        {type: "potion",
        description: "restores hp",
        x: 1, 
        y: 1
        },
        {type: "gauntlet",
        description: "raises minimum attack damage",
        x: 8, 
        y: 4
        },
        {type: "dummy item",
        description: "you can't get it",
        x: 100,
        y: 100
        }],
    ustairs2: [
        {x: 4, y: 1}
    ],
    dstairs2: [
        {x: 3, y: 5},
        {x: 5, y: 5}
    ],
    blueDoor: {
        x: 5, y: 3
    },

    secretDoor: {
        x:9, y:2
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
        {type: "rubber soles",
        description: "helps protect against lightnight attacks",
        x: 1, 
        y: 4
        },
        {type: "stylish fedora",
        description: "nice, but not quite for me",
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
        x: 6,
        y: 4
        }
    ],
    treasures4: [
        {type: "mithril coat",
        description: "increases hp by 140",
        x: 8, 
        y: 5
        },
        {type: "wind key",
        description: "allows passage into a secret area",
        x: 3, 
        y: 1
        },
        {type: "Nelda's ring",
        description: "a tasteful and understated silver diamond ring",
        x: 8, 
        y: 1
        },
        {type: "Dummy item",
        description: "you can't get it",
        x: 100,
        y: 100
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
    enemyStats5: [
        {type: "shadow of Nelda", 
        hp: 400,
        damage: 140,
        x: 5, 
        y: 3
    }],
    treasures5: [
        {type: "Nelda's necklace",
        description: "a beautiful antique",
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
    dstairs5: {
        x: 3, y: 3
    },
    grave: {
        x: 4, y: 3
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
        {x: 9, y: 6}
    ],
    holes6: [
        {x: 0, y: 0},
        {x: 0, y: 1},
        {x: 0, y: 2},
        {x: 0, y: 3},
        {x: 0, y: 4},
        {x: 0, y: 5},
        {x: 0, y: 6},
        {x: 1, y: 0},
        {x: 1, y: 6},
        {x: 1, y: 1},
        {x: 1, y: 2},
        {x: 1, y: 4},
        {x: 1, y: 5},
        {x: 2, y: 0},
        {x: 2, y: 1},
        {x: 2, y: 5},
        {x: 2, y: 6},
        {x: 3, y: 0},
        {x: 3, y: 1},
        {x: 3, y: 1},
        {x: 3, y: 5},
        {x: 3, y: 6},
        {x: 4, y: 0},
        {x: 4, y: 1},
        {x: 4, y: 5},
        {x: 4, y: 6},
        {x: 5, y: 0},
        {x: 5, y: 1},
        {x: 5, y: 5},
        {x: 5, y: 6},
        {x: 6, y: 0}
    ],
    walls6: [
        {x: 2, y: 2},
        {x: 2, y: 4},
        {x: 3, y: 2},
        {x: 3, y: 4},
        {x: 4, y: 2},
        {x: 4, y: 4},
        {x: 5, y: 2},
        {x: 5, y: 4},
        {x: 6, y: 1},
        {x: 6, y: 5},
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
        {x: 9, y: 6}
    ],
    ustairs6: {
        x: 4, y: 3
    },
    treasures6: [
        {type: "the Biforce",
        desciption: "67% as good as the triforce",
        x: 7, 
        y: 3}
    ],
    enemyStats6: [
        {type: "Nelda herself",
        hp: 560,
        damage: 200,
        x: 6,
        y: 3
    }]
}


localStorage.setItem('objString', JSON.stringify(all));