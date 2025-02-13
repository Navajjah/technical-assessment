function solution(A) {
    //convert the number into a string
    let str = A.toString();
    let leftPointer = 0
    let rightPointer = str.length - 1
    let ans = []
    //use a while loop because we have no idea how many times we're supposed to loop
    while (leftPointer < rightPointer) {
        ans.push(parseInt(str[leftPointer]))
        ans.push(parseInt(str[rightPointer]))
        leftPointer++
        rightPointer--
        if (leftPointer === rightPointer) {
            ans.push(parseInt(str[leftPointer]))
        }
    }
    return parseInt(ans.join(""))
}