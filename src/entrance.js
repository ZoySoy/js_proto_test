var Counter = require('./counter');

module.exports = Entrance;

function Entrance(floors) {
    this.floors = floors || [];
}

Entrance.prototype = new Counter();
Entrance.prototype.super = Counter;
Entrance.prototype.constructor = Entrance;

Entrance.prototype.calculateCounterValue = function() {
    return Counter.sum(this.floors);
}