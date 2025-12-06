const accountId = 13333
let accountEmail = "ronak@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
// console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "21212"
accountCity="Bengaluru"


console.table([accountId, accountEmail, accountPassword,accountCity,accountState]);

/* 
prefer not to use var
because of issue in block scope and functional scope
*/
