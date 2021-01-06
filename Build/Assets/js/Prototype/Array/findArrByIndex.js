Array.prototype.findArrByIndex = function(index) {
    const key = this.getKeyByIndex(index);

    return this[key];
};
