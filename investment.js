//  A company invests its money in N projects (numbered from 0 to N−1). The K-th project has a dedicated bank account number A[K]. The first two characters of the account number are capital letters and represent the country code; the next six characters are digits.

// The company invests B[K] in the K-th project. Which country's projects receive the most investment?

// Write a function:

// function solution(A, B);

// that, given an array A consisting of N strings representing account numbers and an array B consisting of N integers representing investments, returns a string specifying the country code of the country that receives the most investment. If there are many possible answers, choose any of them.

// Examples:

// Given A = ["GB402342", "GB132491", "PL132048"] and B = [2, 2, 5], the function should return "PL".
// Given A = ["CC000000", "AB000000", "CC444444", "DD000000"] and B = [7, 10, 5, 8], the function should return "CC".
// Given A = ["FR123456", "US987654"] and B = [12, 12], the function should return either "FR" or "US".
// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..200,000];
// each element of array B is an integer within the range [1..10,000];
// each account number consists of eight characters (the first two are uppercase letters; the others are digits) and is unique.

//solution1
function solution(A, B) {
    let investementCountry = {}

    for(let i = 0; i < A.length; i++){
        let countryCode = A[i].slice(0, 2)
        if (!investementCountry[countryCode]) {
            investementCountry[countryCode] = 0
        }
        investementCountry[countryCode] += B[i]
    }
    let maxInvestment = 0
    let maxCountry = ''

    for(let country in investementCountry) {
        if (investementCountry[country] > maxInvestment) {
            maxInvestment = investementCountry[country]
            maxCountry = country
        }    
    }
        
    return maxCountry
}
//solution2
function solution(A, B) {
    let countryInvestment = {}
    for(let i = 0; i < A.length; i++) {
        let countryCode = A[i].slice(0, 2)
        if (countryInvestment[countryCode]) {
            countryInvestment[countryCode] += B[i]
        }
        else {
            countryInvestment[countryCode] = B[i]
        }
    }
    let maxInvestment = 0
    let countryCode = ''
    for(let country in countryInvestment) {
        if (countryInvestment[country] > maxInvestment) {
            maxInvestment = countryInvestment[country]
            countryCode = country
        }
    }
    return countryCode
}

