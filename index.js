// Write your solution in this file!
// Initializing the employee Object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
};

// Function to update employee Object with new key-value pair 
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Creating new Object and copying value pairs from employee
    let newEmployee = {};
    for (let prop in employee) {
        newEmployee[prop] = employee[prop];
    }
   //updating specified key-value pair
    newEmployee[key] = value;
    return newEmployee;
}

// Function to update employee Object with a new key-value pair 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Add or update the specified key-value pair directly to the original employee Object
    employee[key] = value;
    return employee;
}

// Function to delete a key-value pair from employee Object 
function deleteFromEmployeeByKey(employee, key) {
    // Create a new Object and copy all key-value pairs from employee excdept the one with the specified key
    let newEmployee = {};
    for (let prop in employee) {
        if (prop !== key) {
            newEmployee[prop] = employee[prop];
        }
    }
    return newEmployee;
}

// Function to delete a key-value pair from employee Object 
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key-value pair directly from the original employee Object
    delete employee[key];
    return employee;
}

// Testing the functions
console.log("Original employee:", employee);

// Testing updateEmployeeWithKeyAndValue()
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 30);
console.log("Updated employee (non-destructive):", updatedEmployee);

// Testing destructivelyUpdateEmployeeWithKeyAndValue()
let destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "age", 30);
console.log("Updated employee (destructive):", destructivelyUpdatedEmployee);

// Testing deleteFromEmployeeByKey()
let deletedEmployee = deleteFromEmployeeByKey(employee, "name");
console.log("Employee with key 'name' deleted (non-destructive):", deletedEmployee);

// Testing destructivelyDeleteFromEmployeeByKey()
let destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("Employee with key 'name' deleted (destructive):", destructivelyDeletedEmployee);

// Original employee object should remain unchanged
console.log("Original employee (after modifications):", employee);

