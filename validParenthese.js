function validParenthesis(str) {
    let arr = [];
    for (let s of str) {
        if (s == '(') arr.push(')');
        else if (s == '{') arr.push('}');
        else if (s == '[') arr.push(']');
        else {
            if (arr.length == 0 || s !== arr.pop()) return false;
        }
    }
    return arr.length == 0;
}

console.log(validParenthesis1('({})'))
