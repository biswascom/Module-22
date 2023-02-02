// let name1 = "KhAn";
// let name2 = "KHan";

// let name1LowerCase = name1.toLowerCase;
// let name2LowerCase = name2.toLowerCase;

// if (name1LowerCase === name2LowerCase) {
//     let str = "User Name is matched";
//     console.log (str);
// }
// else {
//     let str = "User Name is mismatched";
//     console.log (str);
// }

function userName(name1) {

    let name1LowerCase = name1.toLowerCase;

    let name2 = "Khan";
    let name2LowerCase = name2.toLowerCase;

    let str;

    if (name1LowerCase === name2LowerCase) {
        str = "User Name is matched";
    }
    else {
        str = "User Name is mismatched";
    }

    return str;
}

let inputUserName = "KHAN";
let result = userName(inputUserName);
console.log (result);