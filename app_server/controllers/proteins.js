/**
 * Author:      Hansol Lee
 * Description: Proteins Controller that handles rendering for the Protein webpage
 */

// Create variables for the proteins API endpoint and list of options
const proteinsEndpoint = 'http://localhost:3000/api/proteins';
const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
};

// Define protein object as an asynchronous function along with the 'await' keyword to synchronize communication with the endpoint
const proteins = async function(req, res, next) {
    
    // Use the endpoint URL and the options defined previously to 'fetch' data
    await fetch(proteinsEndpoint, options)

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
                    message = "No proteins exist in our database!";
                }
            }
            res.render('proteins', {title: 'Travlr Getaways', proteins: json, message});
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    proteins
};