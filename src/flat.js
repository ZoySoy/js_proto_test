var Counter = require('./counter');

module.exports = Flat;

function Flat(counterValue) {
    this.super(counterValue);
}

Flat.prototype = new Counter();
Flat.prototype.super = Counter;
Flat.prototype.constructor = Flat;
