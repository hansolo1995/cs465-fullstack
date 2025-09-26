/**
 * Author:      Hansol Lee
 * Description: Meals Controller that handles rendering for the Meals webpage
 */

// Create variables for the meals API endpoint and list of options
const mealsEndpoint = 'http://localhost:3000/api/meals';
const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
};

// Define meals object as an asynchronous function along with the 'await' keyword to synchronize communication with the endpoint
const meals = async function(req, res, next) {

    // Use the endpoint URL and the options defined previously to 'fetch' data
    await fetch(mealsEndpoint, options)

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
                    message = "No rooms exist in our database!";
                }
            }
            res.render('meals', {title: 'Travlr Getaways', meals: json, message});
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    meals
};