var Counter = require('./counter');

module.exports = Floor;

function Floor(flats) {
    this.super();
    this.flats = flats || [];
}

Floor.prototype = new Counter();
Floor.prototype.super = Counter;
Floor.prototype.constructor = Floor;

Floor.prototype.calculateCounterValue = function() {
    return Counter.sum(this.flats);
}
