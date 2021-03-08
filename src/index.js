module.exports = function reverse(n) {
    return reversePositiveInt(Math.abs(n), 0);
}

function reversePositiveInt(n, acc) {
    if (n == 0) return acc;
    return reversePositiveInt(Math.floor(n/10), acc*10 + n%10);
}
