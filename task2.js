function solution(S) {
    let map = {}
    for(char of S) {
        if(map[char]) {
            map[char]++
        }
        else {
            map[char] = 1
        }
    }
    let count = 0
    for(key in map) {
        if(map[key] % 2 !== 0) {
            count++
        }
    }
    return count
}