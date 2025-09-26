/**
 * Author:      Hansol Lee
 * Description: News Controller that handles rendering for the News webpage
 */

// Create variables for the news API endpoint and list of options
const newsEndpoint = 'http://localhost:3000/api/news';
const options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
};

// Define news object as an asynchronous function along with the 'await' keyword to synchronize communication with the endpoint
const news = async function(req, res, next) {
    
    // Use the endpoint URL and the options defined previously to 'fetch' data
    await fetch(newsEndpoint, options)
            
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
                    message = "No news in our database!";
                }
            }
            res.render('news', {title: 'Travlr Getaways', news: json, message});
        })
        .catch((err) => res.status(500).send(err.message));
};

module.exports = {
    news
};