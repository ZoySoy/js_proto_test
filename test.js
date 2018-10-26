var House = require('./src/house');
var Entrance = require('./src/entrance');
var Floor = require('./src/floor');
var Flat = require('./src/flat');

// 81 flats totally
var house = new House([
    new Entrance([
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
    ]),
    new Entrance([
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
    ]),
    new Entrance([
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
        new Floor([new Flat(1), new Flat(1), new Flat(1)]),
    ])
]);

var entrance = house.entrances[1];
var floor = entrance.floors[5];
var flat = floor.flats[2];
console.log(flat.getCounterValue());
console.log(floor.getCounterValue());
console.log(entrance.getCounterValue());
console.log(house.getCounterValue());

console.log('flat counter += 3');
flat.counterValue += 3;

console.log(flat.getCounterValue());
console.log(floor.getCounterValue());
console.log(entrance.getCounterValue());
console.log(house.getCounterValue());
