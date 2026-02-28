// Input array
let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCount = 0;
let failCount = 0;
let skipCount = 0;

for(let i=0; i<testResults.length; i++) {
    let result = testResults[i];
    if(result === "pass") {
        passCount++;
    } else if(result === "fail") {
        failCount++;
    } else if(result === "skip") {
        skipCount++;
    }
}
console.log("Pass Count:", passCount);
console.log("Fail Count:", failCount);
console.log("Skip Count:", skipCount);