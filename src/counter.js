module.exports = Counter;

// constructor function
function Counter(counterValue) {
    this.counterValue = counterValue || 0;
}

// for each object of type Counter
Counter.prototype.getCounterValue = function() {
    return this.calculateCounterValue
        ? this.calculateCounterValue()
        : this.counterValue;
}

// class level function (e.g. static)
Counter.sum = function(counters) {
    var result = 0;
    counters.forEach(counter => result += counter.getCounterValue());
    return result;
}