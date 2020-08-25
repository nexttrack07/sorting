"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
var helpers_1 = require("./helpers");
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                helpers_1.swap(arr, i, j);
            }
        }
    }
}
exports.bubbleSort = bubbleSort;
