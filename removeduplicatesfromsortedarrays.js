var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // Pointer for unique elements

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++; // Move i forward
            nums[i] = nums[j]; // Place the unique element
        }
    }
    
    return i + 1; // Number of unique elements
};

// Example usage:
let nums = [0,0,1,1,1,2,2,3,3,4];
let k = removeDuplicates(nums);
console.log(k, nums.slice(0, k)); // Output: 5 [0,1,2,3,4]
