module.exports = Counter;

function Counter(counterValue) {
    this.counterValue = counterValue || 0;
}

Counter.prototype.getCounterValue = function() {
    return this.calculateCounterValue
        ? this.calculateCounterValue()
        : this.counterValue;
}

Counter.sum = function(counters) {
    var result = 0;
    counters.forEach(counter => result += counter.getCounterValue());
    return result;
}