"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = void 0;
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
exports.swap = swap;
