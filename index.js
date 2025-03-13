// Declare a variable in global scope
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set a global variable bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declares a global variable (bad practice)
}

// Function to overwrite bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// Function to attempt to change the constant (will cause an error)
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new person'; // This will throw an error
}
