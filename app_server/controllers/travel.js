/**
 * Author:      Hansol Lee
 * Description: Travel Controller that handles rendering for the Travel webpage
 */

// Create variables for the trips API endpoint and list of options
const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
};

// Define travel object as an asynchronous function along with the 'await' keyword to synchronize communication with the endpoint
const travel = async function(req, res, next) {
    
    // Use the endpoint URL and the options defined previously to 'fetch' data
    await fetch(tripsEndpoint, options)

        // Data fetched will be output as JSON and passed to the render method assuming an array of JSON objects exists and is not empty
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Array)) {
                message = 'API Lookup Error';
                json = [];
            }
            else {
                if (!json.length) {
                    message = "No trips exist in our database!";
                }
            }
            res.render('travel', {title: 'Travlr Getaways', trips: json, message});
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    travel
};