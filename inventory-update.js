function updateInventory(arr1, arr2) {
    const allInv = arr1.concat(arr2);
    const finalInv = [];
    const known = {};
    for(let i = 0; i<allInv.length; i++) {
        if(known[allInv[i][1]]) {
            known[allInv[i][1]] += allInv[i][0];
            continue;
        }
        known[allInv[i][1]] = allInv[i][0];
    }
    for(const i in Object.entries(known)) {
        const tmp = Object.entries(known)[i][0];
        finalInv.push([Object.entries(known)[i][1], tmp])
    }
    return finalInv.sort((a, b) => {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    });
}

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
