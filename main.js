var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Paris", "Spain", "Norway", "UAE", "UK"];
console.log("Orignal order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Orignal order:", places);
console.log("Reverse Alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Orignal order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Orignal order:", places);
places.reverse();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse Alphabetical order:", places);
