const axios = require("axios")

// Get fresh data from the financial API
async function dataGetter(passedStock) {
    // Declaring a payload carrier in the right scope
    var payload

    // Awaiting for the asynchronous operation
    await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${passedStock}&token=bs90tenrh5re5dkf7vmg`)
        .then(function(response) {
            // Check if any data returned, otherwise tell user not found
            if (Object.keys(response.data).length != 0) {
                // Store the data
                payload = JSON.stringify(response.data)
            } else {
                payload = "Desired stock not found."
            }
        })
        // Catch errors
        .catch(function(error) {
            console.log(error)
        })
    // Return payload out of the proper function scope
    return payload
}

module.exports.dataGetter = dataGetter;