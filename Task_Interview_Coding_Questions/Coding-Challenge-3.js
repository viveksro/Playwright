const MAX_ATTEMPTS = 5;

let attempt = 0;
let success = false;

do {
  attempt++;
  

  let randomValue = Math.random();
  console.log(`Attempt ${attempt}: Random Value = ${randomValue.toFixed(2)}`);

  if (randomValue > 0.6) {
    console.log("API Call SUCCESS ✅");
    success = true;
  } else {
    console.log("API Call FAILED ❌ - Retrying...");
  }

} while (!success && attempt < MAX_ATTEMPTS);

// Result
console.log("\n===== FINAL RESULT =====");
if (success) {
  console.log(`API call succeeded after ${attempt} attempt(s).`);
} else {
  console.log(`API call failed after ${MAX_ATTEMPTS} attempts. Escalate issue 🚨`);
}