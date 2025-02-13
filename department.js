//solution 1
function solution(A) {
    let map = new Map()
    let maxCount = 0
    for (let i = 0; i < A.length; i++) {
        map.set(A[i], (map.get(A[i]) || 0) + 1)
        maxCount = Math.max(maxCount, map.get(A[i]))
    }


}

//solution2

function solution(A) {
    let dept = {}
    let maxCount = 0

    for(patient of A) {
        if (dept[patient]) {
            dept[patient]++
        }
        else {
            dept[patient] = 1
        }
    }
    for (let key in dept) {
        if (dict[key] > maxCount) {
            maxCount = dict[key]
        }
    }
    return maxCount
}


