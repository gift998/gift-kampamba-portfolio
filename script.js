// =========================================
// PORTFOLIO JAVASCRIPT
// =========================================

// Display a message when the website loads
console.log("Gift Kampamba's portfolio has loaded successfully.");


// =========================================
// CURRENT YEAR
// =========================================

// Automatically update the copyright year
const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
    `&copy; ${year} Gift Kampamba. All Rights Reserved.`;
