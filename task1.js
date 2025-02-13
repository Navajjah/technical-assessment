//start with a found_b variable as false
function solution(S) {
    let found_b = false
    //loop through the string
    for (let i = 0; i < S.length; i++) {
        // the S[i] === 'b' condition is met when the character at the current index is 'b' and the current index starts at 0
        if(S[i] === 'b') {
            found_b = true
        }
        // the S[i] === 'a' condition is met when the character at the current index which is still 0 is 'b' before the 'a'
        else if(S[i] === 'a' && found_b) {
            return false
        }
        return true
    }
}

//solution2
function solution(S) {
    let foundB = false; // Flag to track if 'b' has been seen

    for (let char of S) {
        if (char === 'b') {
            foundB = true; // Mark that we've seen a 'b'
        } else if (char === 'a' && foundB) {
            return false; // 'a' appears after 'b', so return false
        }
    }
    
    return true; // No violations found
}

//solution3
function solution(S) {
    return S.indexOf('ba') === -1 ? true : false;
}