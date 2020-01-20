var Counter = require('./counter');

module.exports = Entrance;

function Entrance(floors) {
    this.floors = floors || [];
}

// set parent
Entrance.prototype = new Counter();

// set parent constructor (super())
Entrance.prototype.super = Counter;

// define own constructor (because it was setted with parent's one after we set Counter as a parent)
Entrance.prototype.constructor = Entrance;

Entrance.prototype.calculateCounterValue = function() {
    return Counter.sum(this.floors);
}