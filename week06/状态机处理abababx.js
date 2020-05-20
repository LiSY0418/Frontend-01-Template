//作业：使用状态机完成”abababx”的处理。
function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if (c === "a") {
        return foundA;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if (c === "b") {
        return foundB;
    } else {
        return start;
    }
}

function foundB(c) {
    if (c === "a") {
        return foundA2;
    } else {
        return start;
    }
}


function foundA2(c) {
    if (c === "b") {
        return foundB2;
    } else {
        return start;
    }
}

function foundB2(c) {
    if (c === "a") {
        return foundA3;
    } else {
        return start;
    }
}

function foundA3(c) {
    if (c === "b") {
        return foundB3;
    } else {
        return start;
    }
}

function foundB3(c) {
    if (c === "x") {
        return end;
    } else if (c === "a") {
        return start;
    }
}


console.log(match("abababx")); //结果：true


// function match(string) {
//     let foundA = false;
//     let foundB = false;
//     let foundC = false;
//     let foundD = false;
//     let foundE = false;
//     let state = start;
//     for (let c of string) {
//         if (c == "a") {
//             fountA = true;
//         } else if (foundA && c == "b") {
//             foundB = true;
//         } else if (foundB && c == "c") {
//             foundC = true;
//         } else if (foundC && c == "d") {
//             foundD = true;
//         } else if (foundD && c == "e") {
//             foundE = true;
//         } else if (foundE && c == "f") {
//             return true;
//         } else {
//             founbA = false;
//             founbB = false;
//             founbC = false;
//             founbD = false;
//             founbE = false;

//         }
//     }
//     return false;
// }

// console.log(match("I am groot"));