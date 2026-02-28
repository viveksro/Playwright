// Input values (change to test different scenarios)
let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let state;
let action;


if (isPresent === true && isDisplayed === true && isEnabled === true) {
  state = "READY";
  action = "Proceed with interaction.";
} 
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
  state = "DISABLED";
  action = "Wait or verify why the element is disabled.";
} 
else if (isPresent === true && isDisplayed === false) {
  state = "HIDDEN";
  action = "Check visibility conditions or wait for element to be visible.";
} 
else if (isPresent === false) {
  state = "NOT FOUND";
  action = "Verify locator or page load. Possible defect.";
} 
else {
  state = "UNKNOWN";
  action = "Investigate unexpected state.";
}


let severity = (isPresent === false)
  ? "CRITICAL"
  : (isDisplayed === false || isEnabled === false)
    ? "WARNING"
    : "OK";

// Print Report
console.log("===== UI ELEMENT VALIDATION REPORT =====");
console.log("State     :", state);
console.log("Severity  :", severity);
console.log("QA Action :", action);