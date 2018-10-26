var Counter = require('./counter');

module.exports = House;

function House(entrances) {
    this.super();
    this.entrances = entrances;
}

House.prototype = new Counter();
House.prototype.super = Counter;
House.prototype.constructor = House;

House.prototype.calculateCounterValue = function() {
    return Counter.sum(this.entrances);
}