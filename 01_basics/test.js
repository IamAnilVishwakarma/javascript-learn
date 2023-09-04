const accountId = 144343;
let accountEmail = "anil@gmail.com";
var accountPassword = "12345";
accountcity = "Kanpur";

// accountId = 2;    // not change 

console.log(accountId);

accountEmail = "hello@gmail.com";
accountPassword = 555332;
accountcity = "delhi";


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountcity]);   

